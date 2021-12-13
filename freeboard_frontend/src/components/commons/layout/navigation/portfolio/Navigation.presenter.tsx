
import * as N from "./Navigation.styles";
import {refreshTokenCheck, signout} from "../../../../../commons/libraries/userAccess"

export default function NavigationUI(props: any) {



  return (
    <N.NavigationList>
      {/* <li>
        <a href="/boards/list">자유게시판</a>
      </li>
      <li>
        <a href="#">전문가 찾기</a>
      </li> */}
      
      <li>
         {!refreshTokenCheck() ? <a href="/portfolio/user/login">login</a> : <a href="/portfolio" onClick={signout}>Signout</a>}
      </li>
      <li>
      {!refreshTokenCheck() ? <a href="/portfolio/user/signup">sign up</a> : <a href="/portfolio/user/signup">Mypage</a> }
      </li>
    </N.NavigationList>
  );
}
