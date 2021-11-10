
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useQuery, useMutation } from "@apollo/client"
import { useRouter } from 'next/router'
import BoardDetailUI from './BoardDetail.presenter'
import { FETCH_BOARD, DELETE_BOARD } from './BoardDetail.quries'

export default function BoardDetail(){
    const router = useRouter()
    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: router.query.boardId },
    });
    const [ deleteBoard ] = useMutation(DELETE_BOARD)
    const settings = {
        dots: true,
        infinitie: true,
        speed: 1000,
        slidesToShow :1,
        slidesToScroll: 1

    }
        let NewDataContainer = "&nbsp;";
        let dataContainer = String(data?.fetchBoard.createdAt)
        let NewData = dataContainer.slice(0,10)
        let NewTime = dataContainer.slice(11,16)
            console.log(NewData)
            console.log(NewTime)
            NewDataContainer = NewData + " " + NewTime
 
        function MoveToList(e){
            router.push('/boards/list')
        }

        function MoveToEditPage(event){
            router.push(`/boards/detail/${router.query.boardId}/edit`)
        }

        async function onClickDelete(){
        try{
            await deleteBoard({
                variables: { boardId : router.query.boardId},
            })
                router.push('/boards/list')
            alert("삭제성공")
        }catch{alert("실패")}
    }
    return (
        <BoardDetailUI 
            MoveToList = {MoveToList}
            onClickDelete = {onClickDelete}
            data = {data}
            settings = {settings}
            NewDataContainer = {NewDataContainer}
            MoveToEditPage = {MoveToEditPage}
        />
    )
}
