import { useEffect, useState } from "react";

export default function MyLifeCyclePage() {
  console.log("랜더링 시작");
  const [count, setCount] = useState(0);

  // ////1번 케이스 ///
  // useEffect(() => {
  //   console.log("최초한번 실행됨");
  // }, []);

  //  ///// 2번 케이스///////

  // useEffect(() => {
  //   console.log("count가 변경되면 재실행");
  // }, [count]);

  //  ///// 3번 케이스 ////

  // useEffect(() => {
  //   setCount(100);
  // }, []);

  // //// 4번 케이스 /////// 무한루프

  // useEffect(() => {
  //   setCount(prev => prev + 1);
  // }, [count]);

  function onClickCounter() {
    setCount((prev) => prev + 1);
  }
  return (
    <>
      <div>현재카운트 : {count}</div>
      <button onClick={onClickCounter}>카운트 올리기</button>
    </>
  );
}
