import styled from "@emotion/styled";
const Footer = styled.footer`
  width: 100%;
  max-width: 1200px;
  height: 80px;
  margin: 0 auto;
  text-align: center;
`;
export default function FooterUI() {
  return (
    <>
      <Footer>
        본 사이트는 상업적 목적이 아닌, 개인 포트폴리오 용으로 제작되었습니다.
        <br />
        <br />
        COPYRIGHT ⓒ 2021 Hyemin Jeong. ALL RIGHT RESERVED.
      </Footer>
    </>
  );
}
