function solution(x, n) {
    var answer = [];

    for(var i=1; i<=n; i++){
        answer.push(i*x);
    }

    return answer;
}


//ref code

function solution(x, n){
 
    const answer = new Array(n)
        .fill(1)
        .map((num, i) => {
            return (num + i) * x
        })
    
    
 return answer; 
}