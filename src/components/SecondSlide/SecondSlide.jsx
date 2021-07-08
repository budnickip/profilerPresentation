import React, { useState } from 'react';
import './style.scss'
import styled from 'styled-components';

const Wrapper = styled.div`
    z-index: 2;
    color: white;
    width: 100%;
    margin: 2em;
`

const Header = styled.h1`
    cursor: pointer;
    color: white;
    position: fixed;
    top: ${props => props.isActive ? '20px' : '40%'};
    left: ${props => props.isActive ? '20px' : '50%'};
    transform: ${props => props.isActive ? 'translate(0, 0)' : 'translate(-50%, -50%)'};
    transition: .5s;
    font-size: 3.5em;
`

const Paragraph = styled.p`
    margin-top: 30px;
    color: white;
    transition: .5s;
    transform: ${props => props.isActive ? 'scale(1)' : 'scale(0)'};
    position: fixed;
    top: 200px;
    margin-left: 130px;
    margin-right: 450px;
    font-size: 1.5em;
`

const SecondSlide = () => {
    const [showAnswer, setShowAnswer] = useState(false);
    return(
        <Wrapper >
            <Header isActive={showAnswer} className="slideWrapper__header effect-underline" onClick={() => setShowAnswer(showAnswer => !showAnswer)}>Czym jest Profiler?</Header>
            <Paragraph isActive={showAnswer}>
            Jest to narzędzie służące do optymalizacji aplikacji napisanych w React. Pozwala ono na monitorowanie aplikacji, dzięki któremu otrzymujemy raport ile czasu zajęło renderowanie się danego komponentu oraz ile razy komponent został wyrenderowany podczas danej akcji. Z wygenerowanego raportu jesteśmy w stanie ocenić które komponenty ładują się zbyt długo oraz które niepotrzebnie zostały ponownie wyrenderowane.
            </Paragraph>
        </Wrapper>
    )
}

export default SecondSlide