import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { ApolloQueryResult } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";

export interface IBoardListUIProps {
  data?: any;
  bestdata?: any;
  el: any;
  MoveToWritePage: () => void;
  MoveToBestDetailPage: (event: MouseEvent<HTMLDivElement>) => void;
  MoveToDetailPage: (event: MouseEvent<HTMLDivElement>) => void;
  onClickPage: (event: MouseEvent<HTMLLIElement>) => void;
  onClickPrevPage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickNextPage: (event: MouseEvent<HTMLButtonElement>) => void;
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetchBoardsCount: (
    variables: Partial<IQueryFetchBoardsCountArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
  count?: number;
  startPage: number;
  setStartPage: Dispatch<SetStateAction<number>>;
  keyword: string;
  onChangeKeyword: (value: string) => void;
}
