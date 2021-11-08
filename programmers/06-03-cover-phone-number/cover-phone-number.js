
function solution(phone_number) {
    var answer = '';
    for(let i=0;i<phone_number.length;i++){
        if(i>=phone_number.length-4){
            answer += phone_number[i];
            console.log(answer)
        }
        else{
            answer +="*";
        }
    }
    return answer;
}



//ref code

function solution(phone_number) {

    let answer = "";

    for (let i = 0; i < phone_number.length; i++){
        if ( i < phone_number.length - 4){
            answer = answer + "*"
        }
        else{
            answer = answer + phone_number[i];
        }
    }
    return answer;
}

function solution(phone_number) {

    let answer = ""
    answer = answer.padStart(phone_numer.length - 4, "*");
    answer += phone_number.slice( phone_number.length - 4, phone_number.length) // index 값은 항상 length 값보다 한 수 적음.
    

}