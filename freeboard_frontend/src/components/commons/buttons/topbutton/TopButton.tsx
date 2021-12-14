import useScrollToggle from "../../hooks/scrollToTop";
import styled from "@emotion/styled";
import { ArrowCircleUp, AngleUp } from "@emotion-icons/fa-solid"
const TopButton = styled.button`
    position: fixed;
    right: 20px;
    bottom: 80px;
    width: 60px;
    height: 60px;
    background-color:#d9bd88;
    transition:.3s;
    opacity:1;
    font-size:12px;
    color:#fff;
    
`
const TopButtonIco = styled(AngleUp)`
    width:50%;
    height:50%;
    color:#fff;
`

function Topbutton(){

    const scrollFlag = useScrollToggle(false);
    const moveToTop = () => (document.documentElement.scrollTop = 0);

    return (
    scrollFlag ? <TopButton onClick={moveToTop}><TopButtonIco /><br/>Top</TopButton> : <TopButton style={{opacity : "0", transition: ".3s"}}></TopButton>
    )
    }
 export default Topbutton