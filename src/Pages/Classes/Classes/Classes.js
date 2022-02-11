import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import ClassesHeader from '../ClassesHeader/ClassesHeader';
import ClassesType from '../ClassesType/ClassesType';

const Classes = () => {
    return (
        <div>
            <ClassesHeader></ClassesHeader>
            <ClassesType></ClassesType>
            <Footer></Footer>
        </div>
    );
};

export default Classes;