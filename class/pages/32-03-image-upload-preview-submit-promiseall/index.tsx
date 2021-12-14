

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
    const [imageUploads, setImageUploads] = useState([]);
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
            setImageUploads((prev)=> [...prev, image]);
        }
        
    }
    async function onClickSubmit(){
        let imgUrl = []
        if (imageUploads.length){
        // const result1 = await uploadFile({
        //     variables: {
        //       file: {...imageUploads},
        //     },
        //   });

        // 각각 올리기 테스트

        const start = performance.now()
         await uploadFile({ variables: { file: imageUploads[0],} });
         await uploadFile({ variables: { file: imageUploads[0],} });
         await uploadFile({ variables: { file: imageUploads[0],} });
         await uploadFile({ variables: { file: imageUploads[0],} });
         await uploadFile({ variables: { file: imageUploads[0],} });
        
         const end = performance.now()
         console.log(end - start)

        //동시에 올리기 테스트
        //  const start = performance.now()
        //  const result = await Promise.all([ 
        //    // Promise.race([]) <- 동시에 요청을 뿌리는데, 먼저 끝난 것 먼저 캐치함!
        //   uploadFile({ variables: { file: imageUploads[0],} }),
        //   uploadFile({ variables: { file: imageUploads[0],} }),
        //   uploadFile({ variables: { file: imageUploads[0],} }),
        //   uploadFile({ variables: { file: imageUploads[0],} }),
        //   uploadFile({ variables: { file: imageUploads[0],} }),
          

        //  ])
        //  const end = performance.now()
        //  console.log(end - start);
        //  imgUrl = result.map((el) => el.data?.uploadFile.url); 
        }
        
        
          // imgUrl[1] = result1.data?.uploadFile.url || "";

        //   const result2 = await uploadFile({
        //     variables: {
        //       file: imageUploads[1],
        //     },
        //   });

        
        //   imgUrl[2] = result2.data?.uploadFile.url || "";

        //   const result3 = await uploadFile({
        //     variables: {
        //       file: imageUploads[2],
        //     },
        //   });

        
        //   imgUrl[2] = result1.data?.uploadFile.url || "";

        //   const result4 = await uploadFile({
        //     variables: {
        //       file: imageUploads[3],
        //     },
        //   });

        
        //   imgUrl[3] = result4.data?.uploadFile.url || "";

        //   const result5 = await uploadFile({
        //     variables: {
        //       file: imageUploads[4],
        //     },
        //   });

        
        //   imgUrl[4] = result5.data?.uploadFile.url || "";
        // }

          const result2 = await createBoard({
            variables: {
              createBoardInput: {
                writer: "바보",
                password: "1234",
                title: "김영탁바보",
                contents: "영탁쓰바보",
                images: [...imgUrl]
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