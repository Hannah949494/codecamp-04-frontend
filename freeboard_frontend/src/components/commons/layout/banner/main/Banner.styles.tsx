import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const BannerImage = keyframes`
  0% {
    transform: translateX(1000%);
  }

  100%{
    transform: translateX(0%);
  }
`;
export const Banner = styled.section`
  width: 100%;
  height: 100vh;
  background: #feac5e; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #4bc0c8,
    #c779d0,
    #feac5e
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #4bc0c8,
    #c779d0,
    #feac5e
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  scroll-snap-align: center;
  scroll-snap-stop: always;
`;
export const Banner2 = styled.section`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)),
    url("/images/common/img_banner_02.jpg");
`;

export const BannerText = styled.div`
  display: table;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  padding: 200px 0;

  @media all and (max-width: 910px) {
    display: block;
  }
`;
export const BannerTextInner = styled.div`
  display: table-cell;
  width: 50%;
  padding: 30px;
  vertical-align: middle;
  text-align: left;
  line-height: 2.875rem;

  @media all and (max-width: 910px) {
    display: block;
    width: 100%;
  }
`;
export const BannerTitle = styled.h2`
  display: inline-block;
  font-size: 2.25rem;
  font-weight: bold;
  color: #f1f1f1;

  @media all and (max-width: 910px) {
    display: block;
    font-size: 1.875rem;
  }
`;

export const BannerSubTit = styled.h5`
  font-size: 1.375rem;
  font-weight: 500;
  color: #fff;
`;

export const BannerImgWrap = styled.figure`
  position: relative;
  display: block;
  width: 50%;
  animation: ${BannerImage} 2.3s ease-in-out;
  text-align: center;
`;

export const TypistWrapper = styled.div`
  div {
    display: inline-block;

    h2 {
      display: inline-block;
    }
    .Cursor {
      font-size: 2.25rem;
      color: #f1f1f1;
    }
  }
`;
