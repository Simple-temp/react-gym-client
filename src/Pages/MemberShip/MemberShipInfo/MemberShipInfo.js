import React, { useState } from 'react';
import PaymentMethod from '../PaymentMethod/PaymentMethod';
import "./MemberShipInfo.css"
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const MemberShipInfo = () => {

    const stripePromise = loadStripe('pk_test_51KJhEFFesKPGWiP3YH9pPx3aDpRX44wil8afCvneKe2ziTVEPoBgXnEFnanssjwK1RbAeyKbQV5kSBYGcjeOsxoB00m0ZXAjF8');

    const [info, setInfo] = useState({})

    const [membership, setMembership] = useState(null)

    const handleBlur = (e) => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo)
        console.log(newInfo)
    }

    const handleSubmit = (e) => {
        setMembership(info)
        e.preventDefault()
    }

    return (
        <div className='membershipinfo'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto" style={{ display: membership ? "none" : "block" }}>
                        <form class="row g-3" onSubmit={handleSubmit}>
                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">First Name</label>
                                <input onBlur={handleBlur} required name="firstname" type="text" class="form-control" id="inputEmail4" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword4" class="form-label">Last Name</label>
                                <input onBlur={handleBlur} name="lastname" type="text" class="form-control" id="inputPassword4" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">Email</label>
                                <input onBlur={handleBlur} name="email" type="email" class="form-control" id="inputEmail4" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword4" class="form-label">Mobile Number</label>
                                <input onBlur={handleBlur} name="mobile" type="text" class="form-control" id="inputPassword4" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputAddress" class="form-label">Date</label>
                                <input onBlur={handleBlur} name="date" type="date" class="form-control" id="inputAddress" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputCity" class="form-label">Gender</label>
                                <select id="inputState" className='form-select'>
                                    <option selected>Choose...</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label for="inputZip" class="form-label">Address</label>
                                <input onBlur={handleBlur} name="address" type="text" class="form-control" id="inputZip" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputZip" class="form-label">Country/Resion</label>
                                <input onBlur={handleBlur} name="country/region" type="text" class="form-control" id="inputZip" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputZip" class="form-label">City</label>
                                <input onBlur={handleBlur} name="city" type="text" class="form-control" id="inputZip" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputZip" class="form-label">Postcode</label>
                                <input onBlur={handleBlur} name="postcode" type="text" class="form-control" id="inputZip" />
                            </div>
                            <div class="col-12">
                                <button type="submit" class="custom-btn">next</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-8 mx-auto" style={{ display: membership ? "block" : "none" }}>
                        <Elements stripe={stripePromise}>
                            <PaymentMethod></PaymentMethod>
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberShipInfo;