import styled from "@emotion/styled";

export const NavigationLayout = styled.nav`
  width: 100%;
  margin: 0 0 0 auto;
`;

export const Header = styled.header`
  position: fixed;
  z-index: 999;
  width: 100%;
  padding: 30px;
  height: 100px;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;

  &.fixed {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const Logo = styled.h1`
  position: absolute;
  top: 30px;
  left: 30px;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
