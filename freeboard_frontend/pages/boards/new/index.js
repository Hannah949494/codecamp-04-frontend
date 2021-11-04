// export defalut 해서 만들기 

import { BoardContainer, BoardContents, BoardContentsWrap, BoardLabel, BoardTitleSection, ColorPoint, Errormessage, HalfType, HalfTypeWrap, ImageBox, ImageBoxList, ImageBoxWrap, InputSection, MainTypeRadio, MainTypeRadioLabel, MainTypeRadiolist, MainTypeRadioWrap, SearchPostalCode, SearchPostalcodeBtn, SearchPostalcodeInput, SubmitBtn, SubmitBtnWrap, TextInput} from '../../../styles/boards'
import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'

const CREATE_BOARD = gql`
    mutation createBoard ($createBoardInput : CreateBoardInput!){

        createBoard( createBoardInput : $createBoardInput ) {
            _id
        }
        
    }

`


    

export default function BoardNew(){

    const [createBoard] = useMutation(CREATE_BOARD)

    async function newPost() {

        
    }
    const [writer, setWriter] = useState("")
    const [checknullwriter, setChecknullwirter] = useState("")
    const [password, setPassword] = useState("")
    const [checknullpassword, setChecknullpassword] = useState("")
    const [title, setTitle] = useState("")
    const [checknulltitle, setChecknulltitle] = useState("")    
    const [contents, setContents] = useState("")
    const [checknullcontents, setChecknullcontents] = useState("")

    function putWriterdata(event){
        setWriter(event.target.value)
        if(event.target.value !== ""){
            setChecknullwirter("");
        }
    }

    function putPassworddata(event){
        setPassword(event.target.value)
        if(event.target.value !== ""){
            setChecknullpassword("");
        }
    }

    function putTitledata(event){
        setTitle(event.target.value)
        if(event.target.value !== ""){
            setChecknulltitle("");
        }
    }

    function putWContentsdata(event){
        setContents(event.target.value)
        if(event.target.value !== ""){
            setChecknullcontents("");
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

        console.log(result)

    }



    return (
        <>
        <BoardContainer>
            <BoardTitleSection>
            <h1>게시물 수정</h1>
            </BoardTitleSection>
            
            <HalfTypeWrap>
                <HalfType>
                    <div><BoardLabel>작성자 </BoardLabel><ColorPoint>*</ColorPoint></div>
                    <TextInput type="text" placeholder ="이름을 적어주세요." onChange={putWriterdata} /> 
                    <Errormessage>{checknullwriter}</Errormessage>
                </HalfType>
                <HalfType>
                    <BoardLabel>비밀번호</BoardLabel>
                    <TextInput type="password" placeholder="비밀번호를 입력해주세요." onChange={putPassworddata}/>
                    <Errormessage>{checknullpassword}</Errormessage>
                </HalfType>
            </HalfTypeWrap>
            
            <InputSection>
                <BoardLabel>제목</BoardLabel>
                <TextInput type="text" placeholder="제목을 작성해주세요." onChange={putTitledata}/>
                <Errormessage>{checknulltitle}</Errormessage>
            </InputSection>
            
            <InputSection>
                <BoardContentsWrap>
                    <BoardLabel>내용</BoardLabel>
                    <BoardContents placeholder ="내용을 입력해주세요." onChange={putWContentsdata} ></BoardContents>
                    <Errormessage>{checknullcontents}</Errormessage>
                </BoardContentsWrap>
            </InputSection>
            
            <InputSection>
                <BoardLabel>주소</BoardLabel>
                <SearchPostalCode>
                    <SearchPostalcodeInput type="text" placeholder="07250"></SearchPostalcodeInput>
                    <SearchPostalcodeBtn href="#">우편번호 검색</SearchPostalcodeBtn>
                </SearchPostalCode>
                <TextInput />
                <TextInput />
            </InputSection>

            <InputSection>
                <BoardLabel>유튜브</BoardLabel>
                <TextInput type="text" placeholder="링크를 복사해주세요." />
            </InputSection>

            <InputSection>
                <BoardLabel>사진첨부</BoardLabel>
                
                <ImageBoxWrap>
                    <ImageBoxList>
                        <ImageBox></ImageBox>
                    </ImageBoxList>
                    <ImageBoxList>
                        <ImageBox></ImageBox>
                    </ImageBoxList>
                    <ImageBoxList>
                        <ImageBox></ImageBox>
                    </ImageBoxList>
                </ImageBoxWrap>
            </InputSection>

            <InputSection>
                <BoardLabel>메인 설정</BoardLabel>
                <MainTypeRadioWrap>
                    <MainTypeRadiolist>
                        <MainTypeRadio type="checkbox" id="Youtube" name="check-box-button"/>
                        <MainTypeRadioLabel htmlFor="Youtube"><span>유튜브</span></MainTypeRadioLabel>
                    </MainTypeRadiolist>
                    <MainTypeRadiolist>
                        <MainTypeRadio type="checkbox" id="Photos" name="check-box-button" />
                        <MainTypeRadioLabel htmlFor="Photos"><span>사진</span></MainTypeRadioLabel>
                    </MainTypeRadiolist>
                </MainTypeRadioWrap>
            </InputSection>
            <SubmitBtnWrap>
                <SubmitBtn href="#" onClick={checkNullinput}>등록하기</SubmitBtn>
            </SubmitBtnWrap>

        </BoardContainer>
        </>
    )

}


