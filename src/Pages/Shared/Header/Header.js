import React from 'react';
import "./Header.css"
import Main from '../../Home/Main/Main';
import Navbar from '../../Home/Navbar/Navbar';
import Gymtype from '../../Home/Gymtype/Gymtype';

const Header = () => {
    return (
        <header>
            <Navbar></Navbar>
            <Main></Main>
        </header>
    );
};

export default Header;