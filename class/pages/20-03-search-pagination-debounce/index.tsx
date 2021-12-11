import { useQuery, gql } from "@apollo/client";
import { ChangeEvent, useState, MouseEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import _ from "lodash";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
    }
  }
`;

export default function SearchPage() {
  // const [keyword, setKeyword] = useState("");
  const [searchedKeyword, setSearchedKeyword] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setSearchedKeyword(data);
  }, 500);

  function onChangeKeyword(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
  }

  // function onClickSearch() {
  //   // search keyword로 fetchBoard 요청

  // }

  function onClickPage(event: MouseEvent<HTMLSpanElement>) {
    if (event.target instanceof Element)
      refetch({ search: searchedKeyword, page: Number(event.target.id) });
  }

  return (
    <>
      <h1>검색 페이지</h1>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        onChange={onChangeKeyword}
      />
      {/* <button onClick={onClickSearch}>검색하기</button> */}

      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <p
            style={{
              display: "inline-block",
              color: "#111",
              fontWeight: "bold",
              padding: "0 20px",
            }}
          >
            {el.writer}
          </p>
          <p style={{ display: "inline-block" }}>{el.title}</p>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span key={uuidv4()} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </span>
      ))}
    </>
  );
}
