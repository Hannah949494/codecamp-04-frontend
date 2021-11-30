import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardArgs,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

export default function PagenationBasicPage() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, { variables: { page: 1 } });

  function onClickPage(event) {
    refetch({ page: Number(event.target.id) });
  }

  return (
    <>
      <div>
        <h1>페이지네이션 연습</h1>
        <div>
          {data?.fetchBoards.map((el) => (
            <div key={el._id}>
              {el.title} {el.writer}
            </div>
          ))}
        </div>
      </div>
      <ul>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
          <li onClick={onClickPage} key="el" id={String(el)}>
            {el}
          </li>
        ))}
      </ul>
    </>
  );
}
