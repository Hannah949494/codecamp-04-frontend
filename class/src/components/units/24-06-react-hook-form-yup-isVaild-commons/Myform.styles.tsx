import styled from "@emotion/styled";
import { IMyButtonProps } from "./Myform.types";

export const Mybutton = styled.button`
  background-color: ${(props: IMyButtonProps) =>
    props.isValid ? "yellow" : "gray"};
`;
