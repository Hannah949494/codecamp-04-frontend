import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import MyFormUI from "./Myform.presenter";
import { FormValues } from "./Myform.types";
import { schema } from "./Myform.validations";

export default function MyForm() {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function onClickLogin(data: FormValues) {
    //loginUser API 요청하기
  }

  return (
    <MyFormUI
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      onClickLogin={onClickLogin}
    />
  );
}
