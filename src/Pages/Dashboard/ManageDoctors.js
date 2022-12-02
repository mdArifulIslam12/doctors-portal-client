import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteComfirmModal from "./DeleteComfirmModal";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
  const [deletingDoctor,setDeletingDoctor] = useState(null)
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctor", () =>
    fetch("https://doctors-portal-server-ua7j.onrender.com/doctor", {
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
    <div>
      <h2 className="text-xl">Manage Doctors: {doctors.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <DoctorRow
                doctor={doctor}
                key={doctor._id}
                index={index}
                refetch={refetch}
                setDeletingDoctor={setDeletingDoctor}
              ></DoctorRow>
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && <DeleteComfirmModal 
      setDeletingDoctor={setDeletingDoctor}
      deletingDoctor={deletingDoctor} 
      refetch={refetch} />}
    </div>
  );
};

export default ManageDoctors;
