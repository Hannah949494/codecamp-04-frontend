
import { useMutation, gql } from "@apollo/client"
import { ChangeEvent, useState } from 'react'
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries"
import BoardWriteTypeScriptUI from "./BoardWrite.presenter"
import { useRouter } from 'next/router'
import { IProps, IVariables } from "./BoardWrite.types"


export default function BoardWriteTypeScript(props){
    const router = useRouter()
    const [myqqq, setMyqqq] = useState(false)
    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    const [createBoard] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)
   

    function onChangeWriter(e:ChangeEvent<HTMLInputElement>){
        setWriter(e.target.value)
        checkMyqqq()
    }

    function onChangeTitle(e:ChangeEvent<HTMLInputElement>){
        setTitle(e.target.value)
        checkMyqqq()
    }

    function onChangeContents(e:ChangeEvent<HTMLInputElement>){
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
        router.push(`/09-02-boards2/${result.data.createBoard.number}`)
        console.log(result)
    }

    async function xxx(){ // 수정하기


        const Variables = {
            number : Number(router.query.myNumber)
        }
        if(writer !== "" ) Variables.writer = writer
        if(title !== "" ) Variables.title = title
        if(contents !== "") Variables.contents = contents
        
        const result = await updateBoard({
            variables: Variables
            

        })

        alert('게시물 수정이 완료되었습니다.')
        router.push(`/09-02-boards2/${router.query.myNumber}`)
        //router.push(/상세)
    }

    return(
        
        <BoardWriteTypeScriptUI 
            zzz = {zzz} 
            xxx = {xxx}
            onChangeWriter ={onChangeWriter} 
            onChangeTitle = {onChangeTitle} 
            onChangeContents = {onChangeContents}
            isEdit = {props.isEdit}
            data = {props.data}
        /> 

    )

}