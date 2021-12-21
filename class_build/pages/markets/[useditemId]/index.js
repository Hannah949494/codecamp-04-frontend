import Head from "next/head";
export default function BoardsPage() {
  return (
    <>
      <Head>
        <meta property="og:title" content={props.fetchUseditem.name} />
        <meta property="og:url" content="http://hannah-j.site" />
        <meta property="og:image" content={props.fetchUseditem.images[0]} />
        <meta property="og:description" content={props.fetchUseditem.remarks} />
      </Head>
      <div>안녕하세요! 상품페이지 입니다!</div>
    </>
  );
}

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      name
      remarks
      images
    }
  }
`;

export const getServerSideProps = async (context) => {
  const result = await request(
    "https://backend04.codebootcamp.co.kr/graphql",
    FETCH_USEDITEM,
    { useditemId: context.query.useditemId }
  );
  return {
    props: {
      fetchUseditem: {
        name: result.fetchUseditem.name,
        remarks: result.fetchUseditem.remarks,
        images: result.fetchUseditem.images[0],
      },
    },
  };
};
