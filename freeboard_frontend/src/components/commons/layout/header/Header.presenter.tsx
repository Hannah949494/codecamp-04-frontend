import Navigation from "../navigation/Navigation.presenter";
import * as H from "./Header.styles";
export default function HeaderUI() {
  return (
    <H.Header>
      <H.Logo>
        <a href="/portfolio">
          <img src="/images/common/logo.png" alt="talentSharingLogo" />
        </a>
      </H.Logo>
      <H.NavigationLayout>
        <Navigation />
      </H.NavigationLayout>
    </H.Header>
  );
}
