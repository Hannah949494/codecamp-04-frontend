import BoardWriteUI from "./BoardWrite.presenter"
import { useMutation, gql } from "@apollo/client"
import { useState } from 'react'
import { CREATE_BOARD } from "./BoardWrite.queries"


export default function BoardWrite(){

    const [myqqq, setMyqqq] = useState(false)
    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    const [createBoard] = useMutation(CREATE_BOARD)
   

    function onChangeWriter(e){
        setWriter(e.target.value)
        checkMyqqq()
    }

    function onChangeTitle(e){
        setTitle(e.target.value)
        checkMyqqq()
    }

    function onChangeContents(e){
        setContents(e.target.value)
        checkMyqqq()
    }

    function checkMyqqq(){
        
        if(writer !== "" && title !== "" && contents !== ""){
            setMyqqq(true)
        }

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
        
        <BoardWriteUI 
            zzz = {zzz} 
            onChangeWriter ={onChangeWriter} 
            onChangeTitle = {onChangeTitle} 
            onChangeContents = {onChangeContents}
            Chec
        /> 

    )

}