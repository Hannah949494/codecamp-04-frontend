import "../styles/globals.css";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Global } from "@emotion/react";
import { AppProps } from "next/dist/shared/lib/router/router";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/commons/styles/globalStyles";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { createUploadLink } from "apollo-upload-client";
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

interface IGlobalContext {
  accessToken?: String;
  setAccessToken?: Dispatch<SetStateAction<string>>;
  userInfo?: {};
  setUserInfo?: Dispatch<SetStateAction<{}>>;
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const GlobalContext = createContext<IGlobalContext>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [myAccessToken, setMyAccessToken] = useState("");
  const [myUserInfo, setMyUserInfo] = useState({});
  const myValue = {
    accessToken: myAccessToken,
    setAccessToken: setMyAccessToken,
    userInfo: myUserInfo,
    setUserInfo: setMyUserInfo,
  };

  // if(typeof window !== "undefined"){

  // }

  // if(process.browser){

  // }

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken") || "";
    if (accessToken != "") setMyAccessToken(accessToken);
  });

  const uploadLink = createUploadLink({
    uri: "http://backend04.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${myAccessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });
  return (
    <GlobalContext.Provider value={myValue}>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
