
export default function TypescriptPage() {

    let aaa = "안녕하세요"
    aaa = String(123)
    // 문자타입 - 타입추론

    let ccc : string = "노원두"

    let ddd : number = 123455555551235456487486435135486748651321324132

    let eee = [1, 2, 3, 4 ,5,  6]

    let fff: number[] | string [] = [123, 45, 1111 ,1232324] // union type 

    fff = ["문자", "문자라라자라라자"]

    let ggg: (number | string)[]  = ["13213", "A" , 12345 , "cccc"]

    interface IProfile{

        name : string,
        age : number | string
        school : string

    }

    let profile : IProfile = {

        name : "철수",
        age : "8살",
        school : "다람쥐초등학교"
    }
    
    return <div>타입스크립트 연습</div>
}