import { useRouter } from "next/router"
import DynamicRoutingDetailUI from "./RouteDetail.presenter"

export default function DynamicRoutedNumberDetail(){
    const router = useRouter()
    console.log(router)

    return (
        <DynamicRoutingDetailUI 
        aaa = {router.query.aaa}
        />
    )

}