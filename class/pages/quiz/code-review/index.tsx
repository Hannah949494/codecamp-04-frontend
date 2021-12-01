import styled from '@emotion/styled'
import { keyframes} from '@emotion/react'

const BallBounce = keyframes`
0%,
100% {
  transform: translateX(-50%) scale(1.5, 0.5);
}
20% {
  transform: translateX(-50%) scaleY(1.2);
}
40%,
80% {
   transform: translateX(-50%) translateY(-14rem);
 }
 70% {
   transform: translateX(-50%) translateY(-15rem);
 }
 90% {
   transform: translateX(-50%) translateY(0);
 }
`
const ShadowBouncing =keyframes`
    0%,
    100% {
      transform: translateX(-50%) scale(2, 0.8);
    }
    20% {
      transform: translateX(-50%) scale(1.2, 0.8);
    }
    40%,
    80% {
      transform: translateX(-50%) scale(0.5, 0.2);
    }
    70% {
      transform: translateX(-50%) scale(0.5, 0.15);
    }
    90% {
      transform: translateX(-50%) scale(1.5, 0.6);
    }
`

const CardLayout = styled.div`
    position:relative;
    width:500px;
    height:500px;
    margin:0 auto;
    background:#f3f4a3;

    ::before {
        content: '';
        position: absolute;
        bottom: 2rem;
        left:50%;
        width: 2rem;
        height: 0.2rem;
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 1rem;
        transform:translateX(-50%);
        animation: ${ShadowBouncing} 1.2s ease-in infinite;
      }

`



const Ball = styled.p`
    position: absolute;
    width: 5rem;
    height: 5rem;
    left:50%;
    bottom: 2.1rem;
    margin-bottom:0;
    transform-origin: bottom;
    background-color: #fff;
    border-radius: 50%;
    animation: ${BallBounce} 1.2s ease-in infinite;
    
`


export default function CodeReviewPage() {
    
    return(
        <>
            <CardLayout>
                <Ball></Ball>
            </CardLayout>
        </>
    )
    
}