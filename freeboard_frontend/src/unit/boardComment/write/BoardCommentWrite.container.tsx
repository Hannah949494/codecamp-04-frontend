import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { IMutation, IMutationCreateBoardCommentArgs } from "../../../commons/types/generated/types";
import { CREATE_BOARD_COMMENT } from './BaordCommentWrite.quries'
export default function BoardCommentWrite() {
  return <BoardCommentWriteUI />;
}
