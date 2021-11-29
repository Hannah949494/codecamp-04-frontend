import { ILayoutProps } from "./Layout.types";
import { useRouter } from "next/router";
import Header from "./header/Header.container";
import BannerSection from "./banner/Banner.container";
import Footer from "./footer/Footer.container";
import styled from "@emotion/styled";

const Contents = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 0;
`;

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  return (
    <>
      <Header />
      <BannerSection />
      <Contents>{props.children}</Contents>
      <Footer />
    </>
  );
}
