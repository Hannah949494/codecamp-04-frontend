

import { ChangeEvent, useState } from "react"
import { gql, useMutation } from "@apollo/client"
import { IMutation, IMutationUploadFileArgs,IMutationCreateBoardArgs} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      images
    }
  }
`;

export default function ImageUploadPreviewPage() {
    const [imagePreview, setImagePreview] = useState("");
    const [imageUpload, setImageUpload] = useState(["", "", ""]);
    const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

    function onChangeFile(event : ChangeEvent){
        

        const fileReader = new FileReader()
        const image = event.target.files[0];
        fileReader.readAsDataURL(image)
        fileReader.onload = (data) => {
            setImagePreview(data.target?.result)
        }
        setImageUpload(event.target.files[0]);
    }
    async function onClickSubmit(){
        let imgUrl = ""
        if (imageUpload){
        const result1 = await uploadFile({
            variables: {
              file: imageUpload,
            },
          });
          imgUrl = result1.data?.uploadFile.url || "";
        }

          const result2 = await createBoard({
            variables: {
              createBoardInput: {
                writer: "바보",
                password: "1234",
                title: "김영탁바보",
                contents: "영탁쓰바보",
                images: [imgUrl]
              },
            },
          });
    }

    return(
        <>
        <h1>프리뷰</h1>
        <input type="file" onChange={onChangeFile}/>
        <figure>
            <img src={imagePreview} alt="" />
        </figure>
        <button onClick={onClickSubmit}>게시물 등록하기</button>
        </>
    )
    
}