import { signOut } from "firebase/auth";
import React from "react";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  const { data: users, isLoading ,refetch} = useQuery("user", () =>
    fetch("https://doctors-portal-server-ua7j.onrender.com/user", {
      method: "GET",
      headers: {
        "authorization": `bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/");
      }
      return res.json();
    })
  );
  if (isLoading) {
    return <Loading/>
  }
  return (
    <div>
      <h2 className="text-2xl py-4">All User</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Admin</th>
              <th>Remove User</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow key={user._id} user={user} index={index} refetch={refetch}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
