import styled from "@emotion/styled";
import { UserCircle, ThumbsUp, ThumbsDown } from "@emotion-icons/fa-solid";
import { ISubmitButtonProps } from "../src/components/unit/board/write/BoardWriteTypes";

export const DetailContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 0;
  font-family: "Noto Sans CJK KR", sans serif !important;
`;
export const Container = styled.div`
  padding: 20px;
`;
export const BoardContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0px auto 30px;
  padding: 80px 102px;
  background: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const BoardTitleSection = styled.div`
  width: 100%;
  padding-bottom: 80px;
  text-align: center;

  h1 {
    font-size: 2.25rem;
    font-weight: bold;
  }
`;

export const BoardTitle = styled.h1`
  display: block;
  font-size: 2.25rem;
`;

export const InputSection = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

export const HalfTypeWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -12px 40px;
`;
export const HalfType = styled.div`
  width: 50%;
  padding: 0 12px;
`;

export const TextInput = styled.input`
  width: 100%;
  height: 52px;
  margin-bottom: 16px;
  border: 1px solid #bdbdbd;
  text-indent: 16px;
  outline: none;

  &::placeholder {
    color: #bdbdbd;
  }
  &:focus {
    border-width: 0 0 2px 0;
  }
`;

export const BoardContentsWrap = styled.div`
  width: 100%;
  height: 480px;
`;
export const BoardContents = styled.textarea`
  display: block;
  width: 100%;
  height: calc(100% - 32px);
  margin-top: 16px;
  padding: 16px;
  border: 1px solid #bdbdbd;
  text-align: left;
  line-height: 1.5;
  white-space: pre-line;
  words-break: break-all;
  outline: none;

  &::placeholder {
    color: #bdbdbd;
  }
`;

export const BoardLabel = styled.label`
  display: block;
  font-size: 1rem;
  margin-bottom: 16px;
`;

export const ColorPoint = styled.span`
  color: #ffd600;
`;

export const SearchPostalCode = styled.p`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0;
  padding-top: 16px;
  margin-bottom: 16px;
`;

export const SearchPostalcodeBtn = styled.a`
  display: inline-block;
  padding: 16px;
  background: #000;
  color: #fff;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    color: #fff;
  }
`;

export const SearchPostalcodeInput = styled.input`
  display: inline-block;
  width: 77px;
  height: 52px;
  margin-right: 16px;
  text-align: center;
  border: 1px solid #dbdbdb;

  &::placeholder {
    color: #bdbdbd;
  }
`;

export const ImageBoxWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
`;

export const ImageBoxList = styled.li`
  display: block;
  width: 78px;
  height: 78px;
  margin-right: 24px;
  list-style: none;
`;
export const ImageBox = styled.p`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  background: #bdbdbd;
  cursor: pointer;

  &::before {
    content: "+";
    position: absolute;
    top: 7px;
    left: 28px;
    font-size: 32px;
    color: #4f4f4f;
  }

  &::after {
    content: "Upload";
    position: absolute;
    bottom: 18px;
    left: 20px;
    font-size: 12px;
    color: #4f4f4f;
  }
`;
export const MainTypeRadioWrap = styled.p``;

export const MainTypeRadiolist = styled.span`
  position: relative;
  display: inline-block;
  width: 90px;
  margin-right: 20px;
`;
export const MainTypeRadioLabel = styled.label``;

export const MainTypeRadio = styled.input`
  display: none;

  + label {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #ddd;
    background-color: #fff;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      top: 4px;
      left: 4px;
      width: 12px;
      height: 12px;
      background: #ffd600;
      border-radius: 50%;
      opacity: 0;
    }

    span {
      position: absolute;
      top: 1px;
      left: 33px;
    }
  }

  :checked {
    + label {
      border-color: #ffd600;

      &::after {
        opacity: 1;
      }
    }
  }
`;

export const SubmitBtnWrap = styled.p`
  display: block;
  width: 100%;
  text-align: center;
  margin-top: 80px;
`;

export const SubmitBtn = styled.a`
  display: inline-block;
  padding: 14px 60px;
  text-align: center;
  font-size: 16px;
  background-color: ${(props: ISubmitButtonProps) =>
    props.isActive ? "#ddd" : "#ffd600"};
  &:hover {
    cursor: ${(props: ISubmitButtonProps) =>
      props.isActive ? "default" : "pointer"};
  }
`;

export const Errormessage = styled.span`
  display: block;
  padding: 5px 0;
  font-size: 14px;
  font-weight: 400;
  color: red;
`;
// Board Detail

export const BoardContsTitle = styled.h2`
  display: block;
  width: 80%;
  padding: 10px 0;
  font-size: 2.25rem;
  color: #333;
  text-align: left;
`;

export const BoardContsProfileWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px 0;
  border-bottom: 1px solid #ccc;
`;
export const UserImage = styled(UserCircle)`
  width: 40px;
  height: 40px;
  color: #ddd;
`;
export const UserInfoWrap = styled.div`
  width: 17%;
  align-self: flex-end;
  padding: 10px;
  text-align: left;
`;
export const UserName = styled.h4`
  font-size: 15px;
  font-weight: 500;
  color: #555;
`;
export const DateofWrite = styled.span`
  display: block;
  padding-top: 5px;
  font-size: 14px;
  font-weight: 500;
  color: #ececec;
`;
export const ContentsWrap = styled.div`
  padding: 70px 0;
`;
export const ImageSliderWrap = styled.div`
  img {
    width: 100%;
  }
`;
export const ContentText = styled.div`
  padding: 70px 0;
  font-size: 18px;
  color: #111;
  word-break: keep-all;
  line-height: 1.5;
`;
export const YoutubeWrap = styled.div`
  padding: 40px 0;
  text-align: center;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px 0 30px;
`;
export const BoardButton = styled.button`
  border: 1px solid #ddd;
  background: #f1f1f1;
  width: 180px;
  height: 45px;
  margin: 0 3%;
  text-align: center;
  font-size: 16px;
  color: #333;
  cursor: pointer;
`;

export const LikeSection = styled.div`
  padding-top: 70px;
  text-align: center;
`;

export const LikeWrap = styled.figure`
  display: inline-block;
  padding: 0 30px;

  figcaption {
    padding-top: 10px;
    font-size: 16px;
  }
`;

export const LikeIco = styled(ThumbsUp)`
  width: 25px;
  height: 25px;
  color: #ffd600;
`;

export const DisLikeIco = styled(ThumbsDown)`
  width: 25px;
  height: 25px;
  color: #ddd;
`;
