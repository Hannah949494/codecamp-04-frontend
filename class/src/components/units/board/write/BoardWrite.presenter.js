
import { MyInput, MyButton } from "./BoardWrite.styles"
export default function BoardWriteUI(props){

    return(
            <>
            <label>작성자</label>
            <MyInput type="text" placeholder = "작성자명을 입력하세요" name="writer" onChange={props.onChangeWriter} /><br />
            <label>제목</label>
            <MyInput type="text" placeholder = "제목을 입력하세요" name="title" onChange={props.onChangeTitle} /><br />
            <label>내용</label>
            <MyInput placeholder = "내용을 입력하세요" name="contents"onChange={props.onChangeContents} /><br />
            <MyButton onClick={props.zzz} qqq={props.checkMyqqq} >게시물 등록하기</MyButton>
            </>

    )
}