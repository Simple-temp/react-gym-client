import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import PricingHeader from '../PricingHeader/PricingHeader';
import PricingInfo from '../PricingInfo/PricingInfo';

const Pricing = () => {
    return (
        <div>
            <PricingHeader></PricingHeader>
            <PricingInfo></PricingInfo>
            <Footer></Footer>
        </div>
    );
};

export default Pricing;