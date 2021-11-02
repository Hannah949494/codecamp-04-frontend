import { useState } from 'react'
import { Container, ErrorMessage, ErrorMessageTxt, SignupButton, SignupButtonWrap, SignupInner, SignupInput, SignupInputWrap, SignupLabel, SignupTit } from '../../../../styles/signup'


export default function SignUpStatePage() {

    const [email, setEmail] = useState("")
    const [emailerror, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setconfirmPassword] = useState("")
    const [nomatchpassword, setNomatchPassword] = useState("")
    const [passworderror, setpasswordError] = useState("")

    function aaa(event){
        // event.target <input type="text" placeholder ="이메일을 입력하세요" onChange ={aaa} /> 태그 전체를 가져옴
        setEmail(event.target.value)

    }

    function bbb(event){
        setPassword(event.target.value)
    }

    function matchPassword(event){

        

    }


    function ccc(){

        if(email.includes("@") === false){

            setEmailError("이메일에 @가 없습니다. 잘못된 이메일이네요!")
        }

        if(password === "") {

            setpasswordError("비밀번호를 입력하세요")
        }

        if( password != confirmpassword){
 
                return setNomatchPassword("비밀번호가 일치하지 않습니다 다시 입력해주세요.")
               
        }

    }

    return(
        <Container>
            
            <SignupInner>
            <SignupTit>회원가입</SignupTit>
                <SignupInputWrap>
                    <SignupLabel>이메일</SignupLabel>
                    <SignupInput type="text" placeholder ="이메일을 입력하세요" onChange ={aaa} />
                    <ErrorMessage><ErrorMessageTxt>{emailerror}</ErrorMessageTxt></ErrorMessage>
                </SignupInputWrap>
                <SignupInputWrap>
                    <SignupLabel>비밀번호</SignupLabel>
                    <SignupInput type="text" placeholder ="비밀번호를 입력하세요" onChange ={bbb} />
                    <ErrorMessage><ErrorMessageTxt>{passworderror}</ErrorMessageTxt></ErrorMessage>
                </SignupInputWrap>
                <SignupInputWrap>
                    <SignupLabel>비밀번호 확인</SignupLabel>
                    <SignupInput type="text" placeholder ="비밀번호를 한번 더 입력하세요" onChange ={matchPassword} />
                    <ErrorMessage><ErrorMessageTxt>{nomatchpassword}</ErrorMessageTxt></ErrorMessage>
                </SignupInputWrap>
                <SignupButtonWrap>
                    <SignupButton onClick={ccc}>회원가입</SignupButton>
                </SignupButtonWrap>
                
            </SignupInner>
        </Container>

    )

}