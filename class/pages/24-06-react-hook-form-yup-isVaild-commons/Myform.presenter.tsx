import { Mybutton } from "./Myform.styles";

export default function MyFormUI(props) {
  return (
    <>
      <form onSubmit={props.handleSubmit(props.onClickLogin)}>
        <label htmlFor="">이메일 :</label>{" "}
        <input type="text" {...props.register("myEmail")} />
        <p>{props.formState.errors.myEmail?.message}</p>
        <label htmlFor="">패스워드 :</label>{" "}
        <input type="password" {...props.register("myPassword")} />
        <p>{props.formState.errors.myPassword?.message}</p>
        <Mybutton isValid={props.formState.isValid}>로그인하기</Mybutton>
        {/* <Mybutton type="reset">초기화하기</Mybutton> */}
        {/* <Mybutton type="button">초기화하기</Mybutton>  폼태그 내에 있으면 이렇게 해야 버튼이됨 아니면 submit이 default*/}
      </form>
    </>
  );
}
