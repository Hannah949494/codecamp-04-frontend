// export defalut 해서 만들기 

import { BoardContainer, BoardContents, BoardContentsWrap, BoardLabel, BoardTitleSection, ColorPoint, HalfType, HalfTypeWrap, ImageBox, ImageBoxList, ImageBoxWrap, InputSection, MainTypeRadio, MainTypeRadioLabel, MainTypeRadiolist, MainTypeRadioWrap, SearchPostalCode, SearchPostalcodeBtn, SearchPostalcodeInput, SubmitBtn, SubmitBtnWrap, TextInput} from '../../../styles/boards'

export default function BoardNew(){

    return (
        <>
        <BoardContainer>
            <BoardTitleSection>
            <h1>게시물 수정</h1>
            </BoardTitleSection>
            
            <HalfTypeWrap>
                <HalfType>
                    <div><BoardLabel>작성자 </BoardLabel><ColorPoint>*</ColorPoint></div>
                    <TextInput type="text" placeholder ="이름을 적어주세요." />
                </HalfType>
                <HalfType>
                    <BoardLabel>비밀번호</BoardLabel>
                    <TextInput type="text" placeholder="비밀번호를 입력해주세요." />
                </HalfType>
            </HalfTypeWrap>
            
            <InputSection>
                <BoardLabel>제목</BoardLabel>
                <TextInput type="text" placeholder="제목을 작성해주세요." />
            </InputSection>
            
            <InputSection>
                <BoardContentsWrap>
                    <BoardLabel>내용</BoardLabel>
                    <BoardContents placeholder ="내용을 입력해주세요."></BoardContents>
                </BoardContentsWrap>
            </InputSection>
            
            <InputSection>
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
                        <MainTypeRadio type="checkbox" id="Youtube" name="Youtube"/>
                        <MainTypeRadioLabel for="Youtube"><span>유튜브</span></MainTypeRadioLabel>
                    </MainTypeRadiolist>
                    <MainTypeRadiolist>
                        <MainTypeRadio type="checkbox" id="Photos" name="Photos" />
                        <MainTypeRadioLabel for="Photos"><span>사진</span></MainTypeRadioLabel>
                    </MainTypeRadiolist>
                </MainTypeRadioWrap>
            </InputSection>
            <SubmitBtnWrap>
                <SubmitBtn href="#">등록하기</SubmitBtn>
            </SubmitBtnWrap>

        </BoardContainer>
        </>
    )

}


