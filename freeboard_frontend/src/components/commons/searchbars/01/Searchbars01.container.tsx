import { ChangeEvent, MouseEvent } from "react";
import Searchbars01UI from "./Searchbars01.presenter";
import { ISearchbars01Props } from "./Searchbars01.types";
import _ from "lodash";

export default function Searchbars01(props: ISearchbars01Props) {
  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data });
    props.refetchBoardsCount({ search: data });
    props.onChangeKeyword(data);
  }, 200);

  let SearchData = "";

  function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>) {
    SearchData = event.target.value;
  }

  function onClickSearch(event: MouseEvent<HTMLButtonElement>) {
    getDebounce(SearchData);
  }

  return (
    <Searchbars01UI
      onChangeSearchbar={onChangeSearchbar}
      onClickSearch={onClickSearch}
    />
  );
}
