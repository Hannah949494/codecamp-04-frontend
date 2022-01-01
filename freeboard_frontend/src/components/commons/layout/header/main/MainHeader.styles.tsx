import styled from "@emotion/styled";

export const NavigationLayout = styled.nav`
  width: 100%;
  margin: 0 0 0 auto;
`;

export const Header = styled.header`
  position: absolute;
  z-index: 999;
  width: 100%;
  padding: 30px;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.2);
  transition: 0.5s;

  &.fixed {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;
