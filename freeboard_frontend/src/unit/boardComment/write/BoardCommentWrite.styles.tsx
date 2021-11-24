import styled from "@emotion/styled";
import { Edit } from "@emotion-icons/fa-solid";

export const BoardCommentWrapper = styled.div`
  width: 100%;
  padding-bottom: 30px;
`;

export const BoardCommentTopSection = styled.div`
  padding: 20px 0;
  width: 100%;
`;

export const BoardCommentTitle = styled.h2`
  position: relative;
  padding-left: 45px;
  font-size: 1.875rem;
  font-weight: bold;
  color: #111;
`;

export const BoardCommentTitleIco = styled(Edit)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  color: #ffd400;
`;

export const BoardCommentInputSection = styled.section`
  padding: 20px 0;
  border-top: 1px solid #ddd;
`;

export const BoardCommentInputLabel = styled.label`
  padding-right: 15px;
  font-family: "Noto Sans CJK KR" !important;
  font-weight: 500;
  font-size: 1rem;
`;
export const BoardCommentInput = styled.input`
  height: 40px;
  margin: 0 15px;
  border: 1px solid #ddd;
  outline: none;
`;

export const BoardCommentRateWrap = styled.span`
  padding: 0 15px;
`;

export const BoardCommentContents = styled.section`
  padding: 10px 0;
`;
export const BoardCommentTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 15px;
  border: 1px solid #ddd;
  outline: none;
`;

export const CommentLength = styled.div`
  width: 100%;
  height: 50px;
  margin-top: -7px;
  border: 1px solid #ddd;
  font-size: 1rem;
  line-height: 50px;
  text-indent: 1.25rem;
  color: #ddd;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
`;

export const SubmitButton = styled.button`
  width: 150px;
  height: 50px;
  background: #111;
  font-family: "Noto Sans CJK KR", sans-serif !important;
  font-weight: 1rem;
  color: #fff;
  border: 0;
  float: right;
`;
