import styled from '@emotion/styled'

export const Container = styled.div`
    position:relative;
    width:100%;
    max-width:640px;
    margin:50px auto;
    border:1px solid #ddd;

`
export const FaqPageWrap = styled.div`
    width:100%;
    padding:36px 0;
`


export const FaqTopSection = styled.div`

    padding:0 50px;
    padding-bottom:60px;

    &::after{
        content:'';
        display:block;
        clear:both;
    }
    
`
export const FaqSearchWrap = styled.div`
    width:100%;
    
    &::after{
        content:'';
        display:block;
        clear:both;
    }
`

export const FaqTopConts = styled.div`
    position:relative;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    width:100%;
    padding-top:30px;

`

export const FaqSearch = styled.span`
    position:relative;
    width:32px;
    height:32px;
    float:right;

    &::after{
        content:'';
        display:block;
        width:32px;
        height:32px;
        background-image:url('/images/ico-main-search-black.png')
    }
`

export const FaqTopTitle = styled.h1`
    display:inline-block;
    margin:0;
    font-size:40px;
    color:#1f1f1f;
`

export const FaqTopProfile = styled.figure`
    position:absolute;
    right:29px;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    margin:0;
    cursor:pointer;
`

export const FaqTopProfileImg = styled.p`
    position:relative;
    width:60px;
    height:60px;

    &::after{
        content:'';
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background-image:url('/images/img-profile-image.png')
    }

`

export const ProfileUserName = styled.figcaption`
    position:relative;
    padding-left:20px;
    cursor:pointer;
    font-size:24px;
    font-weight:bold;
    color:#1f1f1f;

    &::after{
        content:'';
        position:absolute;
        top:0;
        right:-32px;
        width:28px;
        height:28px;
        background-image:url('/images/ico-right-arrow.png');

    }

`

export const SnbWrap = styled.ul`
    display:flex;
    flex-wrap:wrap;
    margin:60px -20px 0;
    padding:0;
`
export const SnbList = styled.li`
    
    list-style:none;

    a {
        width:100%;
        padding:0 20px;
        font-size:30px;
        font-weight:bold;
        color:#cacaca;
    }

`

export const SnbListActive = styled.li`
    
    list-style:none;

        a{
            position:relative;
            padding:0 20px;
            font-size:30px;
            font-weight:bold;
            color:#cacaca;
            color:#ff1b6d;
            
            &::after{
                content:'';
                position:absolute;
                display:block;
                bottom:-5px;
                left:20px;
                width: 60px;
                height:2px;
                background-color:#ff1b6d;
            }
        }
`

export const FaqContsWrap = styled.div`
    border-top:1px solid #cacaca;
    margin-bottom:55px;
`
export const FaqContsInner = styled.div`
    padding:30px 50px;
`

export const FaqListWrap = styled.ul`
    margin:0;
    padding:0;
    width:100%;
`
export const FaqLlist = styled.li`
    position:relative;
    margin-bottom:50px;
    padding:0;
    list-style:none;

    &::after{
        content:'';
        position:absolute;
        top:10px;
        right:0;
        width:60px;
        height:60px;
        background-image:url('/images/ico-arrow-bottom.png');
    }
`
export const FaqListNum = styled.span`
    display:block;
    margin-bottom:14px;
    padding:0;
    font-size:18px;
    color:#adadad;
`
export const FaqListTitle = styled.h4`
    margin:0;
    padding:0;
    font-size:24px;
    font-weight:500;
    color:#444;
`

export const FaqFooter =styled.div`
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    max-height:96px;
    border-top:1px solid #dcdcdc;
`

export const FaqFooterMenuWrap = styled.ul`

    display:flex;
    flex-wrap:wrap;    
    align-items:center;
    padding:0 66px;
    margin:0;
`

export const FaqFooterMenu = styled.li`
    flex:1;
    list-style:none;
    text-align:center;
    margin-top:-9px;

`
export const MenuBtnWrap =styled.figure`
    margin:0;
    padding:0;

    figcaption{
        font-size:16px;
        color:#adadad;
    }
`

export const MenuBtnWrapActive = styled.figure`

    figcaption{
        font-size:16px;
        font-weight:bold;
        color:#ff1b6d;
    }

`

export const MenuIco = styled.p`
    margin:0;
    padding:0;
`