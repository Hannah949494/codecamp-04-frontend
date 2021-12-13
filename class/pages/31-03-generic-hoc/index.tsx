import { useRouter } from "next/router";
import { ComponentType, useContext, useEffect } from "react";
// import { useQuery, gql } from "@apollo/client";


// const FETCH_USER_LOGGED_IN = gql`
//   query fetchUserLoggedIn {
//     fetchUserLoggedIn {
//       email
//       name
//       picture
//     }
//   }
// `;

export const withAuth = <P extends {}>(Component: ComponentType<P>) => (props: P) => {
  //
//   const { accessToken } = useContext(GlobalContext);
//   const { data } =
//     useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
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
