import React, { useState } from 'react';
import styled from 'styled-components';
import profilerComponent from '../../assets/profilerComponent.png';
import profilerComponentCallback from '../../assets/profilerComponentCallback.png';
import profilerProfiler from '../../assets/profilerProfiler.png';
import flameChart from '../../assets/flameChart.png';
import rankedChar from '../../assets/rankedChar.png';
import { BsCircleFill } from 'react-icons/bs';
import { IoReload } from 'react-icons/io5';
import { MdFileUpload, MdFileDownload, MdSettings } from 'react-icons/md';
import { HiFire } from 'react-icons/hi';
import { BsBarChartFill } from 'react-icons/bs';
import { VscCircleSlash } from 'react-icons/vsc';

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

const ImageWithContent = styled.div`
    display: flex;
    align-items: center;
    transition: 1s;
    max-height: ${props => props.isActive ? '1000px' : '0px'};
    overflow: hidden;
`
const ProfilerDescription = styled.div`
    display: flex;
    align-items: center;
    transition: 1s;
    max-height: ${props => props.isActive ? '1000px' : '0px'};
    overflow: hidden;
`

const TextWrapper = styled.div`
    margin-left: 2em;
    max-width: 940px;
`

const ParagraphAkaList = styled.p`
    margin-left: .5em;
`
const ParagraphAkaPointer = styled.p`
    margin-left: .5em;
    cursor: pointer;
`

const ParagraphWithMargin = styled.p`
    margin-left: 1.5em;
`

const Chart = styled(BsBarChartFill)`
    transform: rotate(90deg) scaleX(-1);
`
const TextWithMargin = styled.span`
    margin-left: 1em;
`

const ImageMain = styled.img`
    transition: .5s;
    max-width: ${props => props.isActive ? '350px' : '0'};
`

const ImageFlame = styled.img`
    transition: .5s;
    max-width: ${props => props.isActive ? '350px' : '0'};
`

const ImageRanked = styled.img`
    transition: .5s;
    max-width: ${props => props.isActive ? '350px' : '0'};

`

