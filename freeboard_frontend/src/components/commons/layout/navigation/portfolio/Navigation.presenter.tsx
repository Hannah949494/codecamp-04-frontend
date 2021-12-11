import * as N from "./Navigation.styles";
export default function NavigationUI() {
  return (
    <N.NavigationList>
      {/* <li>
        <a href="/boards/list">자유게시판</a>
      </li>
      <li>
        <a href="#">전문가 찾기</a>
      </li> */}
      <li>
        <a href="/portfolio/user/login">login</a>
      </li>
      <li>
        <a href="/portfolio/user/signup">sign up</a>
      </li>
    </N.NavigationList>
  );
}