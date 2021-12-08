import { ReactChild } from "react";
import styled from "@emotion/styled";
import Header from "../layout/header/Header.container";
import BannerSection from "./banner/Banner.container";
import Footer from "../layout/footer/Footer.container";
import { useRouter } from "next/router";
interface ILayoutProps {
  children: ReactChild;
}

const Contents = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 0;
`;

const HIDDEN_HEADERS = ["/12-01-modal-alert"];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <>
      {!isHiddenHeader && <Header />}
      <MainHeader />
      <BannerSection />
      <Contents>{props.children}</Contents>
      <Footer />
    </>
  );
}
