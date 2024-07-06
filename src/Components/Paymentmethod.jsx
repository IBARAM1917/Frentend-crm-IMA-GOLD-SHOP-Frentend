import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOutForm from './CheckOutForm';

const  PUBLIC_KEY ="pk_test_51PYk8FRtbK0Lg6kcmM3V008QyGBwrUvldXBJo5YPYryIIBuNycQkbAj55bMU7JYKmWRsabkjl9emwm5ObaOcATfs00DuwLDdAE"
const stripeTestPromise =loadStripe(PUBLIC_KEY)

const Paymentmethod = () => {
    return (
       <Elements stripe={stripeTestPromise}>
        <CheckOutForm   />
       </Elements>
    );
};

export default Paymentmethod;