import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyAppointments = () => {
  const [user, loading] = useAuthState(auth);

  const { data: appointments, isLoading } = useQuery("myAppointment", () =>
    fetch(`http://localhost:5000/myAppointment?email=${user.email}`).then(
      (res) => res.json()
    )
  );
  if (loading || isLoading) {
    return <Loading />;
  }
  return (
    <div className="pb-8">
      <h2 className="py-2 pb-4">My appointments</h2>
      <div class="overflow-x-auto">
          <table class="table w-full">
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
            {appointments.map((a,index) => <tr>
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
