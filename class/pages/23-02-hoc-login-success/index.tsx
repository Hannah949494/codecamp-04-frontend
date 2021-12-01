import { gql, useQuery } from "@apollo/client";
import router from "next/router";
import { useContext } from "react";
import { IQuery } from "../../../freeboard_frontend/src/commons/types/generated/types";
import { GlobalContext } from "../_app";
import { withAuth } from "../../src/components/commons/hocs/withAuth";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

function LoginSuccessPage(props) {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  return (
    <>
      <div>로그인에 성공하셨습니다!</div>
      <div>{data?.fetchUserLoggedIn.name} 님 환영합니다!</div>
    </>
  );
}

export default withAuth(LoginSuccessPage);
// withAuth가 LoginSuccessPage보다 상위에서 실행됨
