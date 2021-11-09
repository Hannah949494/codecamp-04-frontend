function solution(arr) {
    var average = 0;    
    for(let i=0; i < arr.length; i++){
        average += arr[i];
    }
    return average = average/arr.length;
}
