
import { useMutation, gql } from "@apollo/client"
import { useState } from 'react'
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries"
import BoardWriteUI2 from "./BoardWrite.presenter2"
import { useRouter } from 'next/router'


export default function BoardWrite2(props){
    const router = useRouter()
    const [myqqq, setMyqqq] = useState(false)
    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    const [createBoard] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)
   

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
            variables: {writer : writer, title : title, contents: contents }

        })
        console.log(result)
        console.log(result.data.createBoard.message)

        alert('게시물 등록이 완료되었습니다.')
        // router.push(/상세)
        router.push(`/08-06-boards/${result.data.createBoard.myNumber}`)
        console.log(result)
    }

    async function xxx(){ // 수정하기
        const result = await updateBoard({
            variables: {number : Number(router.query.number), writer : writer, title : title, contents: contents }

        })
        console.log(result)
        console.log(result.data.updateBoard.message)

        alert('게시물 수정이 완료되었습니다.')
        router.push(`/08-06-boards/${router.query.myNumber}`)
        //router.push(/상세)
    }

    return(
        
        <BoardWriteUI2 
            zzz = {zzz} 
            xxx = {xxx}
            onChangeWriter ={onChangeWriter} 
            onChangeTitle = {onChangeTitle} 
            onChangeContents = {onChangeContents}
            isEdit = {props.isEdit}
        /> 

    )

}