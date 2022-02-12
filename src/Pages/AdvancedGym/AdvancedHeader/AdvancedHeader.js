import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import AdvancedMain from '../AdvancedMain/AdvancedMain';

const AdvancedHeader = () => {
    return (
        <header>
            <Navbar></Navbar>
            <AdvancedMain></AdvancedMain>
        </header>
    );
};

export default AdvancedHeader;