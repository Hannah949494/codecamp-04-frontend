import {
  FETCH_BOARDS,
  FETCH_BOARDS_OF_BEST,
  FETCH_BOARDS_COUNT,
} from "./BoardList.quries";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
import BoardListUI from "./BoardList.presenter";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../commons/types/generated/types";
export default function BoardList() {
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, { variables: { page: startPage } });
  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const { data: bestdata } = useQuery(FETCH_BOARDS_OF_BEST);

  function MoveToDetailPage(event: MouseEvent<HTMLDivElement>) {
    router.push(`/portfolio/boards/detail/${event.target.id}`);
    console.log(router);
  }

  function MoveToBestDetailPage(event: MouseEvent<HTMLDivElement>) {
    console.log(`${event.target.id}`);
    router.push(`/portfolio/boards/detail/${event.target.id}`);
    //router.push(`/boards/${bestdata.fetchBoardsOfTheBest._id}`);
  }

  function MoveToWritePage(event: MouseEvent<HTMLDivElement>) {
    router.push("/portfolio/boards/new");
  }

  return (
    <BoardListUI
      data={data}
      bestdata={bestdata}
      count={dataBoardsCount?.fetchBoardsCount}
      refetch={refetch}
      startPage={startPage}
      setStartPage={setStartPage}
      MoveToBestDetailPage={MoveToBestDetailPage}
      MoveToDetailPage={MoveToDetailPage}
      MoveToWritePage={MoveToWritePage}
    />
  );
}
