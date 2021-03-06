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
                - za pomoc?? komponentu Profiler
                </h2>
                <ImageWithContent isActive={showKomponent}>
                    <img src={profilerComponent} alt="Profiler"/>
                    <TextWrapper>
                        <h3>Komponent Profiler przyjmuje dwa parametry:</h3>
                        <ParagraphAkaList>1. <strong>Id</strong> ??? unikaln?? warto???? dla komponentu kt??ry chcemy przetestowa??. Jest to bardzo przydatne kiedy chcemy przetestowa?? kilka komponent??w na raz</ParagraphAkaList>
                        <ParagraphAkaList>2. <strong>onRender</strong> ??? funkcja zwrotna kt??ra otrzymuje dane jako argumenty, mo??emy za jej pomoc?? wy??wietli?? informacje kt??re zarejestrowa?? dla nas Profiler. Przyjmuje nast??puj??ce argumenty:</ParagraphAkaList>
                        <ParagraphWithMargin>1. <strong>Id</strong>: string ??? id kt??rym nazwali??my nasz komponent</ParagraphWithMargin>
                        <ParagraphWithMargin>2. <strong>phase</strong> ??? mo??e by?? ???mount??? lub ???update??? ??? m??wi nam o tym czy komponent jest renderowany po raz pierwszy, czy te?? zosta?? ponownie wyrenderowany przez zaktualizowanie stanu, props??w lub przez zmian?? wywo??an?? hookami</ParagraphWithMargin>
                        <ParagraphWithMargin>3. <strong>actualDuration</strong>: number ??? czas podany w milisekundach kt??ry aplikacja potrzebowa??a na wyrenderowanie komponentu</ParagraphWithMargin>
                        <ParagraphWithMargin>4. <strong>baseDuration</strong>: number ??? wyestymowany czas w milisekundach kt??ry powinien zaj??c render aplikacji, je??li nie zosta??by wykorzystany hook useMemo lub React.memo ??? r????nica mi??dzy baseDuration a actualDuration powinna powiedzie?? programi??cie jak bardzo u??yteczne s?? jego optymalizacje w kodzie. </ParagraphWithMargin>
                        <ParagraphWithMargin>5. <strong>startTime:</strong> number ??? czas kiedy React zacz???? renderowa?? aktualne zmiany</ParagraphWithMargin>
                        <ParagraphWithMargin>6. <strong>commitTime</strong>: number ??? czas kiedy React zako??czy?? aktualizowa?? zmiany</ParagraphWithMargin>
                        <ParagraphWithMargin>7. <strong>Interactions</strong>: Set ??? tablica unikalnych obiekt??w, kt??re prezentuj?? iteracje kt??re zosta??y zarejestrowane</ParagraphWithMargin>
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
                                <TextWithMargin>Rozpocz??cie monitorowania</TextWithMargin>
                            </ParagraphAkaList>
                            <ParagraphAkaList>
                                <IoReload /> 
                                <TextWithMargin>Prze??adowanie strony i rozpocz??cie monitorowania</TextWithMargin>
                            </ParagraphAkaList>
                            <ParagraphAkaList>
                                <VscCircleSlash />
                                <TextWithMargin>Wyczyszczenie rezultat??w</TextWithMargin>
                            </ParagraphAkaList>
                            <ParagraphAkaList>
                                <MdFileUpload />
                                <TextWithMargin>
                                    W tym miejscu mo??emy wgra?? nasze stare dane wygenerowane przez profiler
                                </TextWithMargin>
                            </ParagraphAkaList>
                            <ParagraphAkaList>
                                <MdFileDownload />
                                <TextWithMargin>
                                    Tutaj mo??emy pobra?? nasz wynik
                                </TextWithMargin>
                            </ParagraphAkaList>
                            <ParagraphAkaPointer onClick={() => setActivePhoto('flame')}>
                                <HiFire />
                                <TextWithMargin>
                                    Widok kt??ry reprezentuje stan naszej aplikacji dla ka??dego cyklu jej ??ycia. Ka??dy bar
                                    reprezentuje komponent, a d??ugo???? paska oznacza d??ugo???? renderowania. 
                                    Klikaj??c na wybrany bar
                                    dostajemy szczeg????owe informacje o renderowaniu si?? danego komponentu.
                                    <br />
                                    Kolory naszych bar??w oznaczaj??:
                                    <br />
                                    - ??????ty: komponent renderowa?? si?? d??ugo,
                                    <br />
                                    - zielony: komponent renderowa?? si?? szybko,
                                    <br />
                                    - szary: komponent nie renderowa?? si??.
                                </TextWithMargin>
                            </ParagraphAkaPointer>
                            <ParagraphAkaPointer onClick={() => setActivePhoto('ranked')} >
                                <Chart />
                                <TextWithMargin>
                                    Klikni??cie tej ikony spowoduje zmian?? widoku naszych bar??w. Teraz b??d?? one posortowane w kolejno??ci
                                    od tych kt??re najd??u??ej si?? renderowa??y do tych kt??re renderowa??y si?? najszybciej.
                                </TextWithMargin>
                            </ParagraphAkaPointer>
                            <ParagraphAkaPointer onClick={() => setActivePhoto('main')}>
                                <MdSettings />
                                <TextWithMargin>
                                    Ikona ustawie?? dodatkowych
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