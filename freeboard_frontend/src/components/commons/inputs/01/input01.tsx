import styled from "@emotion/styled";

const Inputs = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 10px;
  border: 1px solid #ebebeb;
  text-indent: 10px;
`;

function Input01(props: any) {
  return (
    <>
      <Inputs type={props.type} placeholder={props.placeholder} />
    </>
  );
}
export default Input01;
