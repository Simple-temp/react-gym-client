import React from 'react';
import { Link } from 'react-router-dom';
import "./PricingInfo.css"
import a1 from "../../../img/a1.jpg";
import a2 from "../../../img/a2.jpg";
import a3 from "../../../img/a3.jpg";

const PricingInfo = () => {

    const pricing = [
        {
            bg: a2,
            title: "billed monthly",
            plan: "advanced plan",
            price: 140
        },
        {
            bg: a1,
            title: "billed monthly",
            plan: "basic plan",
            price: 120
        },
        {
            bg: a3,
            title: "billed monthly",
            plan: "beginers",
            price: 90
        },
    ]

    return (
        <div className='pricing'>
            <h3 className='my-5 text-center'><span>choose the offer</span>thats suits you</h3>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, sunt ut? <br /> Provident, cupiditate.</p>
            <div className="container mt-5">
                <div className="row">
                    {
                        pricing.map(price => <ShowPricing price={price}></ShowPricing>)
                    }
                </div>
            </div>
        </div>
    );
};

function ShowPricing({ price }) {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="pricing-main">
                    <img src={price.bg} alt="" className='img-fluid w-100 d-block' style={{ height: "600px" }} />
                    <div className="pricing-box">
                        <div className="pricing-head">
                            <p>{price.title}</p>
                            <h2>{price.plan}</h2>
                            <span>${price.price}</span>
                        </div>
                        <div className="pricing-body">
                            <ul>
                                <li>mobile optimize</li>
                                <li>best hosting</li>
                                <li>free custom</li>
                                <li>out standing</li>
                                <li>happy customers</li>
                            </ul>
                        </div>
                        <Link to="/membership" className='join-btn'><button className='custom-btn d-block mx-auto mt-5'>purchase</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PricingInfo;