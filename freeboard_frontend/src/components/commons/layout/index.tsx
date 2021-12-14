import { ILayoutProps } from "./Layout.types";
import { useRouter } from "next/router";
import Header from "./header/portfolio/Header.container";
import BannerSection from "./banner/portfolio/Banner.container";
import Footer from "./footer/Footer.container";
import styled from "@emotion/styled";
import MainHeader from "./header/main/MainHeader.container";
import MainBannerSection from "./banner/main/Banner.container";
import SubBannerSection from "./banner/subbanner/Banner.container";
import SubNavigation from "./navigation/snb/Navigation.container";

const Contents = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 0;
`;

const MAIN_ONLY = ["/"];
const PORTFOLIO_MAIN_ONLY = ["/portfolio"];
const SUBPAGE_ONLY = ["/portfolio/boards"]


export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  const isMainOnly = MAIN_ONLY.includes(router.asPath);
  const isPortfolioOnly = PORTFOLIO_MAIN_ONLY.includes(router.asPath);
  const isSubPageOnly = SUBPAGE_ONLY.includes(router.asPath);
  console.log(isSubPageOnly)
  return (
    <>
      {!isMainOnly ? <Header /> : <MainHeader />}
      {!isMainOnly ? (
        !isPortfolioOnly ? (
          <SubBannerSection />
        ) : (
          <BannerSection />
        )
      ) : (
        <MainBannerSection />
      )}
      {!isPortfolioOnly ? (!isSubPageOnly? (<SubNavigation />) : ("") ) : <div></div> }
      <Contents>{props.children}</Contents>
      <Footer />
    </>
  );
}
