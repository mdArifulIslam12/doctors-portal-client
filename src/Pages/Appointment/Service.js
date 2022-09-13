import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots,price } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl ">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl text-secondary">{name}</h2>
        <p>{slots.length ? slots[0] : "Try another date."}</p>
        <p className="text-sm font-semibold uppercase">
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
        </p>
        <p className="font-bold"><small>Price: ${price}</small></p>
        <div className="card-actions justify-center">
          <label
            htmlFor="booking-modal"
            className="btn btn-secondary text-sm font-bold text-white bg-gradient-to-r from-secondary to-primary"
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
          >
            Booking Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
