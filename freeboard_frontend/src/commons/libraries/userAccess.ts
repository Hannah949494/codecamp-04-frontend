import router from "next/router"

export function refreshTokenCheck(){
    if (typeof window !== 'undefined') { 
      return localStorage.getItem("refreshToken")
    }
  }
  
export function signout(){
    if (typeof window !== 'undefined') { 
        if(localStorage.getItem("refreshToken")){
          return localStorage.removeItem("refreshToken")
        }  
      }
      return router.push("/portfolio")
}