import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import PricingMain from '../PricingMain/PricingMain';

const PricingHeader = () => {
    return (
        <header>
            <Navbar></Navbar>
            <PricingMain></PricingMain>
        </header>
    );
};

export default PricingHeader;