import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { AppProps } from "next/dist/shared/lib/router/router";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGeNwypYpeEEWSz5vZ9GdPiFwl5IbGoR4",
  authDomain: "codecamp-04-hannah.firebaseapp.com",
  projectId: "codecamp-04-hannah",
  storageBucket: "codecamp-04-hannah.appspot.com",
  messagingSenderId: "875969612855",
  appId: "1:875969612855:web:3a01dbbd20133b478703b2",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
