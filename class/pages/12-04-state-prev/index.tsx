import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  function onClickUpCount() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }
  return (
    <>
      <div>현재 카운트: {count}</div>
      <button onClick={onClickUpCount}>카운트 증가</button>
    </>
  );
}
