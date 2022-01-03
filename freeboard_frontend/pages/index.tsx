import styled from "@emotion/styled";
import MainBannerSection from "../src/components/commons/layout/banner/main/Banner.container";
import MainHeader from "../src/components/commons/layout/header/main/MainHeader.container";
import ReactFullpage, { fullpageApi } from "@fullpage/react-fullpage";
import { useEffect, useRef, useState } from "react";
import Footer from "../src/components/commons/layout/footer/Footer.container";
const SectionWrap = styled.div`
  width: 100%;
  height: 100vh;
`;

const FullpageWrap = styled.div`
  width: 100%;
  height: 100%;
`;

export default function Home() {
  // return (
  //   <>
  //     <MainHeader />
  //     <MainBannerSection />
  //     <SectionWrap id="skills">skill test</SectionWrap>
  //     <SectionWrap id="about-me">About-me test</SectionWrap>
  //     <SectionWrap id="portfolio">portfolio test</SectionWrap>
  //   </>
  // );

  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <MainHeader />
      <ReactFullpage
        // css3 = {true}
        // easingcss3 = 'ease-in'
        navigation={true}
        // navigationPosition="right"

        afterLoad={(origin, destination, direction) => {
          console.log(origin, destination.index, isActive);
          if (origin.index === 0 || direction === "down") {
            setIsActive(true);
          }
          if (destination.index === 1 && direction === "up") {
            setIsActive(false);
          }

          // if (destination.index > 0) {
          //   setIsActive(true);
          // }
        }}
        responsiveWidth={1000}
        scrollingSpeed={650}
        render={({ state, fullpageApi }) => {
          return (
            <>
              <ReactFullpage.Wrapper>
                <div className="section">
                  <MainBannerSection />
                </div>
                <div className="section">
                  <SectionWrap id="skills">skill test</SectionWrap>
                </div>
                <div className="section">
                  <SectionWrap id="about-me">About-me test</SectionWrap>
                </div>
                <div className="section">
                  <SectionWrap id="portfolio">portfolio test</SectionWrap>
                </div>
                <div className="section fp-auto-height">
                  <Footer />
                </div>
              </ReactFullpage.Wrapper>
            </>
          );
        }}
      />
    </>
  );
}
