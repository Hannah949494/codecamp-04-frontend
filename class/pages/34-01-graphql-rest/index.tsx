import axios from "axios";

export default function GraphqlRestPage() {
  async function onClickSubmit() {
    const result = await axios.post(
      "https://backend04.codebootcamp.co.kr/graphql",
      {
        query: `mutation 
                 createBoard { 
                     createBoard(
                         createBoardInput: {
                            writer : "유리",
                            password : "1234",
                            title : "해바라기유치원",
                            contents : "짱구이민감"
                         }
                         ){
                             _id
                             writer
                     } 
                    }`,
      } //header 는 3번째에 들어감.)
    );

    console.log(result);
  }

  return (
    <>
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
