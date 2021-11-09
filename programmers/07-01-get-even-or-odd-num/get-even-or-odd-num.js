function solution(num) {
    
    if (num % 2 === 0){
        return "Even"
    }else {
        return "Odd"
    }
}

//ref code

function solution(num) {
    let answer = '';
    if(num % 2 === 0){
        // 짝수 : 나머지 값이 0
    }
    else {
        // 홀수 : 나머지 값이 1

        answer = 'Odd';
    }

}

function solution(num){
    return num % 2 === 0 ? "Even" : "Odd" // 한줄로 처리할 수 있는 방식
}