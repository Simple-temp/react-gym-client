import React from 'react';
import icon1 from "../../../img/icon-1.png"
import icon2 from "../../../img/icon-2.png"
import icon3 from "../../../img/icon-3.png"
import a1 from "../../../img/a1.jpg";
import a2 from "../../../img/a2.jpg";
import a3 from "../../../img/a3.jpg";
import "./Gymtype.css"

const Gymtype = () => {

    const Gymtype = [
        {
            icon: icon1,
            bg: a1,
            title: "progression",
            color: "white",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil repudiandae ea dicta exercitationem repellendus."
        },
        {
            icon: icon2,
            bg: a2,
            title: "workout",
            color: "yellow",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil repudiandae ea dicta exercitationem repellendus."
        },
        {
            icon: icon3,
            bg: a3,
            title: "nutrition",
            color: "white",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil repudiandae ea dicta exercitationem repellendus."
        },
    ]

    return (
        <section className='gym'>
            <div className="container mt-5">
                <div className="row">
                    {
                        Gymtype.map(gym => <Gymlist gym={gym}></Gymlist>)
                    }
                </div>
            </div>
        </section>
    );
};

function Gymlist({ gym }) {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="gymtype-box">
                    <img src={gym.bg} alt="" className='img-fluid w-100' style={{ height: "400px" }} />
                    <div className="g-box">
                        <img src={gym.icon} alt="" />
                        <h5 className={`${gym.color}`}>{gym.title}</h5>
                        <p>{gym.des}</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Gymtype;