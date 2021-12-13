import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import router from "next/router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Modal } from "antd";
import { FormValues } from "./Signup.types";
import SignupUI from "./Signup.presenter";
import { useEffect, useState } from "react";
import { gql, useMutation } from "@apollo/client"

const CREATE_USER = gql`
    mutation createUser($createUserInput: CreateUserInput!) {
      createUser(createUserInput: $createUserInput) {
        email
        name
        _id
      }
    }
`;



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
  const [createUser] = useMutation(CREATE_USER)
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
    try {const result = await createUser({
        variables : {
          createUserInput : {
            name : data.userName,
            email : data.myEmail,
            password : data.myPassword
          }
        }
        
    })
    alert("회원가입이 완료되었습니다!")
    console.log(props.myAccessToken)
    router.push("/portfolio/boards/list")
  }
    catch(error){
      Modal.error({title : error.message})
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
