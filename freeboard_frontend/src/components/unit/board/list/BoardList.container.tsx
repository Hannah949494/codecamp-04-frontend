import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.quries";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
import BoardListUI from "./BoardList.presenter";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
export default function BoardList() {
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, { variables: { page: startPage, search: keyword } });
  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  function MoveToDetailPage(event: MouseEvent<HTMLDivElement>) {
    if (event.target instanceof Element)
      router.push(`/portfolio/boards/detail/${event.target.id}`);
  }

  function MoveToBestDetailPage(event: MouseEvent<HTMLDivElement>) {
    if (event.target instanceof Element)
      router.push(`/portfolio/boards/detail/${event.target.id}`);
  }

  function MoveToWritePage(event: MouseEvent<HTMLButtonElement>) {
    router.push("/portfolio/boards/new");
  }
  function onChangeKeyword(value: string) {
    setKeyword(value);
  }

  return (
    <BoardListUI
      data={data}
      count={dataBoardsCount?.fetchBoardsCount}
      refetch={refetch}
      keyword={keyword}
      refetchBoardsCount={refetchBoardsCount}
      startPage={startPage}
      setStartPage={setStartPage}
      MoveToBestDetailPage={MoveToBestDetailPage}
      MoveToDetailPage={MoveToDetailPage}
      MoveToWritePage={MoveToWritePage}
      onChangeKeyword={onChangeKeyword}
    />
  );
}
