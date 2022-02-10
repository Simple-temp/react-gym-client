import React from 'react';
import "./ChooseUs.css"
import c1 from "../../../img/c1.png"
import c2 from "../../../img/c2.png"
import c3 from "../../../img/c3.png"

const ChooseUs = () => {

    const choose = [
        {
            img : c1,
            title : "free fitness training",
            des : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis laudantium dolorem eligendi aliquam libero, laborum aut doloribus quasi nostrum asperiores?"
        },
        {
            img : c2,
            title : "tons of cardio & strength",
            des : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis laudantium dolorem eligendi aliquam libero, laborum aut doloribus quasi nostrum asperiores?"
        },
        {
            img : c3,
            title : "no commitment membership",
            des : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis laudantium dolorem eligendi aliquam libero, laborum aut doloribus quasi nostrum asperiores?"
        },
    ]

    return (
        <section className="choose">
            <div className="container">
                <h3 className='text-center my-5'><span>Why</span>Choose us</h3>
                <div className="row">
                    {
                        choose.map( chooseus => <ShowChoose chooseus={chooseus}></ShowChoose> )
                    }
                </div>
            </div>
        </section>
    );
};

function ShowChoose({chooseus}){
    return(
        <>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="choose-box text-center">
                    <img src={chooseus.img} alt="" className='img-fluid' />
                    <h5>{chooseus.title}</h5>
                    <p>{chooseus.des}</p>
                </div>
            </div>
        </>
    )
}

export default ChooseUs;