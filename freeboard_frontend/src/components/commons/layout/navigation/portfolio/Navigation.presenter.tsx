
import * as N from "./Navigation.styles";
import {refreshTokenCheck, signout} from "../../../../../commons/libraries/userAccess"
import { Button } from "antd";

export default function NavigationUI(props: any) {



  return (
    <N.NavigationList>
      {/* <li>
        <a href="/boards/list">자유게시판</a>
      </li>
      <li>
        <a href="#">전문가 찾기</a>
      </li> */}
      {refreshTokenCheck() ? <li>
        <p><span>{props.data?.fetchUserLoggedIn.name}</span> 님 어서오세요!</p>
      </li> : "" }
      <li>
         {!refreshTokenCheck() ? <button onClick={props.onClickLogin}>login</button> : <button onClick={props.onClickLogout}>Logout</button>}
      </li>
      <li>
      {!refreshTokenCheck() ? <button onClick={props.onClickSignup}>Sign Up</button> : <button onClick={props.onClickSignup}>My Page</button> }
      </li>
    </N.NavigationList>
  );
}
