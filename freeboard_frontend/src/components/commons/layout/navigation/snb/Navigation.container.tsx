import router from "next/router";
import SubNavigationUI from "./Navigation.presenter";





export default function SubNavigation() {
  
  function onClicktoBoards() {
    router.push("/portfolio/boards/list")
  }

  function onClicktofreelancer(){
    router.push("/portfolio/freelancer")
  }

  

  return <SubNavigationUI
    onClicktoBoards = {onClicktoBoards}
    onClicktofreelancer = {onClicktofreelancer}
  />;
}
