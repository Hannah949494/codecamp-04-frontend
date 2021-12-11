import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import router from "next/router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Modal } from "antd";
import { FormValues } from "./Signup.types";
import SignupUI from "./Signup.presenter";
import { useEffect, useState } from "react";

const schema = yup.object().shape({
  userName: yup.string().required("반드시 입력해야하는 필수 사항입니다."),
  myEmail: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("반드시 입력해야하는 필수 사항입니다."),
  myPassword: yup
    .string()
    .min(8, "비밀번호는 최소 4자리 이상 최대 15자리 이하 입니다.")
    .max(15)
    .required("반드시 입력해야하는 필수 사항입니다."),
  myPasswordCheck: yup
    .string()
    .oneOf(
      [yup.ref("myPassword"), null],
      "비밀번호가 일치하지 않습니다. 재입력 해주세요"
    )
    .required("반드시 입력해야하는 필수 사항입니다."),
});

export default function Signup() {
  const [isActive, setIsActive] = useState(false);
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (formState.isValid === true) {
      setIsActive(true);
      console.log(isActive);
    } else {
      setIsActive(false);
      console.log(isActive);
    }
  });

  async function onClickSignup(data: FormValues) {
    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, data.myEmail, data.myPassword);
      Modal.success({ title: "회원가입이 정상적으로 완료되었습니다!" });
      router.push("/portfolio/boards/list");
    } catch (error) {
      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        return alert("이미 존재하는 이메일입니다.");
      }
    }
  }

  return (
    <>
      <SignupUI
        handleSubmit={handleSubmit}
        register={register}
        formState={formState}
        onClickLogin={onClickSignup}
        isActive={isActive}
      />
    </>
  );
}
