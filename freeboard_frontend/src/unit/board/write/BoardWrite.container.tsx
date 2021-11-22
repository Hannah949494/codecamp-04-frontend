import { useState } from "react"
import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.quries"
import BoardWirteUI from "./BoardWrite.presenter"
import { ChangeEvent } from "react"
import { CheckTypeProps, IVariables, WriteContainer } from "./BoardWriteTypes"

export default function BoardWrite(props:CheckTypeProps){
    
    const router = useRouter()
    const [createBoard] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)
    const [writer, setWriter] = useState("")
    const [checknullwriter, setChecknullwirter] = useState("")
    const [password, setPassword] = useState("")
    const [checknullpassword, setChecknullpassword] = useState("")
    const [title, setTitle] = useState("")
    const [checknulltitle, setChecknulltitle] = useState("")    
    const [contents, setContents] = useState("")
    const [checknullcontents, setChecknullcontents] = useState("")
    const [isActive, setIsActive] = useState(false);
    const [myInputs, setMyInputs] = useState({
        writer : "",
        password : "",
        title : "",
        content: ""
    })

    function putWriterdata(event:ChangeEvent<HTMLInputElement>){
        setWriter(event.target.value)
        if(event.target.value !== ""){
            setChecknullwirter("");
        }

        if (
            writer !== "" &&
            event.target.value !== "" &&
            contents !== "" &&
            password !== "") {
            setIsActive(true); 
        } 
            else {
            setIsActive(false);
        }
    }

    function putPassworddata(event:ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value)
        if(event.target.value !== ""){
            setChecknullpassword("");
        }

        if (
            writer !== "" &&
            event.target.value !== "" &&
            contents !== "" &&
            password !== "") {
            setIsActive(true); 
        } 
            else {
            setIsActive(false);
        }
    }

    function putTitledata(event:ChangeEvent<HTMLInputElement>){
        setTitle(event.target.value)
        if(event.target.value !== ""){
            setChecknulltitle("");
        }

        if (
            writer !== "" &&
            event.target.value !== "" &&
            contents !== "" &&
            password !== "") {
            setIsActive(true); 
        } 
            else {
            setIsActive(false);
        }
    }

    function putWContentsdata(event:ChangeEvent<HTMLInputElement>){
        setContents(event.target.value)
        if(event.target.value !== ""){
            setChecknullcontents("");
        }

        if (
            writer !== "" &&
            event.target.value !== "" &&
            contents !== "" &&
            password !== "") {
            setIsActive(true); 
        } 
            else {
            setIsActive(false);
        }
    }

    async function checkNullinput(){

        if(writer === ""){

            setChecknullwirter("작성자명을 입력하세요.")
        
        }

        if(password === ""){

            setChecknullpassword("비밀번호를 입력하세요.")
        
        }

        if(title === ""){

            setChecknulltitle("제목을 입력하세요.")
        
        }

        if(contents === ""){

            setChecknullcontents("내용을 입력하세요.")
        
        }

        if (writer && password && title && contents){
            const result = await createBoard({
                variables : {
                    createBoardInput : {
                        writer : writer,
                        password : password,
                        title : title,
                        contents : contents
                    }
                }
            })
            router.push(`/boards/detail/${result.data.createBoard._id}`)
            
        }

    }

    async function updateBoardContent(){ // 수정하기

        const Variables = {
            boardId : router.query.boardId,
            password : password,
            updateBoardInput : {}
        }
        if(writer !== "" ) Variables.updateBoardInput.writer = writer
        if(title !== "" ) Variables.updateBoardInput.title = title
        if(contents !== "") Variables.updateBoardInput.contents = contents
        
        console.log(router.query.boardId)

        try{

        const result = await updateBoard({
            variables: Variables    
                    
        })
        alert('게시물 수정이 완료되었습니다.')
        router.push(`/boards/detail/${router.query.boardId}`)
    }
    catch{
        alert("실패")
    }

    }

    return(
        <BoardWirteUI 
            putWriterdata = {putWriterdata}
            putPassworddata = {putPassworddata}
            putTitledata = {putTitledata}
            putWContentsdata = {putWContentsdata}
            checkNullinput = {checkNullinput}
            checknullwriter = {checknullwriter}
            checknulltitle = {checknulltitle}
            checknullpassword = {checknullpassword}
            checknullcontents = {checknullcontents}
            updateBoardContent = {updateBoardContent}
            isEdit = {props.isEdit}
            data = {props.data}
            isActive={isActive}
        />

    )

}