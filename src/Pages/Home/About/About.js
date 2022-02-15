import React from 'react';
import about from "../../../img/about.jpg"
import "./About.css"

const About = () => {
    return (
        <section className='about'>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 img-box d-flex justify-content-center">
                        <img src={about} alt="" className="img-fluid w-75" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="a-box">
                            <h2>about us</h2>
                            <h3> <span>We are hire to dream!</span> <br /> our team is here surve you. </h3>
                            <p className='mt-3 w-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquam totam temporibus voluptatibus corrupti quae amet inventore libero nostrum et voluptates labore, distinctio, ipsa non cumque rem dolore ex voluptatem.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;