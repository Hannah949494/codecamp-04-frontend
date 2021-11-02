import { useState } from 'react'


export default function SignUpStatePage() {

    const [email, setEmail] = useState("")
    const [emailerror, setEmailError] = useState("")
    const [password, setPassword] = useState("")

    function aaa(event){
        // event.target <input type="text" placeholder ="이메일을 입력하세요" onChange ={aaa} /> 태그 전체를 가져옴
        setEmail(event.target.value)

    }

    function bbb(event){
        setPassword(event.target.value)
    }

    function ccc(){
        console.log('email :', email)
        console.log('password :', password)

        if(email.includes("@") === false){

            setEmailError("이메일에 @가 없습니다. 잘못된 이메일이네요!")
        }

    }

    return(
        <>
            <div>
                이메일 입력하기 :
                <input type="text" placeholder ="이메일을 입력하세요" onChange ={aaa} /> <br />
                <div>{emailerror}</div>
                비밀번호 입력하기 :
                <input type="password" placeholder ="비밀번호를 입력하세요" onChange ={bbb} />
                <button onClick={ccc}>회원가입</button>
            </div>
        </>

    )

}