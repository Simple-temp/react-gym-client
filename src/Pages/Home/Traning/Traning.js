import React from 'react';
import "./Traning.css"
import t1 from "../../../img/h1.png"
import t2 from "../../../img/h2.jpg"

const Traning = () => {

    const training = [
        {
            img: t1,
            title: "yoga training session"
        },
        {
            img: t2,
            title: "cardio training session"
        },
    ]

    return (
        <section className='traning'>
            <h3 className='text-center my-5'>Traning <span>programs</span></h3>
            <div className="container w-75 mx-auto">
                <div className="row">
                    {
                        training.map(train => <ShowTraning train={train}></ShowTraning>)
                    }
                </div>
            </div>
        </section>
    );
};

function ShowTraning({ train }) {
    return (
        <>
            <div className="col-lg-6 col-md-6 col-12">
                <div className="train-box">
                    <img src={train.img} alt="" className='img-fluid w-100' />
                    <div className="p d-flex align-items-center">
                        <p>{train.title}</p><i class="fa-solid fa-arrow-right-long"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Traning;