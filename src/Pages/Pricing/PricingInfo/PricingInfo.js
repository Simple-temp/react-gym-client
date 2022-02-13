import React from 'react';
import "./PricingInfo.css"

const PricingInfo = () => {

    const pricing = [
        {
            title : "billed monthly",
            plan : "advanced plan",
            price : 140
        },
        {
            title : "billed monthly",
            plan : "basic plan",
            price : 120
        },
        {
            title : "billed monthly",
            plan : "beginers",
            price : 90
        },
    ]

    return (
        <div className='pricing'>
            <h3 className='my-5 text-center'><span>choose the offer</span>thats suits you</h3>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, sunt ut? <br /> Provident, cupiditate.</p>
            <div className="container mt-5">
                <div className="row">
                    {
                        pricing.map( price => <ShowPricing price={price}></ShowPricing> )
                    }
                </div>
            </div>
        </div>
    );
};

function ShowPricing({price}){
    return(
        <>
            <div className="col-lg-4 col-md-6 col-12">
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
                    <button className='custom-btn d-block mx-auto mt-5'>purchase</button>
                </div>
            </div>
        </>
    )
}

export default PricingInfo;