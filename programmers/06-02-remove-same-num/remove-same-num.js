function solution(arr){
    var answer = []; // 빈 배열 생성
    for(var i = 0; i < arr.length; i++){
        if(arr[i] !== arr[i + 1]){
           answer.push(arr[i]);
        }        
    } // arr[i] 가 arr[i + 1] 과 일치하지 않으면
     //arr[i]에 다시 집어넣어라.
    return answer;
    
}

//예를 들어서 설명하자면,
// answer[] 배열 내에 , 1, 1, 2, 3, 3, 4, 4, 5 라는 숫자들이 들어가 있다면, for문을 실행했을 때, 총 7번 실행됩니다.
// answer[0] = 1, answer[1] = 1 이기 때문에 값을 집어넣지 않고, answer[1] = 1, answer[2] = 2일때 1의 값을 집어넣어 연속적으로 나타나는 중복되는 숫자를 제거합니다.


//ref code

function solution(arr){
    let answer = [];

    for (let i = 0; i < arr.length; i = i++){

        if(arr[i] !== arr[i + 1]){
            answer.push(arr[i])
        }
    }

}

function solution(arr){
    
    const answer = [];

    for (let i = 0; i <arr.length; i++){

        if(answer[answer.length - 1] !== arr[i]){
            answer.push( arr[i])
        }

        return answer;
        
    }


}