import React from 'react';
import {Outlet,Link} from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content px-4 lg:px-0">
    <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
    <Outlet />
    
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <li><Link to='/dashboard'>My Appointments</Link></li>
      <li><Link to='/dashboard/myReview'>My Review</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;