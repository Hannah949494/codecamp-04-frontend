import { useMutation, gql } from "@apollo/client"
import { useState } from 'react'

const CREATE_BOARD = gql`

mutation{
    createBoard(writer:"철수", title:"제목", contents: "내용"){
      _id
      number
      message

    }
  }

`

export default function GraphqlMutationBoard1Page(){
    const [aaa, setAaa] = useState("안녕하세요")
    const [createBoard] = useMutation(CREATE_BOARD)

    async function zzz(){
        const result = await createBoard()
        console.log(result.data.createBoard.message)
        setAaa(result.data.createBoard.message)

        alert('게시물 등록이 완료되었습니다.')
    }

    return(
            <>
            <button onClick={zzz}>GRAPHQL-API 요청하기</button>
            <div>{aaa}</div>
            </>

    )
}