import * as S from "./Signup.styles";
export default function SignupUI(props: any) {
  return (
    <>
      <S.Form onSubmit={props.handleSubmit(props.onClickLogin)}>
        <S.FormTitle>회원가입</S.FormTitle>
        <S.Label htmlFor="">
          사용자 이름<span>*</span>
        </S.Label>{" "}
        <S.SignupInput type="text" {...props.register("userName")} />
        <S.Label htmlFor="">
          이메일 <span>*</span>
        </S.Label>{" "}
        <S.SignupInput type="text" {...props.register("myEmail")} />
        <S.ErrorMessage>
          {props.formState.errors.myEmail?.message}
        </S.ErrorMessage>
        <S.Label htmlFor="">
          비밀번호 <span>*</span>
        </S.Label>{" "}
        <S.SignupInput type="password" {...props.register("myPassword")} />
        <S.ErrorMessage>
          {props.formState.errors.myPassword?.message}
        </S.ErrorMessage>
        <S.Label htmlFor="">
          비밀번호 확인 <span>*</span>
        </S.Label>{" "}
        <S.SignupInput type="password" {...props.register("myPasswordCheck")} />
        <S.ErrorMessage>
          {props.formState.errors.myPasswordCheck?.message}
        </S.ErrorMessage>
        <S.ButtonWrap>
          <S.SignupButton isActive={props.isActive}>
            회원가입하기
          </S.SignupButton>
        </S.ButtonWrap>
      </S.Form>
    </>
  );
}
