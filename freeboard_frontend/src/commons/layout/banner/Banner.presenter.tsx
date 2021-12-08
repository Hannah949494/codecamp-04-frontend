import * as B from "./Banner.styles";
import { useRouter } from "next/router";
export default function BannerSectionUI() {
  const router = useRouter();
  function onClickMoveToMarket() {
    router.push("/portfolio/usedmarket");
  }
  function onClickMoveToBoards() {
    router.push("/portfolio/boards/list");
  }
  return (
    <>
      <B.Banner>
        <B.BannerText>
          <B.BannerTextInner>
            <B.BannerSubTit>Talent Sharing</B.BannerSubTit>
            <B.BannerTitle>
              당신이 원하는 <span>전문가</span>를
              <br />
              여기서 찾아보세요!
            </B.BannerTitle>
            <br />
            <B.ButtonWrap>
              <B.BannerButton onClick={onClickMoveToBoards}>
                직접 전문가 찾기
              </B.BannerButton>
              <B.BannerButton onClick={onClickMoveToMarket}>
                전문가 구경하러 가기
              </B.BannerButton>
            </B.ButtonWrap>
          </B.BannerTextInner>
        </B.BannerText>
      </B.Banner>
    </>
  );
}
