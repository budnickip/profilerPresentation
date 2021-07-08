import React, { useState } from 'react';
import styled from 'styled-components';
import zle1 from '../../assets/gfuserchat/1zle.png'
import dobre1 from '../../assets/gfuserchat/1dobre.png'
import zle2 from '../../assets/gfuserchat/2zle.png'
import dobre2 from '../../assets/gfuserchat/2dobre.png'
import zle3 from '../../assets/gfuserchat/3zle.png'
import dobre3 from '../../assets/gfuserchat/3dobre.png'
import {AiFillLeftCircle, AiFillRightCircle} from 'react-icons/ai'


const Wrapper = styled.div`
    z-index: 2;
    color: white;
    width: 100%;
    margin: 2em;
`

const ImagesWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const ImageWrapper = styled.div`
    transition: .5s;
    overflow: hidden;
    /* max-width: ${props => props.isActive ? '80%' : '0'}; */
    max-width: 80%;
    max-height: ${props => props.isActive ? '300px' : '0'};
`

const Image = styled.img`
    transition: .5s;
    max-width: 100%;
  //transition: transform 1s, filter .5s ease-out;
    &:hover{
        transform: scale(1.3) translate(-150px, 0);
    }
`

const LeftButton = styled(AiFillLeftCircle)`
    position: fixed;
    left: 15px;
    top: 40%;
    fill: white;
    font-size: 2em;
    cursor: pointer;
    transition: .3s;
    &:hover{
        fill: #dcdde1;
    }
`

const RightButton = styled(AiFillRightCircle)`
    position: fixed;
    right: 15px;
    top: 40%;
    fill: white;
    font-size: 2em;
    cursor: pointer;
    transition: .3s;
    &:hover{
        fill: #dcdde1;
    }
`

const GfOperator = () => {
    const [slide, setSlide] = useState(0);
    const slidersNumber = 2;
    const nextSlide = () => {
        if (slide < slidersNumber) {
            setSlide(slide => ++slide)
        } else{
            setSlide(0);
        }
    }
    const previousSlide = () => {
        if (slide > 0) {
            setSlide(slide => --slide)
        } else{
            setSlide(slidersNumber);
        }
    }
    return(
        <Wrapper>
            <h1>GoFlirt - chat użytkownika</h1>
            <LeftButton onClick={previousSlide}/>
            <RightButton onClick={nextSlide}/>
            <ImagesWrapper>
                <ImageWrapper isActive={slide === 0}>
                    <Image src={zle1} alt="1" />
                </ImageWrapper>
                <ImageWrapper isActive={slide === 0}>
                    <Image src={dobre1} alt="1" />
                </ImageWrapper>
                <ImageWrapper isActive={slide === 1}>
                    <Image src={zle2} alt="1" />
                </ImageWrapper>
                <ImageWrapper isActive={slide === 1}>
                    <Image src={dobre2} alt="1" />
                </ImageWrapper>
                <ImageWrapper isActive={slide === 2}>
                    <Image src={zle3} alt="1" />
                </ImageWrapper>
                <ImageWrapper isActive={slide === 2}>
                    <Image src={dobre3} alt="1" />
                </ImageWrapper>
            </ImagesWrapper>
        </Wrapper>
    )
}

export default GfOperator