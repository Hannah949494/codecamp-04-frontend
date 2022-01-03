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
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { onError } from "@apollo/client/link/error";
import "../styles/fonts/NotoSansKR/NotoSansKR.css";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";
import Topbutton from "../src/components/commons/buttons/topbutton/TopButton";
import { useRouter } from "next/router";

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
  userInfo?: {
    name?: string;
    email?: string;
    picture?: string;
  };
  setUserInfo?: Dispatch<SetStateAction<{}>>;
}

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
  const uploadLink = createUploadLink({
    uri: "https://backend04.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${myAccessToken}` },
    credentials: "include",
  });

  useEffect(() => {
    // const accessToken = localStorage.getItem("accessToken") || "";
    // if (accessToken != "") setMyAccessToken(accessToken);
    console.log(myAccessToken);
    if (localStorage.getItem("refreshToken")) getAccessToken(setMyAccessToken);
  }, []);
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1. 토큰만료 에러를 캐치
        if (err.extensions?.code === "UNAUTHENTICATED") {
          // 3. 기존에 실패한 요청 다시 재요청하기
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${getAccessToken(setMyAccessToken)}`, // 2. refreshToken으로 accessToken 재발급 받기 => restoreAccessToken
            },
          });
          return forward(operation);
        }
      }
    }
  });

  const router = useRouter();

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  const MAIN_ONLY = ["/"];

  const isMainOnly = MAIN_ONLY.includes(router.asPath);
  return (
    <GlobalContext.Provider value={myValue}>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Topbutton />
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
