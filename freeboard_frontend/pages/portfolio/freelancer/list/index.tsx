import { gql, useQuery } from "@apollo/client"
import { IQuery, IQueryFetchUseditemsArgs } from "../../../../src/commons/types/generated/types"
import * as F from "../../../../src/components/unit/freelancer/list/freelancerList.styles"
import Slider  from "react-slick"
import InfiniteScroll from "react-infinite-scroller"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { wrap } from "lodash"


const FETCH_USEDBESTITEMS = gql`
    query fetchUsedItemsOfTheBest{
        fetchUseditemsOfTheBest{
            _id
            name
            contents
            seller{
                name
            }
            price
            images
            createdAt
        }
    }
`
const FETCH_USED_ITEMS = gql`
    query fetchUsedItems($page : Int){
        fetchUseditems(page : $page){
            _id
            name
            contents
            seller{
                name
            }
            price
            images
            createdAt
        }
    }
`



export default function FreeLancerListPage(){
    const { data } = useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">, IQueryFetchUseditemsArgs>(FETCH_USEDBESTITEMS)
    const { data:useditemsData, fetchMore } = useQuery<Pick<IQuery, "fetchUseditems">, IQueryFetchUseditemsArgs>(FETCH_USED_ITEMS)

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
                
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

      function onLoadMore() {
        if (!useditemsData) return;
    
        fetchMore({
          variables: { page: Math.ceil(useditemsData?.fetchUseditems.length / 12) + 1 },
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

      function onload(){
          
      }

    return(
        <>
        <F.Wrapper>
            <F.Title>가장 인기많은 프리랜서 리스트</F.Title>
            <F.BestList>
            <Slider {...settings}>
                {data?.fetchUseditemsOfTheBest.map((el, index) => (
                    
                    <li key={el._id}>
                    <F.BestListCard>
                        <p><img src={`https://storage.googleapis.com/${el.images[0]}`} alt="" /></p>
                        <F.BestListCardConts>
                            <dl>    
                                <dt>{el.seller?.name}</dt>
                                <dd>{el.name}</dd>
                                <dd><F.PriceTag />{el.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</dd>
                            </dl>
                        </F.BestListCardConts>
                    </F.BestListCard>
                </li>    
                ))}
            </Slider>
                
            </F.BestList>

            <F.FreelancerList>
            <F.InfiniteSCrollStyle pageStart={0} loadMore={onload} hasMore={true}>
                {useditemsData?.fetchUseditems.map((el, index)=> (
                <li>
                <F.FreeLancerListCard>
                <p>{el.images[0]? <img src={`https://storage.googleapis.com/${el.images[0]}`} alt="" /> : <img src="/images/portfolio/sub/freelancer/noimage.png" alt="" />}</p>
                <F.FreeLancerListCardConts>
                <dl>
                    
                    <dt>{index + 1}</dt>
                    <dd>{el.seller?.name}</dd>
                    <dd>{el.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</dd>
                </dl>
                </F.FreeLancerListCardConts>
                </F.FreeLancerListCard>
                </li>    
                ))}
                </F.InfiniteSCrollStyle>
            </F.FreelancerList>
                <F.ReadMore><button onClick={onLoadMore}>Read More</button></F.ReadMore>
        </F.Wrapper>
        </>
    )
}