import { useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String) {
    fetchBoards(search: $search) {
      _id
      writer
      title
    }
  }
`;

export default function SearchPage() {
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  function onChangeKeyword(event: ChangeEvent<HTMLInputElement>) {
    setKeyword(event.target.value);
  }

  function onClickSearch() {
    // search keyword로 fetchBoard 요청
    refetch({ search: keyword });
  }

  return (
    <>
      <h1>검색 페이지</h1>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        onChange={onChangeKeyword}
      />
      <button onClick={onClickSearch}>검색하기</button>

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
    </>
  );
}
