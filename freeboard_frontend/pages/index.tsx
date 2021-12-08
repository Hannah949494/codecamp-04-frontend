import styled from "@emotion/styled";

const SectionWrap = styled.div`
  width: 100%;
  height: 100vh;
`;

export default function Home() {
  return (
    <>
      <SectionWrap id="skills">skill test</SectionWrap>
      <SectionWrap id="about-me">About-me test</SectionWrap>
      <SectionWrap id="portfolio">portfolio test</SectionWrap>
    </>
  );
}
