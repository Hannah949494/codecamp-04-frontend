import * as B from "./Banner.styles";
import Slider from "react-slick";
import Typist from "react-typist";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "react-typist/dist/Typist.css";
export default function BannerSectionUI() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [count, setCount] = useState(1);

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log("Count: " + count);
    setCount(1);
  }, [count]);

  return (
    <>
      <Slider {...settings}>
        <B.Banner>
          <B.BannerText>
            <B.BannerTextInner>
              <B.TypistWrapper>
                {count ? (
                  <Typist avgTypingDelay={100} onTypingDone={() => setCount(0)}>
                    <B.BannerTitle>끊임없이 공부하는</B.BannerTitle>
                    <Typist.Backspace count={9} delay={1200} />
                    <B.BannerTitle>노력을 즐겨하는</B.BannerTitle>
                    <Typist.Backspace count={9} delay={1200} />
                    <B.BannerTitle>협업을 좋아하는</B.BannerTitle>
                    <Typist.Delay ms={1200} onTypingDone={1200} />
                  </Typist>
                ) : (
                  ""
                )}
                <div>
                  <B.BannerTitle>Front-End Junior Developer</B.BannerTitle>
                </div>
              </B.TypistWrapper>
              <B.BannerTitle>정혜민 입니다.</B.BannerTitle>
            </B.BannerTextInner>
          </B.BannerText>
        </B.Banner>
        <B.Banner2>
          <B.BannerText>
            <B.BannerTextInner>
              <B.TypistWrapper>
                {count ? (
                  <Typist avgTypingDelay={100} onTypingDone={() => setCount(0)}>
                    <B.BannerTitle>끊임없이 공부하는</B.BannerTitle>
                    <Typist.Backspace count={9} delay={1200} />
                    <B.BannerTitle>노력을 즐겨하는</B.BannerTitle>
                    <Typist.Backspace count={9} delay={1200} />
                    <B.BannerTitle>협업을 좋아하는</B.BannerTitle>
                    <Typist.Delay ms={1200} onTypingDone={1200} />
                  </Typist>
                ) : (
                  ""
                )}
                <div>
                  <B.BannerTitle>Front-End Junior Developer</B.BannerTitle>
                </div>
              </B.TypistWrapper>
              <B.BannerTitle>정혜민 입니다.</B.BannerTitle>
            </B.BannerTextInner>
          </B.BannerText>
        </B.Banner2>
      </Slider>
    </>
  );
}
