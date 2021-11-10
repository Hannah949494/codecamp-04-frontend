import styled from "@emotion/styled"

export const ListWrapper = styled.div`
    width:100%;
    max-width:1200px;
    margin:0 auto;
    padding:100px 50px;

`

export const BestListWRap = styled.ul`
    display:flex;
    flex-wrap:wrap;
    margin:0 -10px;
`
export const BestListCard = styled.li`
    width:25%;
    padding:0 10px;
`

export const BestListConts = styled.figure`
    
    border-radius:30px;
    background:#fff;
    border:1px solid #ebebeb;
    overflow:hidden;

`
export const ImageSection = styled.p`
    position:relative;
    width:100%;
    height:150px;
    background:#ddd;

    ::after{
        content:"No Image";
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
        font-size:24px;
        color:#fff;
    }
`
export const BestContsTxt = styled.figcaption`
    padding:20px;
`

export const BestContsWriter = styled.h6`
    font-size:18px;
    font-weight:bold;
    color:#333;

`

export const BestContsDate = styled.span`
    display:block;
    padding-top:5px;
    font-size:13px;
    font-weight:500;
    color:#ddd;
`

export const BestContsContents = styled.p`
    padding:10px 0;
    font-size:16px;
    font-weight:500;
    color:#111;
`

export const BoardListWrap = styled.ul`
    width:100%;
    margin-top:50px;
    
`

export const BoardListType = styled.li`
    display:table;
    width:100%;
    padding:10px 0;
    border-top:2px solid #333;
    border-bottom:1px solid #ececec;

    div {
        display:table-cell;
        font-size:15px;
        text-align:center;
    }
`
export const BoardCheckbox = styled.div`
    width:50px;
`
export const BoardNumber = styled.div`
    width:50px;
`
export const BoardWriter = styled.div`
    width:100px;
`

export const BoardDate = styled.div`
    width:150px;
`
export const BoardDelete = styled.div`
    width:150px;
`
export const BoardList = styled.li`
    display:table;
    width:100%;
    padding:7px 0;
    border-bottom:1px solid #ececec;

    div{
        display:table-cell;
        text-align:center;
        font-size:15px;
    }
    &:nth-child(odd){
        background:#ececec;
    }

    &:hover{
        background:#ccc;
        color:#fff;
        transition: all .2s;
    }
`