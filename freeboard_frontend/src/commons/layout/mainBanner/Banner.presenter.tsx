import * as B from "./Banner.styles";
import Typist from "react-typist";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "react-typist/dist/Typist.css";
export default function BannerSectionUI() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log("Count: " + count);
    setCount(1);
  }, [count]);

  return (
    <>
      <B.Banner>
        <B.BannerText>
          <B.BannerTextInner>
            <B.BannerSubTit>Hello World! &nbsp;👋</B.BannerSubTit>
            <B.BannerTitle>This is Hyemin Hannah Jeong</B.BannerTitle>
            <B.TypistWrapper>
              {count ? (
                <Typist avgTypingDelay={100} onTypingDone={() => setCount(0)}>
                  <B.BannerTitle>Creative</B.BannerTitle>
                  <Typist.Backspace count={9} delay={1200} />
                  <B.BannerTitle>Co-operative</B.BannerTitle>
                  <Typist.Delay ms={1200} onTypingDone={1200} />
                </Typist>
              ) : (
                ""
              )}
            </B.TypistWrapper>

            <B.BannerTitle>Front-End Junior Developer</B.BannerTitle>
          </B.BannerTextInner>
          <B.BannerImgWrap>
            <img src="/images/common/img_banner_char.png" />
          </B.BannerImgWrap>
        </B.BannerText>
      </B.Banner>
    </>
  );
}
