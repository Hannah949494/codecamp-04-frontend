import styled from "@emotion/styled";

export const Banner = styled.section`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)),
    url("/images/common/img_banner_01.jpg");
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
`;
export const BannerTextInner = styled.div`
  display: table-cell;
  padding: 30px;
  vertical-align: middle;
  text-align: center;
  line-height: 2.875rem;
`;
export const BannerTitle = styled.h2`
  display: inline-block;
  font-size: 2.25rem;
  font-weight: bold;
  color: #f1f1f1;
`;

export const TypistWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;

  div {
    padding: 0 20px;

    .Cursor {
      font-size: 2.25rem;
      color: #f1f1f1;
    }
  }
`;
