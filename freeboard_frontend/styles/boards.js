import styled from '@emotion/styled'

export const BoardContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 100px auto 100px;
    padding:80px 102px;
    background: #fff;
    box-shadow: 0px 4px 20px rgba(0,0,0,0.2);

`

export const BoardTitleSection = styled.div`
    width:100%;
    padding-bottom:80px;
    text-align:center;

`

export const BoardTitle = styled.h1`
    display:block;
    font-size: 2.25rem;

`

export const InputSection = styled.div`
    width:100%;
    margin-bottom:40px;
`

export const HalfTypeWrap = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin:0 -12px 40px;
`
export const HalfType = styled.div`
    width:50%;
    padding:0 12px;
`


export const TextInput = styled.input`
    width:100%;
    height: 52px;
    margin-top:16px;
    border:1px solid #bdbdbd;
    text-indent:16px;

    &::placeholder{
        color:#bdbdbd;
    }
`

export const BoardContentsWrap = styled.div`
    width:100%;
    height:480px;
`
export const BoardContents = styled.textarea`
    display:block;
    width:100%;
    height: calc(100% - 32px);
    margin-top:16px;
    padding:16px;
    border:1px solid #bdbdbd;
    text-align:left;
    line-height:1.5;
    white-space:pre-line;
    words-break:break-all;

    &::placeholder{
        color:#bdbdbd;
    }


`



export const BoardLabel = styled.label`
    font-size:1rem;
    margin-bottom:16px;
`

export const ColorPoint = styled.span`
    color:#ffd600;
`

export const SearchPostalCode = styled.p`
    display:block;
    width:100%;
    margin:0;
    padding-top:16px;

`

export const SearchPostalcodeBtn = styled.a`
    display:inline-block;
    padding:16px;
    background:#000;
    color:#fff;
    font-size:16px;
    font-weight:500;
`

export const SearchPostalcodeInput = styled.input`
    display:inline-block;
    width:77px;
    height:52px;
    margin-right:16px;
    text-align:center;
    border:1px solid #dbdbdb;

    &::placeholder{
        color:#bdbdbd;
    }
`

export const ImageBoxWrap = styled.ul`
    display:flex;
    flex-wrap:wrap;
    padding: 0;
    
`

export const ImageBoxList = styled.li`
    display:block;
    width:78px;
    height:78px;
    margin-right:24px;
    list-style:none;

`
export const ImageBox = styled.p`
    position:relative;
    display:block;
    width:100%;
    height:100%;
    background:#bdbdbd;
    cursor:pointer;

    &::before{
        content:'+';
        position:absolute;
        top:7px;
        left:28px;
        font-size:32px;
        color:#4f4f4f;
    }

    &::after{
        content:'Upload';
        position:absolute;
        bottom:18px;
        left:20px;
        font-size:12px;
        color:#4f4f4f;

    }

`
export const MainTypeRadioWrap = styled.p`
    

`

export const MainTypeRadiolist = styled.span`
    position:relative;
    display:inline-block;
    width:80px;
    margin-right:20px;
`
export const MainTypeRadioLabel = styled.label`
    

`


export const MainTypeRadio = styled.input`
    display:none;

    + label{
            content:'';
            display:block;
            width:20px;
            height:20px;
            border-radius:50%;
            border:1px solid #ddd;
            background-color:#fff;
            cursor:pointer;

            &::after{
                content:'';
                position:absolute;
                top:4px;
                left:4px;
                width:12px;
                height:12px;
                background:#ffd600;
                border-radius:50%;
                opacity:0;
            }

            span{
                position:absolute;
                top:1px;
                left:33px;
            }
        
    }

    :checked{
        
        + label{
            border-color:#ffd600;

            &::after{
                opacity:1;
            }
        }

    }
`

export const SubmitBtnWrap = styled.p`
    display:block;
    width:100%;
    text-align:center;
    margin-top:80px;
`

export const SubmitBtn = styled.a`
    display:inline-block;
    padding:14px 60px;
    background:#ffd600;
    text-align:center;
    font-size:16px;
    
`

export const Errormessage = styled.span`
    display:block;
    padding:5px 0;
    font-size:14px;
    font-weight:400;
    color:red;
`