import Slider from 'react-slick'
import { BoardButton, BoardContainer, BoardContsProfileWrap, BoardContsTitle, ButtonWrap, Container, ContentsWrap, ContentText, DateofWrite, ImageSliderWrap, ProfileImg, UserImage, UserInfoWrap, UserName, YoutubeWrap,  } from "../../../../styles/boards"
import { IBoardDetailUIProps } from './BoardDetailTypes'

export default function BoardDetailUI(props: IBoardDetailUIProps){
    
    return(
        <Container>
        <BoardContainer>
            
            <BoardContsProfileWrap>
            <BoardContsTitle>{props.data?.fetchBoard.title || ""}</BoardContsTitle>
                <UserImage />
                <UserInfoWrap>
                <UserName>{props.data?.fetchBoard.writer || ""}</UserName>
                <DateofWrite>{props.NewDataContainer || ""}</DateofWrite>
                </UserInfoWrap>
            </BoardContsProfileWrap>
            <ContentsWrap>    
                <Slider {...props.settings}>
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
                    {props.data?.fetchBoard.contents}
                </ContentText>
                <YoutubeWrap>
                <iframe width="70%" height="450" src="https://www.youtube.com/embed/j9DsLrVkj4E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </YoutubeWrap>
            </ContentsWrap>
        </BoardContainer>
            <ButtonWrap>
                <BoardButton onClick = {props.MoveToList}>목록으로</BoardButton>
                <BoardButton onClick = {props.MoveToEditPage}>수정하기</BoardButton>
                <BoardButton onClick = {props.onClickDelete} >삭제하기</BoardButton>
            </ButtonWrap>
        </Container>

    )

}