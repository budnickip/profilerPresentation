import React, { useState } from 'react';
import styled from 'styled-components';
import callback from '../../assets/callback.png';
import useMemo from '../../assets/useMemo.png';
import useMemo2 from '../../assets/useMemo2.png';

const Wrapper = styled.div`
    z-index: 2;
    color: white;
    width: 100%;
    margin: 2em;
`
const Header = styled.h1`
    cursor: pointer;
`

const Headers = styled.div`
    transform: ${props => props.isActive ? 'translateX(0) scale(1)' : 'translateX(-1000px) scale(0)'};
    transition: .5s;
    margin-left: 16px;
    h2{
        cursor: pointer;
    }
`

const Content = styled.div`
    transition: .5s;
    max-height: ${props => props.isActive ? '1000px' : '0px'};
    overflow: hidden;
    display: flex;
    align-items: center;
`

const ParagraphWithMargin = styled.p`
    margin-left: 1.5em;
`
const Image = styled.img`
    margin-left: 1.5em;
    margin-right: 1.5em;
    max-width: 450px;
`


const Optimization = () => {
    const [showSubTitles, setShowSubTitles] = useState(false);
    const [activeSubject, setActiveSubject] = useState('');
    return (
        <Wrapper>
            <Header onClick={() => setShowSubTitles(showSubTitles => !showSubTitles)}>Optymalizacja</Header>
            <Headers isActive={showSubTitles}>
                <h2 onClick={() => setActiveSubject('render')}>Kiedy komponent jest renderowany?</h2>
                <Content isActive={activeSubject === 'render'}>
                    <div>
                    <ParagraphWithMargin>
                    - kiedy zmienił się jego stan
                    </ParagraphWithMargin>
                    <ParagraphWithMargin>
                    - propsy które otrzymuje się zmieniły
                    </ParagraphWithMargin>
                    <ParagraphWithMargin>
                    - jego rodzic został ponownie wyrenderowany
                    </ParagraphWithMargin>
                    <ParagraphWithMargin>
                    - przy pierwszym renderowaniu widoku danego komponentu
                    </ParagraphWithMargin>
                    </div>

                </Content>
                <h2 onClick={() => setActiveSubject('memoization')}>Memoization</h2>
                <Content isActive={activeSubject === 'memoization'}>
                    <div>
                    <p>
                        Technika optymalizacji w programowaniu, w której program zapamiętuje w cache jakie dane wejściowe podaliśmy do funkcji, dzięki temu kiedy podajemy te same dane do naszej funkcji, program nie musi wykonywać skomplikowanych obliczeń jeśli parametry wejściowe się nie zmienią.
                    </p>
                    <ParagraphWithMargin>
                    - w Reactcie możemy memoizować komponenty, funkcje lub po prostu zwykłe równania.
                    </ParagraphWithMargin>
                    <ParagraphWithMargin>
                    - kiedy memoizujemy komponenty, wyrenderują się one ponownie tylko jeśli zmieni się ich stan lub propsy które otrzymują od rodzica.
                    </ParagraphWithMargin>
                    <ParagraphWithMargin>
                    - trzeba jednak pamiętać, że nie wszystko warto memoizować ponieważ nasz program musi gdzieś trzymać te dane które zostały zmemoizowane, przez co zabieramy pamięć cache naszej aplikacji.
                    </ParagraphWithMargin>
                    </div>
                </Content>
                <h2 onClick={() => setActiveSubject('callback')}>useCallback</h2>
                <Content isActive={activeSubject === 'callback'}>
                    <div>
                    <p>
                    Pozwala nam memoizować funkcje zwrotne. Przykład do omówienia: 
                    </p>
                    <Image src={callback} alt="callback"/>
                    </div>
                </Content>
                <h2 onClick={() => setActiveSubject('usememo')}>useMemo</h2>
                <Content isActive={activeSubject === 'usememo'}>
                    <div>
                    <p>
                        pozwala nam zmemoizować skomplikowane obliczenia.
                    </p>
                    <Image src={useMemo} alt='useMemo'/>
                    </div>
                    <div>
                    <p>
                        Co więcej, useMemo pozwala także pominąć kosztowne renderowania komponentów potomnych:
                    </p>
                    <Image src={useMemo2} alt='useMemo' />
                    </div>
                </Content>
            </Headers>
        </Wrapper>
    )
}

export default Optimization