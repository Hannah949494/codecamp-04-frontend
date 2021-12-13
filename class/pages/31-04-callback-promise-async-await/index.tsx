import axios from "axios";
import { useState } from "react"

export default function CallbackPromiseAsyncAwaitPage(){

    const [myCallback, setMyCallback] = useState([]);
    const [myPromise, setMyPromise] = useState([]);
    const [myAsyncAwait, setMyAsyncAwait] = useState([]);

    function requestCallback(){
        const ccc = new XMLHttpRequest();
        ccc.open("get", "http://numbersapi.com/random?min=1&max=200")
        ccc.send()
        ccc.addEventListener("load", (res: any) =>{
            const num = res.target.response.split(" ")[0]
            const aaa = new XMLHttpRequest();
            aaa.open("get", `https://koreanjson.com/posts/${num}`)
            aaa.send()
            aaa.addEventListener("load", (res: any)=>{
                const userId = JSON.parse(res.target.response).UserId
                const aaa2 = new XMLHttpRequest();
                aaa2.open("get", `https://koreanjson.com/posts?userId=${userId}` );
                aaa2.send()
                aaa2.addEventListener("load", (res: any) =>{
                  const result = JSON.parse(res.target.response) 
                  setMyCallback(result)
                })
            })
        })
        // 1. 임의의 숫자 받아오기
        // 2. 받아온 숫자에 해당하는 게시글 불러오기
        // 3. 그 게시글을 쓴 작성자의 다른 게시글 보기


        //("http://numbersapi.com/random?min=1&max=200");
    }
    
    // new Promise((resolve, reject) => {
    //        //외부에 요청하기 / 비동기 작업하기
    //        // if(성공) resolve()
    //        // if(실패) reject()
    // })

    function requestPromise(){
        console.log("이것은 1번입니다.")
        axios.get("http://numbersapi.com/random?min=1&max=200")
        .then(res =>{
            console.log("이것은 3번입니다")
            const num = res.data.split(" ")[0]
            return axios.get(`https://koreanjson.com/posts/${num}`)
        }).then(res =>{
            const userId = res.data.UserId
            return axios.get(`https://koreanjson.com/posts?userId=${userId}`)
        }).then(
            res =>{
                setMyPromise(res.data)
            }
        ).catch((error) => {
            console.log(error)
        });
        //promise chaining
        console.log("이것은 2번입니다.")
    }

    async function requestAsyncAwait(){
    
        const res1 = await axios.get("http://numbersapi.com/random?min=1&max=200")
        const num = res1.data.split(" ")[0];
        
        const res2 = await axios.get(`https://koreanjson.com/posts/${num}`)
        const userId = res2.data.UserId;
        
        const res3 = await axios.get(`https://koreanjson.com/posts?userId=${userId}`)
        setMyAsyncAwait(res3.data)
        
    }

    return(
        <>
        <h1>콜백과 친구들</h1>
        <div>결과 : {myCallback.map((el: any) => (
            <div key={el.title}> {el.title} </div>
        ))}</div>
        <button onClick={requestCallback}>Callback 요청하기</button>
        <div>결과 : {myPromise.map((el: any) => (
            <div key={el.title}> {el.title} </div>
        ))}</div>
        <button onClick={requestPromise}>Promise 요청하기</button>
        <div>결과 : {myAsyncAwait.map((el: any) => (
            <div key={el.title}> {el.title} </div>
        ))}</div>
        <button onClick={requestAsyncAwait}>Async Await 요청하기</button>
        </>

    )
}