import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet, Link } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import CustomLink from "../CustomLink/CustomLink";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content px-4 lg:px-0 mb-12">
        <h2 className="text-2xl font-bold text-purple-500 mt-4">
          Welcome to your Dashboard
        </h2>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li >
            <CustomLink to="/dashboard">My Appointments</CustomLink>
          </li>
          <li >
            <CustomLink to="/dashboard/myReview">My Review</CustomLink>
          </li>
          {admin && (
            <>
              <li>
                <CustomLink to="/dashboard/user">All User</CustomLink>
              </li>
              <li >
                <CustomLink to="/dashboard/addDoctor">Add Doctor</CustomLink>
              </li>
              <li >
                <CustomLink to="/dashboard/manageDoctors">Manage Doctors</CustomLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
