
export default function RandomNumLetPage(){

    function makeRandomNum (){
        
        let randomMake = Math.floor(Math.random() * (999999 - 100000) ) + 100000
        document.getElementById("randomnum").innerText = randomMake
        
    }

    return(
        <>
            <div id="randomnum">000000</div>
            <button onClick={makeRandomNum}>인증번호 받기</button>
        </>

    )
}