import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import toast from 'react-hot-toast';

const BookingModal = ({ treatment, date,setTreatment ,refetch}) => {
  const {_id, name, slots,price } = treatment;
  const [user, loading] = useAuthState(auth); 
  if(loading){
    return <Loading/>
  }
  const formatedDate = format(date,"PP")

  const handleBooking = event =>{
    event.preventDefault()
    const slot = event.target.slot.value
    const phone= event.target.phone.value
    const email = event.target.email.value
    const booking = {
      treatment_id: _id,
      treatment:name,
      date:formatedDate,
      slot,
      patientEmail:email,
      phone,
      price:price,
      patientName:user.displayName
    }

    fetch('https://young-bayou-33287.herokuapp.com/booking',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      if(data.success){
        toast.success(`Appoinment is set, ${formatedDate} at ${slot}`)
      }else{
        toast.error(`Already have and Appoinment on ${data.booking?.date} at ${data.booking?.slot}`)
      }
      refetch()
      // to close modal      
      setTreatment(null)
    })
    
  }

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-xl text-secondary">{name}</h3>
          <form className="grid grid-cols-1 gap-3 justify-items-center" onSubmit={handleBooking}>
            <input
              type="text"
              disabled
              readOnly
              value={format(date, "PP")}
              className="input input-bordered  w-full max-w-lg"
            />
            <select name="slot" className="select select-bordered w-full max-w-lg">
              {
                slots.map((slot,index) => <option key={index} value={slot}>{slot}</option>)
              }
            </select>
            <input
              type="text"
              name="name"
              value={user?.displayName || ''}
              disabled
              className="input input-bordered  w-full max-w-lg"
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered  w-full max-w-lg"
            />
            <input
              type="email"
              disabled
              name="email"
              value={user?.email|| ''}
              className="input input-bordered  w-full max-w-lg"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary w-full max-w-lg"
            />
          </form>
          <div className="modal-action"></div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
