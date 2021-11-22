import { useState } from "react";
import { Rate } from 'antd'


export default function LibraryStarPage() {

    const [value, setValue] = useState(3)
    
    function handleChnage(value : number) {
        
        setValue(value);

    }

    return(
        <span>
        <Rate onChange={handleChnage} value={value} />
        </span>

    )

}