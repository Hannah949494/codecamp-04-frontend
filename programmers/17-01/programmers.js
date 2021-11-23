function solution(a, b) {
    let result = 0;
    for (let i in a) {
        result += a[i] * b[i]
    }
    return result
}

// ref code

function solution(a, b){
    let answer = 0;
    for (let i = 0; i < a.length; i++){
        //console.log(a[i])
        answer += (a[i]*b[i])
    }
    return answer
}

// method type

function solution(a,b){
    const answer = a.map( (num, i) => {
        return num*b[i]
    }).reduce((el, cu) =>{
        return el + cu
    }, 0)
    
    return answer

}

function solution(a,b){
    const answer = a.reduce((el, cu, i) =>{
        return el + (cu * b[i])
    }, 0)
    
    return answer

}