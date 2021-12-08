import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import {
  BoardContainer,
  BoardContents,
  BoardContentsWrap,
  BoardLabel,
  BoardTitleSection,
  ColorPoint,
  Errormessage,
  HalfType,
  HalfTypeWrap,
  ImageBox,
  ImageBoxList,
  ImageBoxWrap,
  InputSection,
  MainTypeRadio,
  MainTypeRadioLabel,
  MainTypeRadiolist,
  MainTypeRadioWrap,
  SearchPostalCode,
  SearchPostalcodeBtn,
  SearchPostalcodeInput,
  SubmitBtn,
  SubmitBtnWrap,
  TextInput,
} from "../../../../../styles/boards";
import { WriteContainer } from "./BoardWriteTypes";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import { v4 as uuidv4 } from "uuid";

export default function BoardWirteUI(props: WriteContainer) {
  console.log(props.data);
  return (
    <>
      {props.isOpen && (
        <Modal visible={true}>
          <DaumPostcode onComplete={props.onCompleteAddressSearch} />
        </Modal>
      )}
      <BoardContainer>
        <BoardTitleSection>
          {!props.isEdit && <h1>게시글 작성하기</h1>}
          {props.isEdit && <h1>게시글 수정하기</h1>}
        </BoardTitleSection>

        <HalfTypeWrap>
          <HalfType>
            <div>
              <BoardLabel>
                작성자 <ColorPoint>*</ColorPoint>
              </BoardLabel>
            </div>
            <TextInput
              type="text"
              placeholder="이름을 적어주세요."
              onChange={props.putWriterdata}
              defaultValue={props.data?.fetchBoard.writer}
            />
            <Errormessage>{props.checknullwriter}</Errormessage>
          </HalfType>
          <HalfType>
            <BoardLabel>비밀번호</BoardLabel>
            <TextInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={props.putPassworddata}
            />
            <Errormessage>{props.checknullpassword}</Errormessage>
          </HalfType>
        </HalfTypeWrap>

        <InputSection>
          <BoardLabel>제목</BoardLabel>
          <TextInput
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.putTitledata}
            defaultValue={props.data?.fetchBoard.title}
          />
          <Errormessage>{props.checknulltitle}</Errormessage>
        </InputSection>

        <InputSection>
          <BoardContentsWrap>
            <BoardLabel>내용</BoardLabel>
            <BoardContents
              placeholder="내용을 입력해주세요."
              onChange={props.putWContentsdata}
              defaultValue={props.data?.fetchBoard.contents}
            ></BoardContents>
            <Errormessage>{props.checknullcontents}</Errormessage>
          </BoardContentsWrap>
        </InputSection>

        <InputSection>
          <BoardLabel>주소</BoardLabel>
          <SearchPostalCode>
            <SearchPostalcodeInput
              type="text"
              readOnly
              value={
                props.zipcode ||
                props.data?.fetchBoard.boardAddress?.zipcode ||
                ""
              }
            ></SearchPostalcodeInput>
            <SearchPostalcodeBtn href="#" onClick={props.onClickAddressSearch}>
              우편번호 검색
            </SearchPostalcodeBtn>
          </SearchPostalCode>
          <TextInput
            value={
              props.address ||
              props.data?.fetchBoard.boardAddress?.address ||
              ""
            }
          />
          <TextInput
            onChange={props.onChangeAddressDetail}
            defaultValue={
              props.data?.fetchBoard.boardAddress?.addressDetail || ""
            }
          />
        </InputSection>

        <InputSection>
          <BoardLabel>유튜브</BoardLabel>
          <TextInput
            type="text"
            placeholder="링크를 복사해주세요."
            onChange={props.putYoutubeUrl}
          />
        </InputSection>

        <InputSection>
          <BoardLabel>사진첨부</BoardLabel>

          <ImageBoxWrap>
            {props.fileUrls.map((el, index) => (
              <Uploads01
                key={uuidv4()}
                index={index}
                fileUrl={el}
                defaultFileUrl={props.data?.fetchBoard.images?.[index]}
                onChangeFileUrls={props.onChangeFileUrls}
              />
            ))}
          </ImageBoxWrap>
        </InputSection>

        <InputSection>
          <BoardLabel>메인 설정</BoardLabel>
          <MainTypeRadioWrap>
            <MainTypeRadiolist>
              <MainTypeRadio
                type="radio"
                id="Youtube"
                name="check-box-button"
              />
              <MainTypeRadioLabel htmlFor="Youtube">
                <span>유튜브</span>
              </MainTypeRadioLabel>
            </MainTypeRadiolist>
            <MainTypeRadiolist>
              <MainTypeRadio type="radio" id="Photos" name="check-box-button" />
              <MainTypeRadioLabel htmlFor="Photos">
                <span>사진</span>
              </MainTypeRadioLabel>
            </MainTypeRadiolist>
          </MainTypeRadioWrap>
        </InputSection>
        <SubmitBtnWrap>
          {!props.isEdit && (
            <SubmitBtn
              href="#"
              isActive={props.isEdit ? true : !props.isActive}
              onClick={props.checkNullinput}
            >
              등록하기
            </SubmitBtn>
          )}
          {props.isEdit && (
            <SubmitBtn
              href="#"
              isActive={props.isEdit ? true : !props.isActive}
              onClick={props.updateBoardContent}
            >
              수정하기
            </SubmitBtn>
          )}
        </SubmitBtnWrap>
      </BoardContainer>
    </>
  );
}
