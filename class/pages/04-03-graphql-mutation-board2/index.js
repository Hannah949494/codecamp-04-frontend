import { useMutation, gql } from "@apollo/client"
import { useState } from 'react'

const CREATE_BOARD = gql`

mutation createBoard($writer: String, $title: String, $contents: String){
    
    createBoard(writer: $writer, title : $title, contents : $contents){
      _id
      number
      message

    }
  }

`

export default function GraphqlMutationBoard2Page(){
    const [aaa, setAaa] = useState("안녕하세요")
    const [createBoard] = useMutation(CREATE_BOARD)

    async function zzz(){
        const result = await createBoard({
            variables: { writer : "영희", title : "제목이에여!!", contents: "내용입니당당다라당" }

        })
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