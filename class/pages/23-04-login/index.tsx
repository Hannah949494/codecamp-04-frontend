import { gql, useMutation } from "@apollo/client";
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

export default function loginPage() {
  const { setAccessToken, accessToken } = useContext(GlobalContext);
  console.log(accessToken);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
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
    console.log(result);
    localStorage.setItem(
      "accessToken",
      result.data?.loginUser.accessToken || ""
    );

    setAccessToken(result.data?.loginUser.accessToken || "");
    // result.data?.loginUser.accessToken;
    // 여기서 setAccessToken 필요! (글로벌 스테이트에..)
    // 로그인 성공 페이지로 이동

    router.push("/23-05-login-success");
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
