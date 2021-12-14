import { ChangeEvent, useState } from "react"

export default function ImageUploadPreviewPage() {
    const [imagePreview, setImagePreview] = useState("");

    function onChangeFile(event : ChangeEvent<HTMLInputElement>){
        const image = event.target.files[0];

        const fileReader = new FileReader()
        fileReader.readAsDataURL(image)
        fileReader.onload = (data) => {
            setImagePreview(data.target?.result)
        }
        
    }
    return(
        <>
        <h1>프리뷰</h1>
        <input type="file" onChange={onChangeFile}/>
        <figure>
            <img src={imagePreview} alt="" />
        </figure>
        </>
    )
    
}