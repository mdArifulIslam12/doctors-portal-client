import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import {  useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const MyAppointments = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate()

  const { data: appointments, isLoading } = useQuery(["booking",user], () =>
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
      <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Treatment</th>
              </tr>
            </thead>
            <tbody>
            {appointments.map((a,index) => <tr key={index}>
                <th>{index+1}</th>
                <td>{a.patientName}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>
              </tr>)}
            </tbody>
          </table>
        </div>
      
    </div>
  );
};

export default MyAppointments;
