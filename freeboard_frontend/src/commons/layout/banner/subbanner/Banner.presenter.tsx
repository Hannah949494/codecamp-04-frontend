import * as B from "./Banner.styles";

export default function SubBannerSectionUI() {
  return (
    <>
      <B.Banner>
        <B.BannerText>
          <B.BannerTextInner>
            <B.BannerSubTit>Talent Sharing</B.BannerSubTit>
            <B.BannerTitle>
              당신의 프로젝트를 책임질 <span>“전문가”</span> 를 찾아 의뢰하세요!
            </B.BannerTitle>
          </B.BannerTextInner>
        </B.BannerText>
      </B.Banner>
    </>
  );
}
