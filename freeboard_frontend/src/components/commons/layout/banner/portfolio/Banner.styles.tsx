import styled from "@emotion/styled";

export const Banner = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url("/images/portfolio/common/banner.png");
`;

export const BannerText = styled.div`
  display: table;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  padding: 200px 0;
`;
export const BannerTextInner = styled.div`
  display: table-cell;
  padding: 30px;
  vertical-align: middle;
  text-align: left;
  line-height: 2.875rem;
`;
export const BannerTitle = styled.h2`
  display: inline-block;
  margin-top: 40px;
  font-size: 2.25rem;
  font-weight: bold;
  color: #333;

  span {
    font-weight: bolder;
    color: #d9bd88;
  }
`;

export const BannerSubTit = styled.h5`
  font-size: 1.25rem;
  font-weight: bold;
  color: #d9bd88;
`;

export const ButtonWrap = styled.p`
  display: block;
  margin-top: 60px;
`;
export const BannerButton = styled.button`
  margin-right: 15px;
  padding: 5px 15px;
  background: transparent;
  border: 2px solid #ddd;
  border-radius: 15px;
  transition: 0.5s;
  line-height:36px;
  font-size:16px;
  &:hover {
    border-color: #d9bd88;
    background-color: #d9bd88;
    color: #fff;
    transition: 0.5s;
  }
`;
