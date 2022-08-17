import React from "react";
import { DayPicker } from "react-day-picker";
import chair from "../../assets/images/chair.png";
import appointment from "../../assets/images/bg.png";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div
      className="hero min-h-screen mt-12  mb-24"
      style={{ backgroundImage: `url(${appointment})` }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img
          src={chair}
          className="rounded-lg shadow-2xl lg:ml-16 lg:w-[594px]"
          alt=""
        />
        <div className="mr-6">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
