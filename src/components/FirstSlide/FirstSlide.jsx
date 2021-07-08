import React from 'react';
import './style.css'
import logo from '../../assets/logo.svg';
import Layout from '../Layout/Layout';

const FirstSlide = () => {
    return (
        <div className="container">
            <Layout />
            <div className="header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="header__text">
                    React Profiler
                </h1>
            </div>
            <div className="footer shine">
                Projekt i wykonanie: Patryk Budnicki
            </div>
        </div>
    )
}

export default FirstSlide