const ThirthSlide = () => {
    const [showSubTitles, setShowSubTitles] = useState(false);
    const [showKomponent, setShowKomponent] = useState(false);
    const [showProfiler, setShowProfiler] = useState(false);
    const [activePhoto, setActivePhoto] = useState('main');
    return (
        <Wrapper>
            <Header onClick={() => setShowSubTitles(showSubTitles => !showSubTitles)}>
                Dwa sposoby korzystania z Profilera:
            </Header>
            <Headers isActive={showSubTitles}>
                <h2 onClick={() => setShowKomponent(showKomponent => !showKomponent)}>
                - za pomocą komponentu Profiler
                </h2>
                <ImageWithContent isActive={showKomponent}>
                    <img src={profilerComponent} alt="Profiler"/>
                    <TextWrapper>
                        <h3>Komponent Profiler przyjmuje dwa parametry:</h3>
                        <ParagraphAkaList>1. <strong>Id</strong> – unikalną wartość dla komponentu który chcemy przetestować. Jest to bardzo przydatne kiedy chcemy przetestować kilka komponentów na raz</ParagraphAkaList>
                        <ParagraphAkaList>2. <strong>onRender</strong> – funkcja zwrotna która otrzymuje dane jako argumenty, możemy za jej pomocą wyświetlić informacje które zarejestrował dla nas Profiler. Przyjmuje następujące argumenty:</ParagraphAkaList>
                        <ParagraphWithMargin>1. <strong>Id</strong>: string – id którym nazwaliśmy nasz komponent</ParagraphWithMargin>
                        <ParagraphWithMargin>2. <strong>phase</strong> – może być „mount” lub „update” – mówi nam o tym czy komponent jest renderowany po raz pierwszy, czy też został ponownie wyrenderowany przez zaktualizowanie stanu, propsów lub przez zmianę wywołaną hookami</ParagraphWithMargin>
                        <ParagraphWithMargin>3. <strong>actualDuration</strong>: number – czas podany w milisekundach który aplikacja potrzebowała na wyrenderowanie komponentu</ParagraphWithMargin>
                        <ParagraphWithMargin>4. <strong>baseDuration</strong>: number – wyestymowany czas w milisekundach który powinien zając render aplikacji, jeśli nie zostałby wykorzystany hook useMemo lub React.memo – różnica między baseDuration a actualDuration powinna powiedzieć programiście jak bardzo użyteczne są jego optymalizacje w kodzie. </ParagraphWithMargin>
                        <ParagraphWithMargin>5. <strong>startTime:</strong> number – czas kiedy React zaczął renderować aktualne zmiany</ParagraphWithMargin>
                        <ParagraphWithMargin>6. <strong>commitTime</strong>: number – czas kiedy React zakończył aktualizować zmiany</ParagraphWithMargin>
                        <ParagraphWithMargin>7. <strong>Interactions</strong>: Set – tablica unikalnych obiektów, które prezentują iteracje które zostały zarejestrowane</ParagraphWithMargin>
                        <img src={profilerComponentCallback} alt="Profiler Callback" />
                    </TextWrapper>
                </ImageWithContent>
                <h2 onClick={() => setShowProfiler(showProfiler => !showProfiler)}>
                - z wykorzystaniem React Devtools
                </h2>
                <ProfilerDescription isActive={showProfiler}>
                    <ImageMain src={profilerProfiler} alt="Profiler" isActive={activePhoto === 'main'}/>
                    <ImageMain src={flameChart} alt="Flame Chart" isActive={activePhoto === 'flame'} />
                    <ImageMain src={rankedChar} alt="Ranked Chart" isActive={activePhoto === 'ranked'}/>
                    <div>
                        <TextWrapper>
                            <ParagraphAkaList>
                                <BsCircleFill />
                                <TextWithMargin>Rozpoczęcie monitorowania</TextWithMargin>
                            </ParagraphAkaList>
                            <ParagraphAkaList>
                                <IoReload /> 
                                <TextWithMargin>Przeładowanie strony i rozpoczęcie monitorowania</TextWithMargin>
                            </ParagraphAkaList>
                            <ParagraphAkaList>
                                <VscCircleSlash />
                                <TextWithMargin>Wyczyszczenie rezultatów</TextWithMargin>
                            </ParagraphAkaList>
                            <ParagraphAkaList>
                                <MdFileUpload />
                                <TextWithMargin>
                                    W tym miejscu możemy wgrać nasze stare dane wygenerowane przez profiler
                                </TextWithMargin>
                            </ParagraphAkaList>
                            <ParagraphAkaList>
                                <MdFileDownload />
                                <TextWithMargin>
                                    Tutaj możemy pobrać nasz wynik
                                </TextWithMargin>
                            </ParagraphAkaList>
                            <ParagraphAkaPointer onClick={() => setActivePhoto('flame')}>
                                <HiFire />
                                <TextWithMargin>
                                    Widok który reprezentuje stan naszej aplikacji dla każdego cyklu jej życia. Każdy bar
                                    reprezentuje komponent, a długość paska oznacza długość renderowania. 
                                    Klikając na wybrany bar
                                    dostajemy szczegółowe informacje o renderowaniu się danego komponentu.
                                    <br />
                                    Kolory naszych barów oznaczają:
                                    <br />
                                    - żółty: komponent renderował się długo,
                                    <br />
                                    - zielony: komponent renderował się szybko,
                                    <br />
                                    - szary: komponent nie renderował się.
                                </TextWithMargin>
                            </ParagraphAkaPointer>
                            <ParagraphAkaPointer onClick={() => setActivePhoto('ranked')} >
                                <Chart />
                                <TextWithMargin>
                                    Kliknięcie tej ikony spowoduje zmianę widoku naszych barów. Teraz będą one posortowane w kolejności
                                    od tych które najdłużej się renderowały do tych które renderowały się najszybciej.
                                </TextWithMargin>
                            </ParagraphAkaPointer>
                            <ParagraphAkaPointer onClick={() => setActivePhoto('main')}>
                                <MdSettings />
                                <TextWithMargin>
                                    Ikona ustawień dodatkowych
                                </TextWithMargin>
                            </ParagraphAkaPointer>
                        </TextWrapper>
                    </div>
                </ProfilerDescription>
            </Headers>
        </Wrapper>
    )
}

export default ThirthSlide