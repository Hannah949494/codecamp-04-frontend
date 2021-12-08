import { Global } from "@emotion/react";
// import "../styles/reset.css";
import Layout from "../src/components/commons/layout";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { AppProps } from "next/dist/shared/lib/router/router";
import "../styles/fonts/NotoSansKR/NotoSansKR.css";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://backend04.codebootcamp.co.kr/graphql",
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
