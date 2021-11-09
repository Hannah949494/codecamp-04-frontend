import { BoardButton, BoardContainer, BoardContsProfileWrap, BoardContsTitle, ButtonWrap, Container, ContentsWrap, ContentText, DateofWrite, ImageSliderWrap, ProfileImg, UserImage, UserInfoWrap, UserName, YoutubeWrap,  } from "../../../styles/boards"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useQuery, gql } from "@apollo/client"
import { useRouter } from 'next/router'


export const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        fetchBoard(boardId: $boardId) {
        writer
        title
        contents
        createdAt
        }
    }
`


export default function BaordDetailPage(){
    const router = useRouter()
    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: router.query.boardId },
    });
    const settings = {
        dots: true,
        infinitie: true,
        speed: 1000,
        slidesToShow :1,
        slidesToScroll: 1

    }
        let NewDataContainer = "";
        let dataContainer = String(data?.fetchBoard.createdAt)
        let NewData = dataContainer.slice(0,10)
        let NewTime = dataContainer.slice(11,16)
            NewDataContainer = NewData + " " + NewTime
 




    return(
        <Container>
        <BoardContainer>
            
            <BoardContsProfileWrap>
            <BoardContsTitle>{data?.fetchBoard.title}</BoardContsTitle>
                <UserImage />
                <UserInfoWrap>
                <UserName>{data?.fetchBoard.writer}</UserName>
                <DateofWrite>{NewDataContainer || ""}</DateofWrite>
                </UserInfoWrap>
            </BoardContsProfileWrap>
            <ContentsWrap>    
                <Slider {...settings}>
                    <ImageSliderWrap>
                        <img src="/images/images.jpeg" />
                    </ImageSliderWrap>

                    <ImageSliderWrap>
                    <img src="/images/images.jpeg" />
                    </ImageSliderWrap>

                    <ImageSliderWrap>
                    <img src="/images/images.jpeg" />
                    </ImageSliderWrap>

                    <ImageSliderWrap>
                    <img src="/images/images.jpeg" />
                    </ImageSliderWrap>
                </Slider>
                <ContentText>
                    {data?.fetchBoard.contents}
                </ContentText>
                <YoutubeWrap>
                <iframe width="70%" height="450" src="https://www.youtube.com/embed/j9DsLrVkj4E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </YoutubeWrap>
            </ContentsWrap>
        </BoardContainer>
            <ButtonWrap>
                <BoardButton>목록으로</BoardButton>
                <BoardButton>수정하기</BoardButton>
                <BoardButton>삭제하기</BoardButton>
            </ButtonWrap>
        </Container>

    )
}