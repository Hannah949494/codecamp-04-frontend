function solution(n) {
    n = n.toString(3)
    
    let reverse = "";
    for(let i= n.length - 1; i >= 0 ; i--){
        reverse += n[i];
    }
    
    // 3진법을 10진법으로 변환
    return parseInt(reverse, 3)
}


// method

function solution(n) {
    n = n.toString(3)
    .split("")
    .reverse()
    .join("")
    console.log(n)
    
    return parseInt(n, 3)
    
}


