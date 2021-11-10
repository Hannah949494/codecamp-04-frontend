import { FETCH_BOARDS, FETCH_BOARDS_OF_BEST} from './BoardList.quries'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import BoardListUI from './BoardList.presenter'

export default function BoardList(){
    // const [ deleteBoard ] = useMutation(DELETE_BOARD)
    const router = useRouter()
    // async function onClickDelete(event){
        
    //     await deleteBoard({
    //         variables: { number : Number(event.target.id)},
    //         refetchQueries: [{ query : FETCH_BOARDS} ]
    //     })

    // }
    
    const { data } = useQuery(FETCH_BOARDS) // [{number : 1, wirter : 123213, ....}, {writer : 123213}, {},]
    const { data:bestdata } = useQuery(FETCH_BOARDS_OF_BEST) 

    function MoveToDetailPage(event){

            router.push(`/boards/detail/${event.target.id}`);  
            console.log(router)
    }

    function MoveToBestDetailPage(event){
        console.log(`${event.target.id}`)
        router.push(`/boards/detail/${event.target.id}`); 
        //router.push(`/boards/${bestdata.fetchBoardsOfTheBest._id}`);  
    }

    function MoveToWritePage(event){
        router.push('/boards/new')
    }

    
    return <BoardListUI 
        data = {data}
        bestdata = {bestdata}
        MoveToBestDetailPage = {MoveToBestDetailPage}
        MoveToDetailPage = {MoveToDetailPage}
        MoveToWritePage = {MoveToWritePage}
    />

}