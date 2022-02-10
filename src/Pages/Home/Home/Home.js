import React from 'react';
import Header from '../../Shared/Header/Header';
import About from '../About/About';
import ChooseUs from '../ChooseUs/ChooseUs';
import Gymtype from '../Gymtype/Gymtype';
import Traning from '../Traning/Traning';
import "./Home.css"

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Gymtype></Gymtype>
            <About></About>
            <Traning></Traning>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;