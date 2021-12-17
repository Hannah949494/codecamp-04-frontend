import styled from "@emotion/styled";

export const Warpper = styled.div`
  width: 100%;
  max-width: 1200px;
`;

export const ContsHeader = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
`;

export const ConstImgSec = styled.div`
  width: 50%;
  padding: 0 20px;

  figure {
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`;

export const contsTxtSec = styled.div`
  width: 50%;
  padding: 0 20px;
`;

export const Title = styled.h2`
  padding-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.3;
  color: #333;
  word-break: keep-all;
`;

export const SellerName = styled.h5`
  font-size: 1.25rem;
  color: #555;
`;

export const ProductConts = styled.p`
  padding-top: 30px;
  font-size: 1rem;
`;

export const ContsBody = styled.section`
  padding: 50px 0;
`;
export const TabMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  li {
    padding: 15px 0;
    flex: 1;
    text-align: center;
    cursor: pointer;
    border-color: #ccc;
    border-style: solid;
    border-width: 1px;
    border-bottom: 1px solid #111;
    background-color: #ebebeb;

    &.is-active {
      border-color: #111;
      border-bottom: 0px;
      background: #fff;
    }
  }
`;
