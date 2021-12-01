import { MouseEvent } from "react";

export default function HofPage() {
  const onClickChild = (index) => (event) => {
    console.log(event.target.id);
  };

  //     function onClickChild(event) {

  //   }

  return (
    <>
      <h1>HOF 연습 페이지 입니다</h1>
      <article>
        {["철수", "영희", "훈이"].map((el, index) => (
          <button key={el} id={String(index)} onClick={onClickChild(index)}>
            {el}
          </button>
        ))}
      </article>
    </>
  );
}

onClickChild(index);
