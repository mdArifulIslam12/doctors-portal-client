import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-day-picker/dist/style.css";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/Shared/NotFound";
import { Toaster } from 'react-hot-toast';
import SignUp from "./Pages/Login/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointments from "./Pages/Dashboard/MyAppointments";
import MyReview from "./Pages/Dashboard/MyReview";
import User from "./Pages/Dashboard/User";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import AddDoctor from "./Pages/Dashboard/AddDoctor";
import ManageDoctors from "./Pages/Dashboard/ManageDoctors";
import Payment from "./Pages/Dashboard/Payment";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        ></Route>
        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard/>
          </RequireAuth>}
          >
            <Route index element={<MyAppointments/>}/>
            <Route path="myReview" element={<MyReview/>}/>
            <Route path="payment/:id" element={<Payment/>}/>
            <Route path="user" element={<RequireAdmin><User/></RequireAdmin>}/>
            <Route path="addDoctor" element={<RequireAdmin><AddDoctor/></RequireAdmin>}/>
            <Route path="manageDoctors" element={<RequireAdmin><ManageDoctors/></RequireAdmin>}/>
        </Route>
        <Route path="about" element={<About />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signUp" element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Toaster 
       position="top-right"
       reverseOrder={false}
      />
    </div>
  );
}

export default App;
