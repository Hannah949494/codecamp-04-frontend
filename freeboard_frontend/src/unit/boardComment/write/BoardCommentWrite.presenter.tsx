import * as BC from "./BoardCommentWrite.styles";
import { Rate } from "antd";
import { useState } from "react";
import { IBoardCommentWriteUIProps } from "./BoardCommentWrite.Types";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
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
        <BC.BoardCommentInput
          type="text"
          readOnly={Boolean(props.el?.writer)}
          defaultValue={props.el?.writer || ""}
          onChange={props.onChangeMyWriter}
        />
        <BC.BoardCommentInputLabel htmlFor="">
          비밀번호
        </BC.BoardCommentInputLabel>
        <BC.BoardCommentInput
          type="password"
          onChange={props.onChangeMyPassword}
        />
        <BC.BoardCommentRateWrap>
          <Rate onChange={props.onChangeStar} value={props.starValue} />
        </BC.BoardCommentRateWrap>
      </BC.BoardCommentInputSection>
      <BC.BoardCommentContents>
        <BC.BoardCommentTextArea
          maxLength={100}
          defaultValue={props.el?.contents}
          onChange={props.onChangeMyContents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <BC.CommentLength>
          {props.myContents.length}/100
          <BC.SubmitButton
            onClick={props.isEdit ? props.onClickUpdate : props.onClickWrite}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </BC.SubmitButton>
        </BC.CommentLength>
      </BC.BoardCommentContents>
    </BC.BoardCommentWrapper>
  );
}
