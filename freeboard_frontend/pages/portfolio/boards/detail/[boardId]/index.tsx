import BoardDetail from "../../../../../src/unit/board/detail/BoardDetail.container";
import BoardCommentList from "../../../../../src/unit/boardComment/list/BoardCommentList.Container";
import BoardCommentWrite from "../../../../../src/unit/boardComment/write/BoardCommentWrite.container";
import { DetailContainer } from "../../../../../styles/boards";

export default function BaordDetailPage() {
  return (
    <DetailContainer>
      <BoardDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </DetailContainer>
  );
}
