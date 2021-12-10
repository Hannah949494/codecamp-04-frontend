import Navigation from "../../navigation/main/Navigation.container";
import * as H from "./MainHeader.styles";
export default function MainHeaderUI() {
  return (
    <H.Header>
      <H.NavigationLayout>
        <Navigation />
      </H.NavigationLayout>
    </H.Header>
  );
}
