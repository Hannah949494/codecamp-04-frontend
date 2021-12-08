import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.quries";
import {
  IMutation,
  IMutationLikeBoardArgs,
  IMutationDislikeBoardArgs,
} from "../../../commons/types/generated/types";

export default function BoardDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  const settings = {
    dots: true,
    infinitie: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  let NewDataContainer = "&nbsp;";
  let dataContainer = String(data?.fetchBoard.createdAt);
  let NewData = dataContainer.slice(0, 10);
  let NewTime = dataContainer.slice(11, 16);
  console.log(NewData);
  console.log(NewTime);
  NewDataContainer = NewData + " " + NewTime;

  function MoveToList() {
    router.push("/portfolio/boards/list");
  }

  function MoveToEditPage() {
    router.push(`/portfolio/boards/detail/${router.query.boardId}/edit`);
  }

  async function onClickDelete() {
    try {
      await deleteBoard({
        variables: { boardId: router.query.boardId },
      });
      router.push("/portfolio/boards/list");
      alert("게시글이 삭제되었습니다.");
    } catch {
      alert("실패");
    }
  }

  function onClickLike() {
    likeBoard({
      variables: { boardId: String(router.query.boardId) },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    });
  }

  function onClickDislike() {
    dislikeBoard({
      variables: { boardId: String(router.query.boardId) },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    });
  }

  return (
    <BoardDetailUI
      MoveToList={MoveToList}
      onClickDelete={onClickDelete}
      data={data}
      settings={settings}
      NewDataContainer={NewDataContainer}
      MoveToEditPage={MoveToEditPage}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  );
}
