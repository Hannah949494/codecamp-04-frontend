import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent, MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";

export interface ISearchbars01Props {
  refetch: (
    variables: Partial<IQueryFetchUseditemArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditem">>>;
  onChangeKeyword: (value: string) => void;
}

export interface ISearchbars01UIProps {
  onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSearch: (event: MouseEvent<HTMLButtonElement>) => void;
}
