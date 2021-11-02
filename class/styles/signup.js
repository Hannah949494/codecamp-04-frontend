import styled from '@emotion/styled'

export const Container = styled.div`
    width:100%;
    max-width:520px;
    margin:100px auto;
    padding:0 20px;
    background:#fff;
    box-shadow: 0px 4px 20px rgba(0,0,0,0.2);
`
export const SignupInner = styled.div`
    padding:30px; 50px;
`

export const SignupTit = styled.h1`
    font-size:36px;
    font-weight:bold;
    text-align:center;
`
export const SignupInputWrap = styled.div`
    padding-bottom:10px;
`

export const SignupLabel = styled.label`
    display:inline-block;
    width:100px;
    padding-right:10px;
    font-size:15px;
    font-weight:600;
`

export const SignupInput = styled.input`
    width: calc(100% - 120px);
    height:30px;
    border:1px solid #ebebeb;
    text-indent:10px;
`

export const ErrorMessage = styled.div`
    
`
export const ErrorMessageTxt = styled.span`
    display:block;
    padding:3px 0;
    font-size:13px;
    font-weight:400;
    color:red;
`
export const SignupButtonWrap = styled.div`
    padding:20px 0;
    text-align:center;
`
export const SignupButton = styled.button`
    display:inline-block;
    width:150px;
    height:40px;
    margin:0 auto;
    padding:5px 15px;
    font-size:14px;
    background:#efefef;
    border:1px solid #ddd;
    color:#111;
    
`