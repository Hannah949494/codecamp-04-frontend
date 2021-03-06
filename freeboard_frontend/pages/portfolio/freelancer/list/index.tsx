import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../src/commons/types/generated/types";
import * as F from "../../../../src/components/unit/freelancer/list/freelancerList.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChangeEvent, MouseEvent, useState } from "react";
import router from "next/router";
import Dompurify from "dompurify";

const FETCH_USEDBESTITEMS = gql`
  query fetchUsedItemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      contents
      seller {
        name
      }
      pickedCount
      price
      images
      createdAt
    }
  }
`;
const FETCH_USED_ITEMS = gql`
  query fetchUsedItems($search: String, $page: Int) {
    fetchUseditems(search: $search, page: $page) {
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
export const sanitize = (html: string): string => Dompurify.sanitize(html);

export default function FreeLancerListPage() {
  const [keyword, setKeyword] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [loadmore, setLoadmore] = useState(false);

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
    setLoadmore(true);
  }

  function onClickSearch(event: MouseEvent<HTMLButtonElement>) {
    setSearchKeyword(keyword);
    refetch({ search: keyword });
  }

  function getSearchKeyword(event: ChangeEvent<HTMLInputElement>) {
    setKeyword(event.target.value);
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

  return (
    <>
      <F.Wrapper>
        <F.Title>?????? ???????????? ???????????? ?????????</F.Title>

        <F.BestList>
          <Slider {...settings}>
            {data?.fetchUseditemsOfTheBest.map((el, index) => (
              <li key={el._id} id={el._id} onClick={onClicktoDetail}>
                <F.BestListCard>
                  <F.pickedDate>
                    <F.Pickheart />
                    <figcaption>{el.pickedCount}</figcaption>
                  </F.pickedDate>
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
                        ???
                      </dd>
                    </dl>
                  </F.BestListCardConts>
                </F.BestListCard>
              </li>
            ))}
          </Slider>
        </F.BestList>
        <F.SearchWrap>
          <F.SearchInput
            type="text"
            placeholder="???????????? ???????????????!"
            onChange={getSearchKeyword}
          />
          <F.SearchBtn onClick={onClickSearch}>
            <F.SearchIco />
          </F.SearchBtn>
          <F.WriteButton onClick={onClickWrite}>??? ??????</F.WriteButton>
        </F.SearchWrap>

        <F.FreelancerList isLoaded={loadmore}>
          {useditemsData?.fetchUseditems.map((el, index) => (
            <li key={el._id}>
              <F.FreeLancerListCard id={el._id} onClick={onClicktoDetail}>
                <F.pickedDate>
                  <F.Pickheart />
                  <figcaption>{el.pickedCount}</figcaption>
                </F.pickedDate>
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
                    <dd
                      dangerouslySetInnerHTML={{
                        __html: Dompurify.sanitize(String(el.name)),
                      }}
                    ></dd>
                    <dd>
                      {el.price
                        ?.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      ???
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
