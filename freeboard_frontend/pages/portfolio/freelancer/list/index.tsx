import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../src/commons/types/generated/types";
import * as F from "../../../../src/components/unit/freelancer/list/freelancerList.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MouseEvent } from "react";
import router from "next/router";
import Searchbars01 from "../../../../src/components/commons/searchbars/01/Searchbars01.container";

const FETCH_USEDBESTITEMS = gql`
  query fetchUsedItemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      contents
      seller {
        name
      }
      price
      images
      createdAt
    }
  }
`;
const FETCH_USED_ITEMS = gql`
  query fetchUsedItems($page: Int) {
    fetchUseditems(page: $page) {
      _id
      name
      contents
      seller {
        name
      }
      price
      images
      createdAt
    }
  }
`;

const ERROR_IMAGE = "/images/portfolio/sub/freelancer/noimage.png";

export default function FreeLancerListPage() {
  // const [keyword, setKeyword] = useState("");
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemsOfTheBest">,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDBESTITEMS);
  const {
    data: useditemsData,
    fetchMore,
    refetch,
  } = useQuery<Pick<IQuery, "fetchUseditems">, IQueryFetchUseditemsArgs>(
    FETCH_USED_ITEMS
  );
  const settings = {
    dots: false,
    infinitie: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function onLoadMore() {
    if (!useditemsData) return;

    fetchMore({
      variables: {
        page: Math.ceil(useditemsData?.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };

        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  }

  function onErrorimage(event: any) {
    event.target.src = ERROR_IMAGE;
  }

  function onClicktoDetail(event: MouseEvent<HTMLLIElement>) {
    router.push(`/portfolio/freelancer/detail/${event.currentTarget.id}`);
  }

  function onClickWrite(event: MouseEvent<HTMLButtonElement>) {
    router.push("/portfolio/freelancer/write");
  }
  function onChangeKeyword(value: string) {
    setKeyword(value);
  }

  return (
    <>
      <F.Wrapper>
        <F.Title>가장 인기많은 프리랜서 리스트</F.Title>
        <F.BestList>
          <Slider {...settings}>
            {data?.fetchUseditemsOfTheBest.map((el, index) => (
              <li key={el._id} id={el._id} onClick={onClicktoDetail}>
                <F.BestListCard>
                  <p>
                    <img
                      src={`https://storage.googleapis.com/${el.images[0]}`}
                      alt=""
                      onError={onErrorimage}
                    />
                  </p>
                  <F.BestListCardConts>
                    <dl>
                      <dt>{el.seller?.name}</dt>
                      <dd>{el.name}</dd>
                      <dd>
                        <F.PriceTag />
                        {el.price
                          ?.toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        원
                      </dd>
                    </dl>
                  </F.BestListCardConts>
                </F.BestListCard>
              </li>
            ))}
          </Slider>
        </F.BestList>
        <div>
          <input type="text" placeholder="검색어를 입력하세요!" />
          <button>검색</button>
        </div>

        <button onClick={onClickWrite}>글 작성</button>

        <F.FreelancerList>
          {useditemsData?.fetchUseditems.map((el, index) => (
            <li key={el._id}>
              <F.FreeLancerListCard id={el._id} onClick={onClicktoDetail}>
                <p>
                  <img
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                    onError={onErrorimage}
                    alt=""
                  />
                </p>
                <F.FreeLancerListCardConts>
                  <dl>
                    <dt>{index + 1}</dt>
                    <dd>{el.seller?.name}</dd>
                    <dd>
                      {el.price
                        ?.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      원
                    </dd>
                  </dl>
                </F.FreeLancerListCardConts>
              </F.FreeLancerListCard>
            </li>
          ))}
        </F.FreelancerList>

        <F.ReadMore>
          <button onClick={onLoadMore}>Read More</button>
        </F.ReadMore>
      </F.Wrapper>
    </>
  );
}
