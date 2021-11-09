import { useRouter } from 'next/router'
import DynamicRoutingUI from './RouteList.presenter'

export default function DynamicRouting(){
    const router = useRouter()
    console.log(router)
    function onClickMove1(){
        router.push('/quiz/06-quiz/detail/1')
    }

    function onClickMove2(){
        router.push('/quiz/06-quiz/detail/2')
    }

    function onClickMove3(){
        router.push('/quiz/06-quiz/detail/3')
    }

    return(
        <DynamicRoutingUI

            onClickMove1 = {onClickMove1}
            onClickMove2 = {onClickMove2}
            onClickMove3 = {onClickMove3}
        
        />

    )
}
