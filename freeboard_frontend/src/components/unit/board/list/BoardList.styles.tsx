import styled from "@emotion/styled";
import { Pen, Heart } from "@emotion-icons/fa-solid";
import { Space } from "antd";
import { ISearchActiveProps, ITextTokenProps } from "./BoardListTypes";
export const ListWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  &::after {
    content: "";
    display: block;
    clear: both;
  }
`;

export const BestListWRap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`;
export const BestListCard = styled.li`
  width: 25%;
  padding: 0 10px;
  cursor: pointer;
`;

export const BestListConts = styled.figure`
  border-radius: 30px;
  background: #fff;
  border: 1px solid #ebebeb;
  overflow: hidden;
`;
export const ImageSection = styled.p`
  position: relative;
  width: 100%;
  height: 150px;
  background: #ddd;

  ::after {
    content: "No Image";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    color: #fff;
  }
`;
export const BestContsTxt = styled.figcaption`
  padding: 20px;
`;

export const BestContsTitle = styled.h5`
  font-size: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BestContsWriter = styled.h6`
  padding-top: 10px;
  font-size: 15px;
  font-weight: bold;
  color: #333;
`;

export const BestContsDate = styled.span`
  display: block;
  padding-top: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;
export const BestLikeWrap = styled.figure`
  display: inline-block;
  text-align: center;
`;
export const BestLikeTxt = styled.figcaption`
  padding-top: 5px;
  font-size: 12px;
  color: #111;
`;
export const BestLikeIco = styled(Heart)`
  width: 20px;
  height: 20px;
  color: #ffd600;
`;

export const BestContsContents = styled.p`
  padding: 10px 0;
  font-size: 16px;
  font-weight: 500;
  color: #111;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BoardSearchWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 100%;
  padding: 20px 0;
`;
export const BoardSearchInput = styled.input`
  width: 30%;
  height: 40px;
  border: 1px solid #ddd;
  margin-right: 20px;
  font-size: 0.865rem;
  text-indent: 10px;
`;

export const SearchButton = styled.button`
  width: 150px;
  height: 40px;
  background: #111;
  color: #fff;
  border: none;
  font-size: 0.865rem;
  margin-left: 5px;
`;

export const DatePick = styled(Space)`
  height: 40px;

  .ant-picker {
    height: 40px;
  }
`;

export const BoardListWrap = styled.ul`
  width: 100%;
  margin-top: 50px;
`;

export const BoardListType = styled.li`
  display: table;
  width: 100%;
  padding: 15px 0;
  border-top: 2px solid #333;
  border-bottom: 1px solid #ececec;

  div {
    display: table-cell;
    font-size: 15px;
    text-align: center;
  }
`;
export const BoardCheckbox = styled.div`
  width: 50px;
`;
export const BoardNumber = styled.div`
  width: 50px;
`;
export const BoardWriter = styled.div`
  width: 100px;
`;

export const BoardDate = styled.div`
  width: 150px;
`;
export const BoardDelete = styled.div`
  width: 150px;
`;
export const BoardList = styled.li`
  display: table;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #ececec;
  cursor: pointer;

  div {
    display: table-cell;
    text-align: center;
    font-size: 15px;
  }
  &:nth-of-type(odd) {
    background: #ececec;
  }

  &:hover {
    background: #ccc;
    color: #fff;
    transition: all 0.2s;
  }
`;
export const WriteButtonWrap = styled.p`
  position: relative;
  display: inline-block;
  float: right;

  &:hover {
    svg {
      color: #fff;
    }

    button {
      background: #111;
      color: #fff;
    }
  }
`;
export const WriteButton = styled.button`
  position: relative;
  width: 170px;
  height: 50px;
  padding-left: 40px;
  padding-right: 20px;
  margin-top: 20px;
  background: transparent;
  border: 1px solid #ececec;
  outline: none;
  font-size: 14px;

  ::before {
    content: "\f007";
    position: absolute;
    top: 0;
    right: 0;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    width: 30px;
    height: 50px;
  }
`;

export const WriteButtonIco = styled(Pen)`
  position: absolute;
  top: 50%;
  left: 20px;
  width: 20px;
  height: 20px;
  color: #111;
  z-index: 2;
`;

export const TextToken = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatched ? "red" : "black")};
`;

export const SearchResult = styled.div`
  display: ${(props: ISearchActiveProps) =>
    props.isActive ? "block" : "none"};
`;
