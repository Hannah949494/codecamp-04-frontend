function solution(arr) {
    var answer = [];
    
    if (arr.length <= 1) {
        return [-1];
    } else {
        arr.splice(arr.indexOf(Math.min(arr)),1);
        answer = arr;
    }
    
    return answer;
}

// ref code

function solution(arr){
    const answer = [];

    let min = arr[0]

    for (let i = 0; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i]
        }
        
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== min){
            answer.push(arr[i])
        }
    }
    
    return answer.length === 0 ? [-1] : answer
}

// method type

function solution(arr){
    
    const min = Math.min(...arr)
    const answer = arr.filter ( num =>{
        return num !== min

    })
    return answer.length === 0 ? [-1] : answer
}