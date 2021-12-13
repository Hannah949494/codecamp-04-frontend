import BoardDetail from "../../../../../src/components/unit/board/detail/BoardDetail.container";
import BoardCommentList from "../../../../../src/components//unit/boardComment/list/BoardCommentList.Container";
import BoardCommentWrite from "../../../../../src/components/unit/boardComment/write/BoardCommentWrite.container";
import { DetailContainer } from "../../../../../styles/boards";
import { withAuth } from "../../../../../src/components/commons/hocs/withAuth";

export default function BoardDetailPage() {
  return (
    <DetailContainer>
      <BoardDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </DetailContainer>
  );
}
