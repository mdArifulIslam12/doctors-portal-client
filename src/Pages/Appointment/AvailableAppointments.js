import React, { useState } from "react";
import { format } from "date-fns";
import Service from "./Service";
import BookingModal from "./BookingModal";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const AvailableAppointments = ({ date }) => {
const [treatment,setTreatment] = useState(null)

 const formatedDate = format(date,"PP")
 const {data:services,isLoading,refetch}=useQuery(['available',formatedDate],()=> fetch(`https://young-bayou-33287.herokuapp.com/available?date=${formatedDate}`)
   .then((res) => res.json()))

  if(isLoading){
    return <Loading/>
  }
  return (
    <div className="px-4">
      <h4 className="text-xl text-center text-secondary font-semibold py-8">
        Available Appointments on {format(date, "PP")}
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
        {
          services.map(service => <Service key={service._id} service={service} setTreatment={setTreatment}></Service>)
         
        }
        {treatment && <BookingModal treatment={treatment} setTreatment={setTreatment} date={date} refetch={refetch}/>}
      </div>
    </div>
  );
};

export default AvailableAppointments;
