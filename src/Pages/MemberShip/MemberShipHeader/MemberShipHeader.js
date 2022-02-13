import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import MemberShipMain from '../MemberShipMain/MemberShipMain';

const MemberShipHeader = () => {
    return (
        <header>
            <Navbar></Navbar>
            <MemberShipMain></MemberShipMain>
        </header>
    );
};

export default MemberShipHeader;