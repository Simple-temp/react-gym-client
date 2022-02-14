import React, { useState } from 'react';
import {
    CardElement,
    useStripe,
    useElements,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
} from '@stripe/react-stripe-js';
import "./PaymentMethod.css";
import b1 from "../../../img/b1.png";
import b2 from "../../../img/b2.png";
import b3 from "../../../img/b3.png";

const PaymentMethod = () => {

    const [errormassege,setErrormassege] = useState(null);
    const [success,setSucces] = useState(null)

    const stripe = useStripe();
    const elements = useElements();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (elements == null) {
        return;
      }
  
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });

      if(error)
      {
        setErrormassege(error.message)
          console.log(error.message)
          setSucces(null)
      }

      if(paymentMethod)
      {
          setSucces(paymentMethod)
          console.log(paymentMethod.id)
          setErrormassege(null)
      }


    };

    return (
        <div>
            <div className="cardContent d-flex justify-content-between">
                <div className="card-info">
                    <h2 className='text-uppercase'>credit card</h2>
                </div>
                <div className="card-imges">
                    <img src={b1} alt="" className='ca-img' />
                    <img src={b2} alt="" className='ca-img' />
                    <img src={b3} alt="" className='ca-img' />
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <CardElement className='cardnumber'/>
                {
                    errormassege && <p style={{color:"red"}}>{errormassege}</p>
                }
                                {
                    success && <p style={{color:"green"}}>Payment successfull</p>
                }
                <button type="submit" disabled={!stripe || !elements} className="custom-btn">pay</button>
            </form>
        </div>
    );
};

export default PaymentMethod;