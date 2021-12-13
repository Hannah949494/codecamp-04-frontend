import * as B from "./Banner.styles";
import { useRouter } from "next/router";
import { Fade } from "react-awesome-reveal";
import { withAuth } from "../../../hocs/withAuth";
import { refreshTokenCheck } from "../../../../../commons/libraries/userAccess";
export default function BannerSectionUI() {
  const router = useRouter();
  function onClickMoveToMarket() {
    if(refreshTokenCheck()){
    router.push("/portfolio/usedmarket");
    }else{
    alert("로그인이 필요한 서비스입니다! 로그인 해주세요")
    router.push("/portfolio/user/login");
  }

  }
  function onClickMoveToBoards() {
    
    if(refreshTokenCheck()){
      router.push("/portfolio/boards/list");
    
  }else{
    alert("로그인이 필요한 서비스입니다! 로그인 해주세요")
    router.push("/portfolio/user/login");
  }
  }
  return (
    <>
      <B.Banner>
        <B.BannerText>
          <B.BannerTextInner>
            <Fade direction="up">
              <B.BannerSubTit>Talent Sharing</B.BannerSubTit>
            </Fade>
            <Fade direction="up" delay={1000}>
              <B.BannerTitle>
                당신이 원하는 <span>전문가</span>를
                <br />
                여기서 찾아보세요!
              </B.BannerTitle>
            </Fade>
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
