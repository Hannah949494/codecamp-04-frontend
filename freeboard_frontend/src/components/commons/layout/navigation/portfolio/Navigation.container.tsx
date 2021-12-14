import router from "next/router";
import NavigationUI from "./Navigation.presenter";
import { gql, useMutation, useQuery } from "@apollo/client"
import { Modal } from "antd";

const USER_LOGOUT = gql`
  mutation logoutUser{
      logoutUser
  }
`
const FETCH_USER_LOGGEDIN =gql`
query fetchUserLoggedIn{
  fetchUserLoggedIn{
    email
    name
    picture
  }
}
`

export default function Navigation() {
  const [logout] = useMutation(USER_LOGOUT)
  const { data } = useQuery(FETCH_USER_LOGGEDIN)
  
  
  function onClickLogin(){
    router.push("/portfolio/user/login")
  }
  async function onClickLogout(){
    const result = await logout()
    console.log(result)
    Modal.success({ title : "로그아웃 하셨습니다. "})
    localStorage.removeItem("refreshToken")
    router.push("/portfolio")
    
  }
  function onClickSignup(){
    router.push("/portfolio/user/signup")
  }
  

  

  return <NavigationUI
    onClickLogin = {onClickLogin}
    onClickLogout= {onClickLogout}
    onClickSignup = {onClickSignup}
    data = {data}
  />;
}
