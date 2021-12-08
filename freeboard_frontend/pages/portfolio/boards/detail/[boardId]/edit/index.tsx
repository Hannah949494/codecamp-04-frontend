import BoardWrite from "../../../../../../src/unit/board/write/BoardWrite.container";
import { FETCH_BOARD } from "../../../../../../src/unit/board/detail/BoardDetail.quries";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

export default function BoardEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  return <BoardWrite isEdit={true} data={data} />;
}
