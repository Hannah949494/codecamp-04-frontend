import { ChangeEvent, MouseEvent } from "react";
import Searchbars02UI from "./Searchbars02.presenter";
import { ISearchbars01Props } from "./Searchbars02.types";
import _ from "lodash";

export default function Searchbars02(props: ISearchbars01Props) {
  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data });
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
    <Searchbars02UI
      onChangeSearchbar={onChangeSearchbar}
      onClickSearch={onClickSearch}
    />
  );
}
