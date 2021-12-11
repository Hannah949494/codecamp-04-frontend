import * as B from "./Searchbars01.styles";
import { ISearchbars01UIProps } from "./Searchbars01.types";

export default function Searchbars01UI(props: ISearchbars01UIProps) {
  return (
    <B.BoardSearchWrapper>
      <B.BoardSearchInput
        type="text"
        placeholder="검색어를 입력하세요"
        onChange={props.onChangeSearchbar}
      />
      <B.SearchButton onClick={props.onClickSearch} isActive={false}>
        검색하기
      </B.SearchButton>
    </B.BoardSearchWrapper>
  );
}
