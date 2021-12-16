import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: red;

  @media all and (min-width: 768px) and (max-width: 1200px) {
    width: 500px;
    height: 500px;
    background-color: green;
  }

  @media all and (max-width: 767px) {
    width: 100px;
    height: 100px;
    background-color: blue;
  }
`;

export default function ResponsiveDesignPage() {
  return (
    <>
      <Wrapper>상자</Wrapper>
    </>
  );
}
