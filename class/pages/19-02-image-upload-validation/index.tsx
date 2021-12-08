import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [, setMyImages] = useState<String[]>([]);
  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const myFile = event.target.files?.[0];
    console.log(myFile);

    if (!myFile?.size) {
      alert("파일이 없습니다!");
      return;
    }

    if (myFile.size > 5 * 1024 * 1024) {
      alert("파일이 너무 큽니다!");
      return;
    }

    if (!myFile.type.includes("jpeg") && !myFile.type.includes("png")) {
      alert("파일 확장자가 다릅니다. jpeg 또는 png만 가능합니다.");
      return;
    }

    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    console.log(result.data.uploadFile.url);
    setMyImages([result.data.uploadFile.url]);
  }
  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <div></div>
    </>
  );
}
