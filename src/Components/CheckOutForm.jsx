import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useState } from 'react';



const CARD_OPTIONS ={
    iconStyle:"solid",
    Style:{
        base:{
            iconColor:"#c4f0ff",
            color:"#fff",
            fontWeight:500,
            fontFamily:"Roboto,open Sans Segoe UI,sans-serif",
            fontSize:"16px",
            fontSmoothing:"antialisased",
            ":-webkit-autofill":{color:"#fce883"},
            "::placeholder":{color:"#87bbfd"}

        },
        invalid:{
            iconColor:"#ffc7ee",
            color:"#ffc7ee"
        }
    }
}


const CheckOutForm = () => {
    const [success,setSuccess] =useState(false);
    const stripe =useStripe()
    const elements =useElements()


    const handleSubmit = async (e)=>{
        e.preventDefault()
        const {error,paymentMethod} =await stripe.createPaymentMethod({
            type:"card",
            card: elements.getElement(CardElement)
        })
  

      if(!error){
        try{
            const {id}= paymentMethod
            const response =await fetch("http://localhost:5000/api/auth/payment",{
                amount:1000,
                id

            })
            if(response.data.success){
                console.log("Successful payment");
                setSuccess(true)
            }
        }catch(error){
             console.log("Error",error);
        }
      }else{
        console.log(error.message);
      }
    }

    return (
   <>
   {!success ? 
   <form  onSubmit={handleSubmit}>
    <fieldset className='FormGroup '>
        <div className='FormRow py-5 px-5'>
            <CardElement options={CARD_OPTIONS} />
        </div>
    </fieldset>
    <button>Pay</button>
   </form>
   :
   <div>
    <h2>you bought item in the products</h2>
   </div>
}
   </>
    );
};

export default CheckOutForm;