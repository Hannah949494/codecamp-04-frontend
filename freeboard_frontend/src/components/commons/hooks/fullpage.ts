import { useEffect, useRef } from "react";

const fullPageEvent = () => {
  const fullPageRef = useRef();

  useEffect(() => {
    const WheelHandler = (e: any) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = fullPageRefCurrent.current;
      const pageHeight = window.innerHeight;

      if (deltaY > 0) {
        // 스크롤 다운
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          // 첫페이지 체크
          fullPageRefCurrent.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          // 첫페이지 체크
          fullPageRefCurrent.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= 0 && scrollTop < pageHeight * 2) {
          // 첫페이지 체크
          fullPageRefCurrent.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
        }
      } else {
      }
    };

    const fullPageRefCurrent: any = fullPageRef.current;
    fullPageRefCurrent.addEventListener("wheel", WheelHandler);

    return () => {
      fullPageRefCurrent.removeEventListener("wheel", WheelHandler);
    };
  }, []);
};

export default fullPageEvent;
