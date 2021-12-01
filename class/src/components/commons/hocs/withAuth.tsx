import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";
import { useQuery, gql } from "@apollo/client";
import { IQuery } from "../../../commons/types/generated/types";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

export const withAuth = (Component) => (props) => {
  //
  const { accessToken } = useContext(GlobalContext);
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("권한이 없습니다. 로그인을 먼저 해주세요.");
      router.push("/23-04-login");
    } //hocs 는 with를 같이 붙여줌
  });

  return <Component {...props} />;
};

//higher order component
