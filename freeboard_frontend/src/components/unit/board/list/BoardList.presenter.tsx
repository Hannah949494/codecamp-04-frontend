import * as B from "./BoardList.styles";
import { IBoardListUIProps } from "./BoardListTypes";
import Paginations01 from "../../../commons/paginations/01/Paginations01.container";
import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.container";
import { v4 as uuidv4 } from "uuid";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <B.ListWrapper>
      <B.BoardListWrap>
        <B.SearchResult isActive={props.keyword !== ""}>
          &quot;{props.keyword}&quot; 에 대한 결과가 &quot;{props.count}&quot;개
          있습니다.
        </B.SearchResult>
        <Searchbars01
          refetch={props.refetch}
          refetchBoardsCount={props.refetchBoardsCount}
          onChangeKeyword={props.onChangeKeyword}
        />
        <B.BoardListType>
          <B.BoardNumber>번호</B.BoardNumber>
          <div>제목</div>
          <B.BoardWriter>작성자</B.BoardWriter>
          <B.BoardDate>작성일</B.BoardDate>
        </B.BoardListType>
        {props.data?.fetchBoards.map((el, index) => (
          <B.BoardList key={el._id}>
            <B.BoardNumber>{index + 1}</B.BoardNumber>
            <div id={el._id} onClick={props.MoveToDetailPage}>
              {el.title
                .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
                .split("@#$%")
                .map((el) => (
                  <B.TextToken key={uuidv4()} isMatched={props.keyword === el}>
                    {el}
                  </B.TextToken>
                ))}
            </div>
            <B.BoardWriter>{el.writer}</B.BoardWriter>
            <B.BoardDate>{el.createdAt.slice(0, 10)}</B.BoardDate>
          </B.BoardList>
        ))}
        <B.WriteButtonWrap>
          <B.WriteButtonIco />
          <B.WriteButton onClick={props.MoveToWritePage}>
            게시물 등록하기
          </B.WriteButton>
        </B.WriteButtonWrap>
      </B.BoardListWrap>
      <Paginations01
        refetch={props.refetch}
        count={props.count}
        startPage={props.startPage}
        setStartPage={props.setStartPage}
      />
    </B.ListWrapper>
  );
}
