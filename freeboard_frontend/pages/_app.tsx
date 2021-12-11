import { Global } from "@emotion/react";
// import "../styles/reset.css";
import Layout from "../src/components/commons/layout";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { initializeApp } from "firebase/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { AppProps } from "next/dist/shared/lib/router/router";
import "../styles/fonts/NotoSansKR/NotoSansKR.css";

const firebaseConfig = {
  apiKey: "AIzaSyCGeNwypYpeEEWSz5vZ9GdPiFwl5IbGoR4",
  authDomain: "codecamp-04-hannah.firebaseapp.com",
  projectId: "codecamp-04-hannah",
  storageBucket: "codecamp-04-hannah.appspot.com",
  messagingSenderId: "875969612855",
  appId: "1:875969612855:web:3a01dbbd20133b478703b2",
};
export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  const uploadLink = createUploadLink({
    uri: "http://backend04.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
