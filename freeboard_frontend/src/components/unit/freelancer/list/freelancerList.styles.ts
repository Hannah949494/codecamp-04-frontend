import styled from "@emotion/styled";
import { Heart, Search, Tags } from "@emotion-icons/fa-solid";
import InfiniteScroll from "react-infinite-scroller";
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media all and (max-width: 1200px) {
    padding: 0 20px;
  }
`;
export const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  font-weight: bold;

  @media all and (max-width: 767px) {
    font-size: 24px;
  }
`;
export const BestList = styled.ul`
  // display:flex;
  // flex-wrap:wrap;
  margin: 40px 20px;

  li {
    position: relative;
    width: 25%;
    max-height: 373px;
    margin-bottom: 20px;
    padding: 0 10px;

    @media all and (max-width: 969px) {
      width: 33.333%;
    }

    @media all and (max-width: 767px) {
      width: 50%;
    }
  }
`;

export const BestListCard = styled.figure`
  height: 100%;
  box-shadow: 4px 7px 13px 2px #ddd;

  p {
    height: 220px;
    overflow: hidden;
    img {
      display: block;
      width: 100%;
      height: 100%;

      transform: scale(1);
      transition: 0.5s;

      &:hover {
        transform: scale(1.1);
        transition: 0.5s;
      }
    }
  }
`;

export const BestListCardConts = styled.figcaption`
  padding: 30px;

  dl {
    dt {
      font-size: 13px;
      color: #ccc;
    }

    dd {
      max-height: 40px;
      padding: 10px 0;
      font-size: 15px;
      line-height: 18px;
      word-break: keep-all;
      white-space: pre-wrap;

      &:last-child {
        position: relative;
        padding-top: 20px;
        text-align: right;
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
`;
export const PriceTag = styled(Tags)`
  position: absolute;
  top: 50%;
  right: 110px;
  width: 20px;
  height: 20px;
  color: #888;
`;

export const FreelancerList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 40px 20px;

  @media all and (max-width: 1024px) {
    margin: 80px 0;
  }

  li {
    position: relative;
    width: 25%;
    max-height: 400px;
    margin-bottom: 40px;
    padding: 0 10px;

    @media all and (max-width: 969px) {
      width: 33.333%;
    }

    @media all and (max-width: 767px) {
      width: 50%;
    }

    @media all and (max-width: 480px) {
      width: 100%;
    }
  }
`;
export const FreeLancerListCard = styled.figure`
  height: 100%;
  box-shadow: 4px 7px 13px 2px #ddd;

  p {
    height: 220px;
    overflow: hidden;

    @media all and (max-width: 767px) {
      height: 150px;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;

      transform: scale(1);
      transition: 0.5s;

      &:hover {
        transform: scale(1.1);
        transition: 0.5s;
      }
    }
  }
`;

export const FreeLancerListCardConts = styled.figcaption`
  padding: 30px;

  @media all and (max-width: 767px) {
    padding: 15px;
  }

  dl {
    dt {
      font-size: 13px;
      color: #ccc;
    }

    dd {
      max-height: 40px;
      padding-top: 10px;
      font-size: 15px;
      line-height: 18px;
      word-break: keep-all;
      white-space: pre-wrap;

      &:last-child {
        position: relative;
        padding-top: 20px;
        text-align: right;
        font-size: 1.25rem;
        font-weight: bold;
      }
    }
  }
`;

export const InfiniteSCrollStyle = styled(InfiniteScroll)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const ReadMore = styled.p`
  text-align: center;

  button {
    width: 150px;
    padding: 5px 10px;
    border: 1px solid #d9bd88;
    background: transparent;
    font-size: 14px;
    line-height: 1.5;

    &:hover {
      background-color: #d9bd88;
      color: #fff;
    }
  }
`;

export const pickedDate = styled.figure`
  position: absolute;
  z-index: 5;
  top: 10px;
  right: 25px;
  text-align: center;
  figcaption {
    padding-top: 5px;
    font-size: 14px;
    color: #ececec;
  }
  &:hover {
    figcaption {
      color: #d9bd88;
    }
  }
`;
export const Pickheart = styled(Heart)`
  width: 20px;
  height: 20px;
  color: #eee;

  &:hover {
    color: #d9bd88;
  }
`;

export const Keyword = styled.p`
  display: inline-block;
  font-size: 14px;
`;

// search Bar

export const SearchWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 1170px;
  text-align: right;
`;
export const SearchInput = styled.input`
  width: 70%;
  height: 45px;
  border: 1px solid #ececec;
  text-indent: 10px;
`;

export const SearchIco = styled(Search)`
  width: 25px;
  height: 25px;
  color: #333;
`;

export const SearchBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  background-color: transparent;
  cursor: pointer;
`;

export const WriteButton = styled.button`
  display: block;
  width: 150px;
  height: 45px;
  margin: 10px 0 0 auto;
  border: 1px solid #ececec;
  background-color: transparent;
  cursor: pointer;
`;
