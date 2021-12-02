import { gql, useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useContext, useState } from "react";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../freeboard_frontend/src/commons/types/generated/types";
import { GlobalContext } from "../_app";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

export default function loginPage() {
  const { setAccessToken, setUserInfo } = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const client = useApolloClient();

  const router = useRouter();

  function onChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  async function onClickLogin() {
    const result = await loginUser({
      variables: {
        email,
        password,
      },
    });
    const accessToken = result.data?.loginUser.accessToken || "";
    localStorage.setItem("accessToken", accessToken);

    setAccessToken?.(accessToken);

    //const result = await axios.get("koreanjson.com/posts/1") 이러한 방식으로 원하는 곳에서 useQuery 필요

    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          authrization: `Bearer ${accessToken}`,
        },
      },
    });
    setUserInfo(resultUserInfo.data.fetchUserLoggedIn);

    // result.data?.loginUser.accessToken;
    // 여기서 setAccessToken 필요! (글로벌 스테이트에..)
    // 로그인 성공 페이지로 이동

    // const result = fetchUserLoggedIn();
    // setUserInfo(result.data?.fetchUserLoggedIn);

    router.push("/24-02-login-success");
  }

  return (
    <>
      이메일 :
      <input
        type="text"
        placeholder="이메일을 입력하세요"
        onChange={onChangeEmail}
      />
      비밀번호 :
      <input
        type="password"
        placeholder="비밀번호를 입력하세요"
        onChange={onChangePassword}
      />
      <button onClick={onClickLogin}>Login</button>
    </>
  );
}
