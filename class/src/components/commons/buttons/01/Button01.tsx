import styled from "@emotion/styled";
import { yellow } from "@material-ui/core/colors";
import { IMyButtonProps } from "../../../../../pages/24-06-react-hook-form-yup-isVaild-commons/Myform.types";

const Mybutton = styled.button`
  background-color: ${(props: IMyButtonProps) =>
    props.isValid ? "yellow" : "gray"};
`;

export default function Button01(props) {
  return (
    <>
      <Mybutton type={props.type} isValid={props.isValid}>
        {props.name}
      </Mybutton>
    </>
  );
}
