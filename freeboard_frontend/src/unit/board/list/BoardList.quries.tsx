import { gql } from '@apollo/client'

export const FETCH_BOARDS = gql`
    query{

        fetchBoards {
            _id
            writer
            title
            contents
            createdAt
        }
    }
`
export const FETCH_BOARDS_OF_BEST = gql`
    query{

        fetchBoardsOfTheBest{
            _id
            writer
            createdAt
            title
            contents
            likeCount
        }
  }

`

export const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;