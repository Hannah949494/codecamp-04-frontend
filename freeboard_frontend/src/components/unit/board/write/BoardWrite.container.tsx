import { useState, ChangeEvent, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.quries";
import BoardWirteUI from "./BoardWrite.presenter";
import { CheckTypeProps, IVariables } from "./BoardWriteTypes";

export default function BoardWrite(props: CheckTypeProps) {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [writer, setWriter] = useState("");
  const [checknullwriter, setChecknullwirter] = useState("");
  const [password, setPassword] = useState("");
  const [checknullpassword, setChecknullpassword] = useState("");
  const [title, setTitle] = useState("");
  const [checknulltitle, setChecknulltitle] = useState("");
  const [contents, setContents] = useState("");
  const [checknullcontents, setChecknullcontents] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [youtubeurl, setYoutubeurl] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  function putWriterdata(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setChecknullwirter("");
    }

    if (
      writer !== "" &&
      event.target.value !== "" &&
      contents !== "" &&
      password !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function putPassworddata(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setChecknullpassword("");
    }

    if (
      writer !== "" &&
      event.target.value !== "" &&
      contents !== "" &&
      password !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function putTitledata(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setChecknulltitle("");
    }

    if (
      writer !== "" &&
      event.target.value !== "" &&
      contents !== "" &&
      password !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function putWContentsdata(event: ChangeEvent<HTMLTextAreaElement>) {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setChecknullcontents("");
    }

    if (
      writer !== "" &&
      event.target.value !== "" &&
      contents !== "" &&
      password !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function putYoutubeUrl(event: ChangeEvent<HTMLInputElement>) {
    setYoutubeurl(event.target.value);
  }

  function onChangeAddressDetail(event: ChangeEvent<HTMLInputElement>) {
    setAddressDetail(event.target.value);
  }

  function onClickAddressSearch() {
    setIsOpen(true);
  }

  function onCompleteAddressSearch(data: any) {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen(false);
  }

  async function checkNullinput() {
    if (writer === "") {
      setChecknullwirter("작성자명을 입력하세요.");
    }

    if (password === "") {
      setChecknullpassword("비밀번호를 입력하세요.");
    }

    if (title === "") {
      setChecknulltitle("제목을 입력하세요.");
    }

    if (contents === "") {
      setChecknullcontents("내용을 입력하세요.");
    }

    if (writer && password && title && contents) {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: writer,
            password: password,
            title: title,
            contents: contents,
            youtubeUrl: youtubeurl,
            boardAddress: {
              zipcode: zipcode,
              address: address,
              addressDetail: addressDetail,
            },
            images: fileUrls,
          },
        },
      });
      router.push(`/portfolio/boards/detail/${result.data.createBoard._id}`);
    }
  }

  async function updateBoardContent() {
    // 수정하기

    const Variables: IVariables = {};
    if (writer !== "") Variables.writer = writer;
    if (title !== "") Variables.title = title;
    if (contents !== "") Variables.contents = contents;
    if (youtubeurl !== "") Variables.youtubeUrl = youtubeurl;

    console.log(router.query.boardId);

    try {
      await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: password,
          updateBoardInput: Variables,
        },
      });
      alert("게시물 수정이 완료되었습니다.");
      router.push(`/portfolio/boards/detail/${router.query.boardId}`);
    } catch {
      alert("실패");
    }
  }

  function onChangeFileUrls(fileUrl: string, index: number) {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  }

  useEffect(() => {
    if (props.data?.fetchBoard.images?.length) {
      setFileUrls([...props.data?.fetchBoard.images]);
    }
  }, [props.data]);

  return (
    <BoardWirteUI
      putWriterdata={putWriterdata}
      putPassworddata={putPassworddata}
      putTitledata={putTitledata}
      putWContentsdata={putWContentsdata}
      putYoutubeUrl={putYoutubeUrl}
      checkNullinput={checkNullinput}
      checknullwriter={checknullwriter}
      checknulltitle={checknulltitle}
      checknullpassword={checknullpassword}
      checknullcontents={checknullcontents}
      updateBoardContent={updateBoardContent}
      isEdit={props.isEdit}
      data={props.data}
      isActive={isActive}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onChangeAddressDetail={onChangeAddressDetail}
      isOpen={isOpen}
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
    />
  );
}
