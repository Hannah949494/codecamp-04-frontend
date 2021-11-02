
import {useState} from 'react'

export default function RandomNumLetPage(){

    const [ randomMake, setRandommake ] = useState("000000")


    function makeRandomNum (){
        
        setRandommake(randomMake = Math.floor(Math.random() * (999999 - 100000) ) + 100000)
        
    }

    return(
        <>
            <div id="randomnum">{randomMake}</div>
            <button onClick={makeRandomNum}>인증번호 받기</button>
        </>

    )
}