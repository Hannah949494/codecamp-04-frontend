import { useRouter } from "next/router";
import { Component, useContext, useEffect } from "react";
import { GlobalContext } from "../../_app";

const aaa = (Component) => (props) => {
  const { accessToken } = useContext(GlobalContext);
  const router = useRouter();

  useEffect(() => {
    if (!accessToken) router.push("/");
  }, []);

  return <Component {...props} />;
};

const Presenter = (props) => {
  return <div>프리젠터 입니다. props: {props.aaa}</div>;
};

export default aaa(Presenter);

function aaa() {
  // return function ddd(){
  //로그인 검증 로직
  //   return "결과물"
  // }
}

const aaa = (Component) => {
  return (props) => {
    //로그인 검증 로직
    return "결과물";
  };
};

const aaa = (component) => (props) => {
  ///로직로직로직

  //중간내에 로직이 없으면 위에 있는 함수를 현재상태처럼 변경 가능!

  return <Component {...props} />;
};
