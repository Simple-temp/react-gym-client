import React from 'react';
import "./Main.css"

const Main = () => {
    return (
        <div className='container main d-flex align-items-center'>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="main-box">
                        <h1>The best fitness <br /> studio in town </h1>
                        <p className='py-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus in id architecto aliquam consectetur ad doloremque natus asperiores explicabo voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, dignissimos!</p>
                        <button className='custom-btn mt-3'>join us</button>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">

                </div>
            </div>
        </div>
    );
};

export default Main;