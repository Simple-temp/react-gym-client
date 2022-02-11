import React, { useState } from 'react';
import "./Main.css"
import video from "../../../video/v.mp4"

const Main = () => {

    const [show, setShow] = useState(false)

    return (
        <div className='container main d-flex align-items-center'>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="main-box">
                        <h1>The best fitness <br /> studio in town </h1>
                        <p className='py-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus in id architecto aliquam consectetur ad doloremque natus asperiores explicabo voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, dignissimos!</p>
                        <button className='custom-btn mt-3'>join us</button>
                    </div>
                    <i class="fa-solid fa-xmark" onClick={()=>setShow(false)}></i>
                </div>
                <div className="col-lg-6 col-md-6 col-12 play">
                        <video className='w-100' controls autoplay>
                            <source src={video} type="video/mp4" />
                        </video> 
                </div>
            </div>
        </div>
    );
};

export default Main;