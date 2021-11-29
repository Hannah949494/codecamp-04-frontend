import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Banner = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url("/images/common/img_banner_01.jpg");
`;
const Banner2 = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url("/images/common/img_banner_02.jpg");
`;

export default function BannerSectionUI() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        <Banner>여기는 배너영역 입니다</Banner>
        <Banner2>여기는 두번째 배너입니다</Banner2>
      </Slider>
    </>
  );
}
