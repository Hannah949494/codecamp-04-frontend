function solution(s) {
    if (!(s.length == 4 || s.length ==  6)){
        return false
    } else {
        const tmp = s.split('')
        for(let i =0;i<tmp.length;i++){
        if (isNaN(tmp[i])){
            return false
        }
        }

    }
    return true
}

function solution(s){

    if(s.length !== 4 && s.length !==6){
        
        return false
    
    }else{
        const storage = s.split('')
        for(let i =0; i < storage.length; i++){
            if(isNaN(storage[i])){
                return false
            }
        }
    }
    return true
}



// ref code

    function solution(s){

        if(s.length !== 4 && s.length !==6){
            
            return false
        
        }else{
            for(let i =0; i < storage.length; i++){
                if(isNaN(storage[i])){
                    answer = false;
                    break;
                }
            }
        }
        return true
    }   
    


    function solution(s){

        if(s.length !== 4 && s.length !==6){
            
            return false
        
        }else{
            const answer = isNaN(s)
        }
        return !answer;
    }  

    function solution(s){
        if(s.length !== 4 && s.length !==6){
            return false
        }

        const answer = s.split('')
        answer.filter( num => {
            return isNaN(num) // 데이터가 숫자가 아닌 문자타입만 남김 . NaN값인 데이터만 남김.
        })
        
        return answer.length === 0

    }