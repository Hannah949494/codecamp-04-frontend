import styled from "@emotion/styled";
import { withAuth } from "../../hocs/withAuth";

const Mybutton = styled.button`
  background-color: ${(props: any) =>
    props.isValid ? "yellow" : "gray"};
`;

function Button01(props: any) {
  return (
    <>
      <Mybutton type={props.type}>
        {props.name}
      </Mybutton>
    </>
  );
}
export default withAuth(Button01)