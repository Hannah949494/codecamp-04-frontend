function solution(n) {
    var answer = [];
    for(let i = 0; i <=n ; i++){
        if(n%i ===0){
           answer.push(i);
        }
    }
    var sum = answer.reduce((a,b)=> a + b,0);
    return sum;
}

//ref code

function solution(n){
    let answer = 0;

    for(let i = 1; i<=n; i++){
        if(n % i === 0){
            answer += i
        }
    }
    return answer
}

function solution(n){
    let answer = 0;
    new Array(n)
    .fill(n)
    .forEach((num, i) => {
        console.log(num, i)
    })
   
}