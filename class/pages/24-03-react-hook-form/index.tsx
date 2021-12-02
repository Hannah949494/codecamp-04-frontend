import { useForm } from "react-hook-form";

interface FormValues {
  myEmail: String;
  myPassword: string;
}

export default function ReactHookFormPage() {
  const { handleSubmit, register } = useForm({});

  function onClickLogin(data: FormValues) {
    //loginUser API 요청하기
  }

  return (
    <>
      <form onSubmit={handleSubmit(onClickLogin)}>
        <label htmlFor="">이메일 :</label>{" "}
        <input type="text" {...register("myEmail")} />
        <label htmlFor="">패스워드 :</label>{" "}
        <input type="password" {...register("myPassword")} />
        <button>로그인하기</button>
      </form>
    </>
  );
}
