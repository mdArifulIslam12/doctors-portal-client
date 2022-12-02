import React, { useEffect, useState } from 'react';
import {CardElement,useStripe,useElements} from '@stripe/react-stripe-js'

const CheckoutForm = ({appointment}) => {
    const stripe = useStripe()
    const elements = useElements();
    const [cardError,setCardError] = useState('')
    const [clientSecret,setClientSecret] = useState('')
    const [success,setSuccess] = useState('')
    const [transactionId,setTransactionId] = useState('')
    const [processing,setProcessing] = useState(false)

    const {price,patientName,patient,_id} = appointment

    useEffect(()=>{
        fetch('https://doctors-portal-server-ua7j.onrender.com/create-payment-intent',{
            method:'POST',
            headers: {
                'content-type':'application/json',
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
              },
              body:JSON.stringify({price})

        })
        .then(res=>res.json())
        .then(data => {
            if(data?.clientSecret){
                setClientSecret(data?.clientSecret)
            }
        })
        
    },[price])

    const handleSubmit = async(event) => {
        event.preventDefault()

        
    if (!stripe || !elements) {
        return;
      }

      const card = elements.getElement(CardElement);
      if (card == null) {
        return;
      }

      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
  
        setCardError(error?.message || '');
        setSuccess('')
        setProcessing(true)
        // confrim payment 
        const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: patientName,
                  email: patient
                },
              },
            },
          );

          if (intentError) {
            setCardError(intentError?.message)
            setProcessing(false)
          }else{
            setCardError('')
            setTransactionId(paymentIntent.id)
            setSuccess('Congrats! Your payment is completed')
            // 
            const payment ={
                appointment:_id,
                transactionId:paymentIntent.id
            }
            fetch(`https://doctors-portal-server-ua7j.onrender.com/booking/${_id}`,{
                method:'PATCH',
                headers: {
                    'content-type':'application/json',
                    authorization: `bearer ${localStorage.getItem("accessToken")}`,
                  },
                  body:JSON.stringify(payment)

            })
            .then(res=>res.json())
            .then(data => {
                setProcessing(false)
            })
          }
      

    }
    return (
       <>
         <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-success btn-sm mt-8' type="submit" disabled={!stripe || !clientSecret || success}>
        Pay
      </button>
    </form>
    {
        cardError && <p className='text-red-500'>{cardError}</p>
    }
    {
        success && <div className='text-green-500'>
            <p>{success}</p>
            <p>Your Transaction Id : <span className="text-orange-500 font-bold">{transactionId}</span> </p>
        </div>
    }
       </>
    );
};

export default CheckoutForm;