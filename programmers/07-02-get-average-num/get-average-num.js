function solution(arr) {
    var average = 0;    
    for(let i=0; i < arr.length; i++){
        average += arr[i];
    }
    return average = average/arr.length;
}

// ref code

function solution(arr){

    let sum = 0;

    for(let i = 0; i < arr.length; i++){

        sum = sum + arr[i];
        // sum += arr[i]
    }
    return sum / arr.length
    
}