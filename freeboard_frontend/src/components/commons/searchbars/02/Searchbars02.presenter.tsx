import * as B from "./Searchbars02.styles";
import { ISearchbars01UIProps } from "./Searchbars02.types";

export default function Searchbars02UI(props: ISearchbars01UIProps) {
  return (
    <B.BoardSearchWrapper>
      <B.BoardSearchInput
        type="text"
        placeholder="검색어를 입력하세요"
        onChange={props.onChangeSearchbar}
      />
      <B.SearchButton onClick={props.onClickSearch}>검색하기</B.SearchButton>
    </B.BoardSearchWrapper>
  );
}
