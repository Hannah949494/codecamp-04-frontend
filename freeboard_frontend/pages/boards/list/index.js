import { gql, useMutation, useQuery } from '@apollo/client'
import { BestListCard, BestListWRap, BestListConts, ImageSection, BestContsTxt, BestContsWriter, BestContsContents, ListWrapper, BestContsDate, BoardListWrap, BoardList, BoardListType, BoardCheckbox, BoardWriter, BoardNumber, BoardDelete, BoardDate } from '../../../src/board/list/BoardList.styles'
const FETCH_BOARDS = gql`
    query{

        fetchBoards {
            _id
            writer
            title
            contents
            createdAt
        }
    }
`
const FETCH_BOARDS_OF_BEST = gql`
    query{

        fetchBoardsOfTheBest{
            _id
            writer
            createdAt
            title
            contents
            likeCount
        }
  }

`

const DELETE_BOARD = gql`
    mutation ($number:Int){
        
            deleteBoard(number : $number){
                message
                number
            }
        }
    
`


export default function BoardListPage(){
    const [ deleteBoard ] = useMutation(DELETE_BOARD)
    async function onClickDelete(event){
        
        await deleteBoard({
            variables: { number : Number(event.target.id)},
            refetchQueries: [{ query : FETCH_BOARDS} ]
        })

    }
    
    const { data } = useQuery(FETCH_BOARDS) // [{number : 1, wirter : 123213, ....}, {writer : 123213}, {},]
    const { data:bestdata } = useQuery(FETCH_BOARDS_OF_BEST) 


    
    return(
            <ListWrapper>
            <BestListWRap>
             {bestdata?.fetchBoardsOfTheBest.map((el) => (
                
                    <BestListCard>
                        <BestListConts>
                            <ImageSection></ImageSection>
                            <BestContsTxt>
                                <BestContsWriter>{el.writer}</BestContsWriter>
                                <BestContsDate>{(el.createdAt).slice(0,10)}</BestContsDate>
                                <BestContsContents>{el.contents}</BestContsContents>
                                <span>{el.likeCount}</span>
                            </BestContsTxt>
                        </BestListConts>
                    </BestListCard>
                    
            ))}
            </BestListWRap>
            <BoardListWrap>
                <BoardListType>
                    <BoardNumber>번호</BoardNumber>
                    <div>제목</div>
                    <BoardWriter>작성자</BoardWriter>
                    <BoardDate>작성일</BoardDate>
                </BoardListType>
            {data?.fetchBoards.map((el, index) => (
                <BoardList key={el.id}>
                    <BoardNumber>{index + 1}</BoardNumber>
                    <div>{el.title}</div>
                    <BoardWriter>{el.writer}</BoardWriter>
                    <BoardDate>{(el.createdAt).slice(0,10)}</BoardDate>
               </BoardList>
            ))}
            </BoardListWrap>
            </ListWrapper>       
        
    )

}