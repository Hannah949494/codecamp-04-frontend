function solution(n, arr1, arr2) {
    var answer = [];
    
    for (let i =0; i<arr1.length; i++){
        answer[i] = ""
        const map1 = arr1[i].toString(2).padStart( n, "0")
        const map2 = arr2[i].toString(2).padStart(n, "0")
        
        for(let l = 0; l < map1.length; l++){
            if( map1[l] === "1" || map2[l] === "1"){
                // 지도 둘 중 하나라도 벽(1)이라면
                // 전체 지도에 벽(#)을 넣는다.
                answer[i] += "#";
            }else{
                //아니라면 (= 공백이라면)
                // 전체 지도에 공백("") 을 넣는다.
                answer[i]  += " ";
            }
        }
        
        
    }
    return answer
}

//method 

function solution(n, arr1, arr2) {
    const answer = arr1.map( (map1, i) =>{
        map1 = map1.toString(2).padStart( n, "0");
        const map2 = arr2[i].toString(2).padStart(n, "0");
        
        return map1.split("").map( (el, l) => {
            return el === "1" || map2[l] === "1" ? "#" : " "
        }).join("")
    });
    
    return answer
    
        
    }
    
