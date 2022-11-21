import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import {  useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import MyAppointmentRow from "./MyAppointmentRow";

const MyAppointments = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate()

  const { data: appointments, isLoading,refetch } = useQuery(["booking",user], () =>
    fetch(`https://young-bayou-33287.herokuapp.com/booking?email=${user.email}`,{
      method:"GET",
      headers:{
        "authorization":`bearer ${localStorage.getItem('accessToken')}`
      }
    }).then((res) =>{
      if(res.status === 401 || res.status === 403){
        signOut(auth)
        localStorage.removeItem('accessToken')
        navigate('/')
      }
        return res.json()
      
    })
  );
  if (loading || isLoading) {
    return <Loading />;
  }
  return (
    <div className="pb-8">
    <h2 className="py-2 pb-4">My appointments</h2>
    <div className='my-12 mt-5 mb-12 grid lg:grid-cols-3 sm:grid-cols-1 gap-5'>
          {appointments.map((appointment) => <MyAppointmentRow refetch={refetch} key={appointment._id} appointment={appointment}></MyAppointmentRow> )}
       
      </div>
    
  </div>


  );
};

export default MyAppointments;
