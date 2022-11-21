import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js'
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe('pk_test_51L4DouHAOqOcaQ1cM1eOA5iZ2OYdubuw5BLarC2tD9cUA0gN7IekCl3PF3z2IsSpDcVTbNFU5uHdxJnYcgeihYXD00uHk3E0hk');

const Payment = () => {
  const { id } = useParams();

  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(`https://young-bayou-33287.herokuapp.com/booking/${id}`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="">
      <div className="card max-w-md w-50 bg-base-100 shadow-xl my-12">
        <div className="card-body">
            <p className="text-success font-bold">Hello, {appointment.patientName}</p>
          <h2 className="card-title">Please Pay for {appointment.treatment}</h2>
          <p>Your Appointment: <span className="text-orange-700">{appointment.date}</span> at {appointment.slot}</p>
          <p>Please pay: {appointment.price}$</p>
        </div>
      </div>
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-5">
        <div className="card-body">
        <Elements stripe={stripePromise}>
      <CheckoutForm appointment={appointment}/>
    </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
