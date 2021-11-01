
import { Container, LoginBox, TextInput ,Title ,TextLabel} from '../../styles/emotion'

export default function EmotionPage() {

    // Javascript

    return(
        // html (JSX)
         
        <> 
            <Container>
                <Title>로그인</Title>
                <LoginBox>
                    <TextLabel>E-mail</TextLabel>
                    <TextInput type="text" placeholder ="이메일을 입력하세요."/> 
                    <TextLabel>Password</TextLabel>
                    <TextInput type="password" placeholder ="비밀번호를 입력하세요."/>
                </LoginBox>

                나의 이미지 : <img src= "/images/lotto.png" />
            </Container>    
            
        </>

    )

}