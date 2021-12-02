import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import styled from "@emotion/styled";

interface FormValues {
  myEmail: String;
  myPassword: string;
}
interface IMyButtonProps {
  isVaild: boolean;
}

const Mybutton = styled.button`
  background-color: ${(props: IMyButtonProps) =>
    props.isValid ? "yellow" : "gray"};
`;

const schema = yup.object().shape({
  myEmail: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("반드시 입력해야하는 필수 사항입니다."),
  myPassword: yup
    .string()
    .min(8, "비밀번호는 최소 4자리 이상 최대 15자리 이하 입니다.")
    .max(15)
    .required("반드시 입력해야하는 필수 사항입니다."),
});

export default function ReactHookFormPage() {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function onClickLogin(data: FormValues) {
    //loginUser API 요청하기
  }

  return (
    <>
      <form onSubmit={handleSubmit(onClickLogin)}>
        <label htmlFor="">이메일 :</label>{" "}
        <input type="text" {...register("myEmail")} />
        <p>{formState.errors.myEmail?.message}</p>
        <label htmlFor="">패스워드 :</label>{" "}
        <input type="password" {...register("myPassword")} />
        <p>{formState.errors.myPassword?.message}</p>
        <Mybutton isValid={formState.isValid}>로그인하기</Mybutton>
      </form>
    </>
  );
}
