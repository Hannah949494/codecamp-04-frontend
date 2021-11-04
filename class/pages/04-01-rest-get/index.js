import axios from 'axios'
import {useState} from 'react'

export default function RestGetPage(){

    const [gettitle, setGettitle] = useState("")
    async function GetRestApi(){

        // const GetRestApi () ==> {
         // 만약 화살표 함수라면
         // await axios.get('')
        //}
        const result = await axios.get('https://koreanjson.com/posts/1')
        
        console.log(result)
        console.log(result.data.title)
        setGettitle(result.data.title)


    }

    

    return(

        <div>
            <button onClick={GetRestApi}>REST-API 요청하기</button>
            <div>
                <h1>{gettitle}</h1>
            </div>
        </div>

    ) //JSX
}