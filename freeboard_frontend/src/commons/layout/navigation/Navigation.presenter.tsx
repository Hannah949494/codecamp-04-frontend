import * as N from "./Navigation.styles";
export default function NavigationUI() {
  return (
    <N.NavigationList>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/boards/list">Freeboard</a>
      </li>
      <li>
        <a href="#">Used-Market</a>
      </li>
      <li>
        <a href="#">Mypage</a>
      </li>
    </N.NavigationList>
  );
}
