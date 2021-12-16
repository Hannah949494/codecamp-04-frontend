import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
const defaultInputs = {
  writer: "",
  password: "",
  title: "",
  contents: "",
};

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function isSubmittingPage() {
  const [inputs, setInputs] = useState(defaultInputs);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeInputs =
    (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setInputs((prev) => ({
        ...prev,
        [name]: event.target.value,
      }));
    };
  async function onClickSubmit() {
    setIsSubmitting(true);
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            ...inputs,
          },
        },
      });
      Modal.success({ title: "등록에 성공하였습니다! " });
      console.log(result);
      setIsSubmitting(false);
    } catch (error) {
      Modal.error({ title: error.message });
    }
  }

  return (
    <>
      <div>
        <label htmlFor="">작성자 : </label>
        <input type="text" name="" id="" onChange={onChangeInputs("writer")} />
        <label htmlFor="">비밀번호 : </label>
        <input
          type="password"
          name=""
          id=""
          onChange={onChangeInputs("password")}
        />
        <label htmlFor="">제목 : </label>
        <input type="text" name="" id="" onChange={onChangeInputs("title")} />
        <label htmlFor="">내용 : </label>
        <input type="text" onChange={onChangeInputs("contents")} />
        <button onClick={onClickSubmit} disabled={isSubmitting}>
          등록하기
        </button>
      </div>
    </>
  );
}
