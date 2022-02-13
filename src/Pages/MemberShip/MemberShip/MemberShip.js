import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import MemberShipHeader from '../MemberShipHeader/MemberShipHeader';
import MemberShipInfo from '../MemberShipInfo/MemberShipInfo';

const MemberShip = () => {
    return (
        <div>
            <MemberShipHeader></MemberShipHeader>
            <MemberShipInfo></MemberShipInfo>
            <Footer></Footer>
        </div>
    );
};

export default MemberShip;