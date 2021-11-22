import * as BC from "./BoardCommentWrite.styles";
import { Rate } from "antd";
import { useState } from "react";

export default function BoardCommentWriteUI() {
  const [value, setValue] = useState(0);

  function CommentRate(value: number) {
    setValue(value);
  }

  return (
    <BC.BoardCommentWrapper>
      <BC.BoardCommentTopSection>
        <BC.BoardCommentTitle>
          <BC.BoardCommentTitleIco />
          댓글
        </BC.BoardCommentTitle>
      </BC.BoardCommentTopSection>
      <BC.BoardCommentInputSection>
        <BC.BoardCommentInputLabel htmlFor="">작성자</BC.BoardCommentInputLabel>
        <BC.BoardCommentInput type="text"></BC.BoardCommentInput>
        <BC.BoardCommentInputLabel htmlFor="">
          비밀번호
        </BC.BoardCommentInputLabel>
        <BC.BoardCommentInput type="password"></BC.BoardCommentInput>
        <BC.BoardCommentRateWrap>
          <Rate onChange={CommentRate} value={value} />
        </BC.BoardCommentRateWrap>
      </BC.BoardCommentInputSection>
      <BC.BoardCommentContents>
        <BC.BoardCommentTextArea />
        <BC.CommentLength>
          0/100
          <BC.SubmitButton>등록하기</BC.SubmitButton>
        </BC.CommentLength>
      </BC.BoardCommentContents>
    </BC.BoardCommentWrapper>
  );
}
