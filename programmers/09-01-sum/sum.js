function solution(n)
{
    var answer = 0;
    var str = n.toString();
    var str_split = str.split('');

    for(var i=0; i<str_split.length; i++){
        answer += parseInt(str_split[i]);
    }
    return answer;
}

//ref code

function solution(n){

    n = String(n);
    // 숫자 타입의 n 을 문자열 타입으로 변환.  String() 과 .toString()의 차이점?
    // string은 숫자가 들어와도 문자열로 바뀌지만, .toString()은 변수가 와야합니다!
    var answer = 0;

    for (let i = 0; i < n.length; i++){
        
        answer +=Number(n[i])
    }
    return answer


}

// method

function solution(n){

    let answer = 0;
    String(n)
        .split("")
        .forEach( num => {
            answer += Number(num)
        })
        return answer;


}