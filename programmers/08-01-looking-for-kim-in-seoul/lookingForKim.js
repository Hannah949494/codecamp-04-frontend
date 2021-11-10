function solution(seoul) {
    var answer = '';
    for(let i=0; i<seoul.length; i++) {
        if(seoul[i]=="Kim") answer += "김서방은 " + i + "에 있다";
    }
    return answer;
}

// ref code

function solution(seoul) {

    let x = 0; // 김서방의 위치 (인덱스)  값을 지정

    for(let i = 0; i < seoul.length; i++){

        if(seoul[i] === "Kim"){

            x = i;

        }

        return  `김서방은 ${x}에 있다.`

    }
}

function solution(seoul) {

    const x = seoul.indexOf("Kim")
    
    return `김서방은 ${x}에 있다`
}