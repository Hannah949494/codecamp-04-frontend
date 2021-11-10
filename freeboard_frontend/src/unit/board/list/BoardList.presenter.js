import * as B from './BoardList.styles'

export default function BoardListUI(props){
    return(
        <B.ListWrapper>
        <B.BestListWRap>
         {props.bestdata?.fetchBoardsOfTheBest.map((el) => (
            
                <B.BestListCard key={el._id}>
                    <B.BestListConts >
                        <B.ImageSection></B.ImageSection>
                        <B.BestContsTxt>
                            <B.BestContsTitle id={el._id} onClick={props.MoveToBestDetailPage}>{el.title}</B.BestContsTitle>
                            <B.BestContsWriter>{el.writer}</B.BestContsWriter>
                            <B.BestContsDate>{(el.createdAt).slice(0,10)}</B.BestContsDate>
                            <B.BestContsContents>{el.contents}</B.BestContsContents>
                            <B.BestLikeWrap>
                                <p><B.BestLikeIco /></p>
                                <B.BestLikeTxt>{el.likeCount}</B.BestLikeTxt>
                                </B.BestLikeWrap>
                        </B.BestContsTxt>
                    </B.BestListConts>
                </B.BestListCard>          
        ))}

        </B.BestListWRap>
        <B.BoardListWrap>
            <B.BoardListType>
                <B.BoardNumber>번호</B.BoardNumber>
                <div>제목</div>
                <B.BoardWriter>작성자</B.BoardWriter>
                <B.BoardDate>작성일</B.BoardDate>
            </B.BoardListType>
        {props.data?.fetchBoards.map((el, index) => (
            <B.BoardList key={el._id}>
                <B.BoardNumber>{index + 1}</B.BoardNumber>
                <div id={el._id} onClick={props.MoveToDetailPage}>{el.title}</div>
                <B.BoardWriter>{el.writer}</B.BoardWriter>
                <B.BoardDate>{(el.createdAt).slice(0,10)}</B.BoardDate>
           </B.BoardList>
        ))}
            <B.WriteButtonWrap>
                <B.WriteButtonIco />
                <B.WriteButton onClick = {props.MoveToWritePage}>게시물 등록하기</B.WriteButton>
            </B.WriteButtonWrap>
        </B.BoardListWrap>

        </B.ListWrapper>       
    
)
}