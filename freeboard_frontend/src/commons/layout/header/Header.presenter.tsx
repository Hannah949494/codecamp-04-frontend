import styled from "@emotion/styled";
import Navigation from "../navigation/Navigation.presenter";
import * as H from "./Header.styles";
export default function HeaderUI() {
  return (
    <H.Header>
      <H.NavigationLayout>
        <Navigation />
      </H.NavigationLayout>
    </H.Header>
  );
}
