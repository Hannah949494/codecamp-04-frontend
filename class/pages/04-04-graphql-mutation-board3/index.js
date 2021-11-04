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
    
    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    const [createBoard] = useMutation(CREATE_BOARD)

    function onChangeWriter(e){
        setWriter(e.target.value)
    }

    function onChangeTitle(e){
        setTitle(e.target.value)
    }

    function onChangeContents(e){
        setContents(e.target.value)
    }
    
    async function zzz(){
        const result = await createBoard({
            variables: { writer : writer, title : title, contents: contents }

        })
        console.log(result)
        console.log(result.data.createBoard.message)

        alert('게시물 등록이 완료되었습니다.')
    }


    return(
            <>
            <label>작성자</label>
            <input type="text" placeholder = "작성자명을 입력하세요" name="writer" onChange={onChangeWriter} />
            <label>제목</label>
            <input type="text" placeholder = "제목을 입력하세요" name="title" onChange={onChangeTitle} />
            <label>내용</label>
            <textarea placeholder = "내용을 입력하세요" name="contents"onChange={onChangeContents} />
            <button onClick={zzz}>게시물 등록하기</button>
            </>

    )
}