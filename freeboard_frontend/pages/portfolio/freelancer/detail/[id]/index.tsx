import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Dompurify from "dompurify";
import { useState } from "react";
import * as F from "../../../../../src/components/unit/freelancer/detail/freelancerDetail.styles";

export const sanitize = (html: string): string => Dompurify.sanitize(html);

const FETCH_USED_ITEM_DETAIL = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      seller {
        _id
        name
      }
      name
      contents
      price
      remarks
      images
      useditemAddress {
        address
        addressDetail
      }
      pickedCount
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export default function FreelancerDetailPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM_DETAIL, {
    variables: { useditemId: router.query.id },
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [deleteUseditem] = useMutation(DELETE_PRODUCT);

  const TAB_CONS_ARR = [
    {
      tabTitle: (
        <li
          className={activeIndex === 0 ? "is-active" : ""}
          onClick={() => tabClickHandler(0)}
        >
          서비스 설명
        </li>
      ),
      tabConts: (
        <div>
          <F.ProductConts
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(String(data?.fetchUseditem.contents)),
            }}
          />
        </div>
      ),
    },

    {
      tabTitle: (
        <li
          className={activeIndex === 1 ? "is-active" : ""}
          onClick={() => tabClickHandler(1)}
        >
          가격 정보
        </li>
      ),

      tabConts: <div>가격정보</div>,
    },
    {
      tabTitle: (
        <li
          className={activeIndex === 2 ? "is-active" : ""}
          onClick={() => tabClickHandler(2)}
        >
          취소 환불규정
        </li>
      ),
      tabConts: <div>취소 환불규정</div>,
    },
    {
      tabTitle: (
        <li
          className={activeIndex === 3 ? "is-active" : ""}
          onClick={() => tabClickHandler(3)}
        >
          서비스 후기
        </li>
      ),
      tabConts: <div>후기</div>,
    },
  ];

  const tabClickHandler = (index: any) => {
    setActiveIndex(index);
  };

  async function deleteProduct() {
    try {
      await deleteUseditem({
        variables: { useditemId: router.query.id },
      });
      router.push("/portfolio/freelancer/list");
      alert("제품이 삭제되었습니다.");
    } catch {
      alert("실패");
    }
  }
  const ERROR_IMAGE = "/images/portfolio/sub/freelancer/noimage.png";

  function onErrorimage(event: any) {
    event.target.src = ERROR_IMAGE;
  }

  return (
    <>
      {/* <div>
        <h1>{data?.fetchUseditem.name}</h1>
        <h2>{data?.fetchUseditem.seller.name}</h2>
        <p>{data?.fetchUseditem.createdAt}</p>
        
        <p>{data?.fetchUseditem.useditemAddress.address}</p>
        <p>{data?.fetchUseditem.pickedCount}</p>
      </div> */}
      <F.Warpper>
        <F.ContsHeader>
          <F.ConstImgSec>
            {data?.fetchUseditem.images
              ?.filter((el: string) => el)
              .map((el: string) => (
                <figure key={el}>
                  <img src={`https://storage.googleapis.com/${el}`} />
                </figure>
              ))}
          </F.ConstImgSec>
          <F.contsTxtSec>
            <F.Title>{data?.fetchUseditem.name}</F.Title>
            <F.SellerName>{data?.fetchUseditem.seller.name}</F.SellerName>
            <p>{data?.fetchUseditem.remarks}</p>
          </F.contsTxtSec>
          <button onClick={deleteProduct}>글 삭제</button>
        </F.ContsHeader>

        <F.ContsBody>
          <F.TabMenu>
            {TAB_CONS_ARR.map((section, index) => {
              return section.tabTitle;
            })}
          </F.TabMenu>
          <div>{TAB_CONS_ARR[activeIndex].tabConts}</div>
        </F.ContsBody>
      </F.Warpper>
    </>
  );
}
