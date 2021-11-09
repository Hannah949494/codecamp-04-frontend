
import styled from '@emotion/styled'

export const MyInput = styled.input`
    width:100%;
    max-width:760px;
    height:50px;
    border:1px solid #ddd;
    text-indent: 10px;
    outline : none;

`
export const MyButton = styled.button`
    margin-top:10px;
    background-color:${(props) => props.qqq === true ? "violet" : "#ececec"};
    font-size:1.25rem;
    color:#333;
`
// emotion도 props를 받을수 있음.

