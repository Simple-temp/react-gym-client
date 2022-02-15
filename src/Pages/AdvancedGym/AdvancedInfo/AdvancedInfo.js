import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./AdvancedInfo.css"
import c from "../../../img/c.png"
import defaul from "../../../img/z3.jpg"

const AdvancedInfo = () => {

    const { key } = useParams()

    const [item, setItem] = useState({})

    useEffect(() => {
        fetch(`http://localhost:4000/selcetedgym/${key}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
                console.log(data)
            })
    }, [])


    return (
        <div className='advancedinfo'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="left-side">
                            <img src={defaul} alt="" className='img-fluid w-100 mt-5' style={{height:"350px"}} />
                            <h2 className='text-uppercase py-3'>{key}</h2>
                            <p>{item.des}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="right-side">
                            <h3 className='my-5'><span>class</span>schedule</h3>
                            <div className="date">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="date-box">
                                            <span>Monday</span>
                                            <p>8:00 AM t0 9:00 AM</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="date-box">
                                            <span>Tuesday</span>
                                            <p>8:00 AM t0 9:00 AM</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="date-box">
                                            <span>Wednesday</span>
                                            <p>8:00 AM t0 9:00 AM</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="date-box">
                                            <span>Thursday</span>
                                            <p>8:00 AM t0 9:00 AM</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="date-box">
                                            <span>Friday</span>
                                            <p>8:00 AM t0 9:00 AM</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="date-box">
                                            <span>Saturday</span>
                                            <p>8:00 AM t0 9:00 AM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="check-box">
                            <ul className='text-capitalize'>
                                <li><img src={c} className="c-img" alt="" />having slimmer shapely thighs</li>
                                <li><img src={c} className="c-img" alt="" />getting stronger body</li>
                                <li><img src={c} className="c-img" alt="" />increased metabolism</li>
                                <li><img src={c} className="c-img" alt="" />increased muscular endurance</li>
                                <li><img src={c} className="c-img" alt="" />gmaximum result in less time</li>
                                <li><img src={c} className="c-img" alt="" />firm hips and tummy</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 join">
                        <Link to="/pricing" className='join-btn'><button className='custom-btn'>join us</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default AdvancedInfo;