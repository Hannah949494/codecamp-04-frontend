import styled from "@emotion/styled";
import { FormSuccess } from "./Signup.types";
export const Form = styled.form`
  display: block;
  width: 100%;
  max-width: 560px;
  margin: 0 auto;
  padding: 50px;
  box-shadow: 8px 9px 20px 6px #ddd;
`;

export const FormTitle = styled.legend`
  padding: 20px 0 50px;
  font-size: 1.875rem;
  font-weight: bold;
  text-align: center;
`;

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  color: #333;

  span {
    color: red;
    font-size: 0.875rem;
  }
`;

export const SignupInput = styled.input`
  width: 100%;
  height: 50px;
  margin: 15px 0;
  background-color: none;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-indent: 10px;

  &:focus {
    outline: none;
  }
`;

export const ErrorMessage = styled.p`
  padding-bottom: 10px;
  font-size: 14px;
  color: red;
`;

export const ButtonWrap = styled.p`
  padding: 50px 0;
  text-align: center;
`;

export const SignupButton = styled.button`
  display: block;
  width: 150px;
  height: 40px;
  margin: 0 auto;
  background-color: ${(props: FormSuccess) =>
    !props.isActive ? "#ddd" : "#ffd600"};
  &:hover {
    cursor: ${(props: FormSuccess) =>
      !props.isActive ? "default" : "pointer"};
  }
`;
