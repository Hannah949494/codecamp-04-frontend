import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function MyLifeCyclePage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [count, setCount] = useState(0);

  // componentDidMount 와 동일
  useEffect(() => {
    console.log("마운트됨");
    inputRef.current?.focus();

    return () => {
      console.log("잘가요~");
    };
  }, []); // [] 의존성 배열 dependency array

  // componentDidUpdate와 비슷
  useEffect(() => {
    console.log("수정됨");
  });

  function onClickCounter() {
    setCount((prev) => prev + 1);
  }

  function onClickMove() {
    router.push("/");
  }
  return (
    <>
      <input type="text" ref={inputRef} />
      <div>현재카운트 : {count}</div>
      <button onClick={onClickCounter}>카운트 올리기</button>
      <button onClick={onClickMove}>페이지 이동</button>
    </>
  );
}
