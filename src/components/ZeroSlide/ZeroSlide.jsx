import React, { useState } from 'react';
import styled from 'styled-components';
import intalacja from '../../assets/intalacja.mp4';

const Wrapper = styled.div`
    z-index: 2;
    color: white;
    width: 100%;
    margin: 2em;
    margin-top: 1em;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const Video = styled.video`
    transition: .4s;
    width: ${props => props.isActive ? '75%' : '0'};
    height: 60%;
    margin-top: 4em;
`

const Header = styled.h1`
    cursor: pointer;
    position: fixed;
    top: ${props => props.isActive ? '5px' : '40%'};
    left: ${props => props.isActive ? '10px' : '50%'};
    transform: ${props => props.isActive ? 'translate(0, 0)' : 'translate(-50%, -50%)'};
    transition: .5s;
`
const ZeroSlide = () => {
    const [show, setShow] = useState(false);
    return (
        <Wrapper>
        <Header onClick={() => setShow(show => !show)} isActive={show}>Instalacja React DevTools</Header>
        <Video controls isActive={show}>
            <source src={intalacja} type="video/mp4" />
            Your browser does not support the video tag.
        </Video>
        </Wrapper>
    )
}

export default ZeroSlide