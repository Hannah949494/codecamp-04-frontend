import { useEffect, useRef, useState } from "react"

export default function ImagePreloadPage(){
    const [myLoadedImage, setMyLoadedImage] = useState()    
    const divRef = useRef(null)

    useEffect(() => {        
        const img = new Image()
        img.src = "https://cdn-lostark.game.onstove.com/uploadfiles/banner/8804061f54554b359fe7418ca3990beb.jpg"
        img.onload = () => {
            setMyLoadedImage(img)
        }
    }, [])

    function onClickButton() {
        divRef.current?.appendChild(myLoadedImage);
    }

    return(
        <>
        <h1>안녕하세요 사이트에 오신것을 환영합니다</h1>
        <div ref={divRef}></div>
        <button onClick={onClickButton}>이미지 보여주기</button>
        <img src="https://cdn-lostark.game.onstove.com/uploadfiles/banner/8804061f54554b359fe7418ca3990beb.jpg" alt="" />
        </>
    )
}