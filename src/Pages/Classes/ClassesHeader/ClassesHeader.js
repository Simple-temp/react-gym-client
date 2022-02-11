import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import ClassesHeaderMain from '../ClassesHeaderMain/ClassesHeaderMain';

const ClassesHeader = () => {
    return (
        <header>
            <Navbar></Navbar>
            <ClassesHeaderMain></ClassesHeaderMain>
        </header>
    );
};

export default ClassesHeader;