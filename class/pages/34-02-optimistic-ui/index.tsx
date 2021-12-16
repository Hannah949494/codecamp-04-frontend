import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IMutationLikeBoardArgs,
  IQueryFetchBoardArgs,
} from "../../../freeboard_frontend/src/commons/types/generated/types";
import { IMutation, IQuery } from "../../src/commons/types/generated/types";

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

export default function OptimisticUI() {
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: "61bab4cc717be5002baa75a0" },
    }
  );

  function onClickOptimisticUi() {
    // 좋아요 증가시키는 mutation
    likeBoard({
      variables: { boardId: "61bab4cc717be5002baa75a0" },
      //   refetchQueries: [
      //     {
      //       query: FETCH_BOARD,
      //       variables: {
      //         boardId: "61bab4cc717be5002baa75a0",
      //       },
      //     },
      //   ], // 이건 리패치 할때까지 기다려야함.
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "61bab4cc717be5002baa75a0" },
          data: {
            fetchBoard: {
              _id: "61bab4cc717be5002baa75a0",
              __typename: "Board",
              likeCount: data?.likeBoard,
            },
          },
        });
      },
    });
  }
  return (
    <>
      <div>
        <p>좋아요 개수 : {data?.fetchBoard.likeCount}</p>
        <button onClick={onClickOptimisticUi}>좋아요 누르기</button>
      </div>
    </>
  );
}
