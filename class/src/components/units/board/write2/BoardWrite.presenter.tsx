
import { MyInput, MyButton } from "./BoardWrite.styles"
export default function BoardWriteTypeScriptUI(props){

    return(
            <>
            <h1>게시글 {props.isEdit ? "수정" : "작성"}하기</h1>
            <label>작성자</label>
            <MyInput type="text" placeholder = "작성자명을 입력하세요" name="writer" onChange={props.onChangeWriter} defaultValue ={props.data?.fetchBoard.writer} /><br />
            <label>제목</label>
            <MyInput type="text" placeholder = "제목을 입력하세요" name="title" onChange={props.onChangeTitle} defaultValue ={props.data?.fetchBoard.title} /><br />
            <label>내용</label>
            <MyInput placeholder = "내용을 입력하세요" name="contents"onChange={props.onChangeContents} defaultValue ={props.data?.fetchBoard.writer} /><br />
            {/* <MyButton onClick={props.isEdit ? props.zzz : props.xxx} qqq={props.checkMyqqq} >게시물 {props.isEdit? "등록" : "수정"}하기</MyButton> */}
            {!props.isEdit && <MyButton onClick={props.zzz} qqq={props.checkMyqqq} >게시물 등록하기</MyButton>}
            {props.isEdit && <MyButton onClick={props.xxx} qqq={props.checkMyqqq} >게시물 수정하기</MyButton>}
            </>

    )
}