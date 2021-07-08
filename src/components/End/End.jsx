import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../Layout/Layout';

const Wrapper = styled.h1`
    z-index: 3;
    color: white;
    width: 100%;
    margin: 2em;
`

const Container = styled.div`
    text-align: center;
`

const Header = styled.div`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
}`

const Text = styled.h1`
    color: #61DAFB;
    z-index: 2;
`

const Source = styled.p`
    color: #61DAFB;
    z-index: 2;
    font-size: 1em;
`

const End = () => {
    return(
        <Container>
            <Layout />
            <Header>
                <Text>
                    KONIEC
                </Text>
                <Source>
                    ŹRÓDŁA:
                    <p>
                        https://reactjs.org/
                    </p>
                    <p>
                        https://blog.bitsrc.io/profiling-performance-of-react-apps-using-react-profiler-d02d77f3c96a
                    </p>
                </Source>
            </Header>
        </Container>
    )
}

export default End