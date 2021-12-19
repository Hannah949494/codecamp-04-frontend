// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { gql, useMutation } from "@apollo/client";
import {
  MapWrapper,
  Wrapper,
  WriteHeader,
  WriteWrap,
} from "../../../../src/components/unit/freelancer/write/freelancerWrite.styles";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Modal } from "antd";
import Input01 from "../../../../src/components/commons/inputs/01/input01";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../src/commons/types/generated/types";

const CREATE_PRODUCT = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      name
      contents
      price
      images
      remarks
      tags
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

  function handleChange(value: string) {
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  }

  async function onClickSubmit(data: FormValues) {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            contents: data.contents,
            price: data.price,
            remarks: data.remarks,
          },
        },
      });
      Modal.success({ title: "등록에 성공하셨습니다" });
      console.log(result);
      router.push("/portfolio/freelancer/list");
    } catch (error) {
      Modal.error({ title: error.message });
    }
  }
  return (
    <>
      <Wrapper>
        <div>
          <WriteHeader>
            <h2>상품 등록하기</h2>
          </WriteHeader>
        </div>
        <form onSubmit={handleSubmit(onClickSubmit)}>
          <WriteWrap>
            <label htmlFor="">상품명</label>
            <Input01
              type="text"
              placeholder="상품명을 입력해주세요."
              {...register("name")}
            />
          </WriteWrap>

          <WriteWrap>
            <label htmlFor="">한줄요약</label>
            <Input01
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
            <Input01
              type="number"
              placeholder="가격 입력"
              {...register("price")}
            />
          </WriteWrap>

          <WriteWrap>
            <label htmlFor="">해쉬태그 입력</label>
            <Input01
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
                <Input01 type="text" />
                <Input01 type="text" />
              </div>
            </MapWrapper>
          </WriteWrap>
          <button>제품 등록</button>
        </form>
      </Wrapper>
    </>
  );
}
