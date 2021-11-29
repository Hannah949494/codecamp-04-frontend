import styled from "@emotion/styled";
import Navigation from "../navigation/Navigation.container";

const NavigationLayout = styled.nav`
  width: 100%;
  margin: 0 0 0 auto;
`;

const Header = styled.header`
  position: absolute;
  z-index: 999;
  width: 100%;
  padding: 30px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.3);
`;
export default function HeaderUI() {
  return (
    <Header>
      <NavigationLayout>
        <Navigation />
      </NavigationLayout>
    </Header>
  );
}
