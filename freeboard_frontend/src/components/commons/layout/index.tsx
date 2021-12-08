import { ILayoutProps } from "./Layout.types";
import { useRouter } from "next/router";
import Header from "./header/Header.container";
import BannerSection from "./banner/Banner.container";
import Footer from "./footer/Footer.container";
import styled from "@emotion/styled";
import MainHeader from "./mainheader/MainHeader.container";
import MainBannerSection from "./mainBanner/Banner.container";
import SubBannerSection from "./banner/subbanner/Banner.container";

const Contents = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 0;
`;

const MAIN_ONLY = ["/"];
const PORTFOLIO_MAIN_ONLY = ["/portfolio"];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  const isMainOnly = MAIN_ONLY.includes(router.asPath);
  const isPortfolioOnly = PORTFOLIO_MAIN_ONLY.includes(router.asPath);

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
      <Contents>{props.children}</Contents>
      <Footer />
    </>
  );
}
