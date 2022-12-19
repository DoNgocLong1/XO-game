import styled from "styled-components";
import O from '../../assets/images/Opng.png'
import X from '../../assets/images/Xpng.png'
export const Container = styled.table`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
    position:relative;
`

export const Square = styled.div`
    width: 25px;
    height: 25px;
    background-image: url(
        ${props => {
            if(props.isTick) {
                return  props.isTick.value === 1 ? O : X
            }
            return ''
        }}
    );
    background-size: 25px 25px;
    background-color: #fff;
    opacity: 0.65;
    :hover{
    opacity: 1;
    }
`

export const Layout = styled.div`
    display: ${props => props.isWinner ? 'block' : 'none'};
    position:absolute;
    z-index: 99;
    width:100%;
    height:100vh;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background-color: #000;
    opacity:0.7;
`


export const PopDown = styled.div`
    display: ${props => props.isWinner ? 'flex' : 'none'};
    position:absolute;
    z-index: 100;
    top: 200px;
    left: 50%;
    transform:translateX(-50%);
    width: 600px;
    height: 300PX;
    background-color: #fff;
    justify-content: center;
    align-items: center;
`

export const Img = styled.img`
    width: 50px;
    height: 50px;
    
`


