import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  // const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    if (!localStorage.getItem("refreshToken")) {
      alert("로그인 한 사람만 입장 가능합니다!!! 로그인을 먼저 해주세요!!");
      router.push("/portfolio/user/login");
    }
  }, []);

  return <Component {...props} />;
};
