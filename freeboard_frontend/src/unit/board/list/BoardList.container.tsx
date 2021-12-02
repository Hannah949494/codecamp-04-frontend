import { FETCH_BOARDS, FETCH_BOARDS_OF_BEST } from "./BoardList.quries";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
import BoardListUI from "./BoardList.presenter";

export default function BoardList() {
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);
  const { data } = useQuery(FETCH_BOARDS);
  const { data: bestdata } = useQuery(FETCH_BOARDS_OF_BEST);

  function MoveToDetailPage(event: MouseEvent<HTMLDivElement>) {
    router.push(`/boards/detail/${event.target.id}`);
    console.log(router);
  }

  function MoveToBestDetailPage(event: MouseEvent<HTMLDivElement>) {
    console.log(`${event.target.id}`);
    router.push(`/boards/detail/${event.target.id}`);
    //router.push(`/boards/${bestdata.fetchBoardsOfTheBest._id}`);
  }

  function MoveToWritePage(event: MouseEvent<HTMLDivElement>) {
    router.push("/boards/new");
  }

  return (
    <BoardListUI
      data={data}
      bestdata={bestdata}
      MoveToBestDetailPage={MoveToBestDetailPage}
      MoveToDetailPage={MoveToDetailPage}
      MoveToWritePage={MoveToWritePage}
      startPage={startPage}
      setStartPage={setStartPage}
    />
  );
}
