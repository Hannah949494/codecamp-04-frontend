// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { gql, useMutation } from "@apollo/client";
import {
  MapWrapper,
  Wrapper,
  WriteHeader,
  WriteWrap,
  Input,
} from "../../../../src/components/unit/freelancer/write/freelancerWrite.styles";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../src/commons/types/generated/types";
import { v4 as uuidv4 } from "uuid";
import Uploads01 from "../../../../src/components/commons/uploads/01/Uploads01.container";
const CREATE_PRODUCT = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
    }
  }
`;

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const modules = {
  toolbar: [
    // [{ 'font': [] }],
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
    ["clean"],
  ],
};

const formats = [
  // 'font',
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "align",
  "color",
  "background",
];

interface FormValues {
  name: string;
  contents: string;
  price: number;
  remarks: string;
  tags: [string];
}

export default function FreelancerWritePage() {
  const router = useRouter();
  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_PRODUCT);
  const { handleSubmit, register, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const handleChange = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  async function onClickSubmit(data: FormValues) {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            price: data.price,
            contents: data.contents,
            tags: data.tags,
            images: fileUrls,
          },
        },
      });
      Modal.success({ title: "등록에 성공하셨습니다" });
      console.log(result);
      router.push("/portfolio/freelancer/list");
    } catch (error) {
      Modal.error({ title: error.message });
      console.log(data);
    }
  }

  function onChangeFileUrls(fileUrl: string, index: number) {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        <Wrapper>
          <div>
            <WriteHeader>
              <h2>상품 등록하기</h2>
            </WriteHeader>
          </div>

          <WriteWrap>
            <label htmlFor="">상품명</label>
            <Input
              type="text"
              placeholder="상품명을 입력해주세요."
              {...register("name")}
            />
          </WriteWrap>

          <WriteWrap>
            <label htmlFor="">한줄요약</label>
            <Input
              type="text"
              placeholder="상품내용을 한줄로 정리해주세요"
              {...register("remarks")}
            />
          </WriteWrap>

          <WriteWrap>
            <label htmlFor="">상품 설명</label>
            <ReactQuill
              onChange={handleChange}
              modules={modules}
              formats={formats}
            />
          </WriteWrap>

          <WriteWrap>
            <label htmlFor="">판매가격</label>
            <Input
              type="number"
              placeholder="가격 입력"
              {...register("price", {
                valueAsNumber: true,
              })}
            />
          </WriteWrap>

          <WriteWrap>
            <label htmlFor="">해쉬태그 입력</label>
            <Input
              type="text"
              placeholder="해쉬태그 입력해주세요"
              {...register("tags")}
            />
          </WriteWrap>

          <WriteWrap>
            <label htmlFor="">거래위치</label>
            <MapWrapper>
              <div>지도 들어갈곳</div>
              <div>
                <label htmlFor="">주소</label>
                <Input type="text" />
                <Input type="text" />
              </div>
            </MapWrapper>
            <div>
              <label>사진첨부</label>
              <div>
                {fileUrls.map((el, index) => (
                  <Uploads01
                    key={uuidv4()}
                    index={index}
                    fileUrl={el}
                    onChangeFileUrls={onChangeFileUrls}
                  />
                ))}
              </div>
            </div>
          </WriteWrap>
          <button>제품 등록</button>
        </Wrapper>
      </form>
    </>
  );
}
