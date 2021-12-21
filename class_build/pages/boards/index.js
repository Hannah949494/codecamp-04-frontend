import Head from "next/head";
export default function BoardsPage() {
  return (
    <>
      <Head>
        <meta property="og:title" content="나만의 사이트" />
        <meta property="og:url" content="http://hannah-j.site" />
        <meta
          property="og:image"
          content="http://newsimg.hankookilbo.com/2019/04/29/201904291390027161_3.jpg"
        />
        <meta property="og:description" content="안녕하세요! 환영합니다!" />
      </Head>
      <div>안녕하세요! 게시판입니다!</div>
    </>
  );
}
