import React from 'react';
import { Link } from 'react-router-dom';

const MyAppointmentRow = ({appointment,refecth}) => {
    const {patientName,date,slot,treatment,price,_id} = appointment
    console.log(appointment)
    
    return (
        <div className="card lg:max-w-lg shadow-xl h-75">
        <div className="card-body mx-auto text-center">
          <h2 className="card-title mx-auto">{treatment}</h2>
          <h3 className="card-title mx-auto">{patientName}</h3>
          <h3 className="card-title mx-auto">Price: ${price}</h3>
          <p className='font-bold'>Date: {date}</p>
          <p className='font-bold'>Slot: {slot}</p>
          <div className="card-actions justify-start">
            { !appointment?.paid && (
             <div> 
                 <Link to={`/dashboard/payment/${_id}`}>
                <button className="btn btn-primary text-white">Payment</button>
              </Link> 
              
              </div> 
             
              )} 
            { appointment?.paid && (
              <div>
                  <p className="font-medium">Transaction Id: <span className='text-green-500'>{appointment?.transactionId}</span></p>
                  <p><span className="text-success text-xl">Paid</span></p>
              </div>
            )} 
          </div>
        </div>
      </div>
    );
};

export default MyAppointmentRow;