import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_USED_ITEM_DETAIL = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      seller {
        name
      }
      name
      contents
      price
      createdAt
      images
    }
  }
`;

export default function FreelancerDetailPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM_DETAIL, {
    variables: { useditemId: router.query.id },
  });
  return (
    <>
      <div>
        <h1>{data?.fetchUseditem.name}</h1>
        <h2>{data?.fetchUseditem.seller.name}</h2>
        <p>{data?.fetchUseditem.createdAt}</p>
        <div>
          {data?.fetchUseditem.images
            ?.filter((el: string) => el)
            .map((el: string) => (
              <div key={el}>
                <img src={`https://storage.googleapis.com/${el}`} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
