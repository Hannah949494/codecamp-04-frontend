import Slider from "react-slick";
import ReactPlayer from "react-player";
import {
  BoardButton,
  BoardContainer,
  BoardContsProfileWrap,
  BoardContsTitle,
  ButtonWrap,
  Container,
  ContentsWrap,
  ContentText,
  DateofWrite,
  DisLikeIco,
  ImageSliderWrap,
  LikeIco,
  LikeSection,
  LikeWrap,
  ProfileImg,
  UserImage,
  UserInfoWrap,
  UserName,
  YoutubeWrap,
} from "../../../../styles/boards";
import { IBoardDetailUIProps } from "./BoardDetailTypes";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <Container>
      <BoardContainer>
        <BoardContsProfileWrap>
          <BoardContsTitle>
            {props.data?.fetchBoard.title || ""}
          </BoardContsTitle>
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
          <ContentText>{props.data?.fetchBoard.contents}</ContentText>
          <YoutubeWrap>
            {props.data?.fetchBoard.youtubeUrl && (
              <ReactPlayer
                url={props.data?.fetchBoard.youtubeUrl}
                width="100%"
                height="450px"
              />
            )}
          </YoutubeWrap>
          <LikeSection>
            <LikeWrap>
              <p onClick={props.onClickLike}>
                <LikeIco />
              </p>
              <figcaption>{props.data?.fetchBoard.likeCount}</figcaption>
            </LikeWrap>
            <LikeWrap>
              <p onClick={props.onClickDislike}>
                <DisLikeIco />
              </p>
              <figcaption>{props.data?.fetchBoard.dislikeCount}</figcaption>
            </LikeWrap>
          </LikeSection>
        </ContentsWrap>
      </BoardContainer>
      <ButtonWrap>
        <BoardButton onClick={props.MoveToList}>목록으로</BoardButton>
        <BoardButton onClick={props.MoveToEditPage}>수정하기</BoardButton>
        <BoardButton onClick={props.onClickDelete}>삭제하기</BoardButton>
      </ButtonWrap>
    </Container>
  );
}
