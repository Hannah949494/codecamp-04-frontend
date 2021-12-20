import styled from "@emotion/styled";

export const Wrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 100px 40px;
  background: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const WriteHeader = styled.header`
  padding: 20px 0;
  text-align: center;

  h2 {
    font-size: 1.875rem;
    font-weight: bold;
  }
`;

export const WriteWrap = styled.div`
  width: 100%;
  padding: 10px 0;
  div.quill {
    height: 100%;
    margin-top: 20px;
    .ql-editor {
      min-height: 250px;
    }
  }
`;

export const MapWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
  div {
    width: 50%;
    padding: 0 20px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 10px;
  border: 1px solid #ebebeb;
  text-indent: 10px;
`;
