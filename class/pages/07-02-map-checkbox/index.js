import {gql, useMutation, useQuery} from '@apollo/client'
import styled from '@emotion/styled'

const FETCH_BOARDS = gql`
    
    query{
        fetchBoards {
            number
            writer
            title
            createdAt
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

const Row = styled.div`
    display:block;
    width:100%;
    max-width:1200px;
    padding:10px 0;
    margin-bottom:10px;
    border-bottom:1px solid #ebebeb;
`

const Column = styled.span`
    display:inline-block;
    padding:0 15px;
    text-align:left;
`

export default function MapWithCheckBoxPage(){
    const [ deleteBoard ] = useMutation(DELETE_BOARD)

    async function onClickDelete(event){
        
        await deleteBoard({
            variables: { number : Number(event.target.id)},
            refetchQueries: [{ query : FETCH_BOARDS} ]
        })

    }
    
    const { data } = useQuery(FETCH_BOARDS) // [{number : 1, wirter : 123213, ....}, {writer : 123213}, {},]
    
    return(
            <>
            {data?.fetchBoards.map((el, index) => (
                <Row key={el.number}>
                    <Column><input type="checkbox" /></Column>
                    <Column>{index + 1}</Column>
                    <Column>{el.wirter}</Column>
                    <Column>{el.title}</Column>
                    <Column>{el.createdAt}</Column>
                    <Column>
                        <button id={el.number} onClick={onClickDelete}>삭제하기</button>
                    </Column>
               </Row>
            ))}
            </>       
        
    )

}