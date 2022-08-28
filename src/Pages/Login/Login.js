import React, { useEffect, useState } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import useToken from "../../hooks/useToken";

const Login = () => {
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail,sending] = useSendPasswordResetEmail(auth);
  const [token]=useToken(gUser || user)
  let signInError;

  let navigate = useNavigate();
  let location = useLocation();
  const [email,setEmail] = useState('')

  let from = location?.state?.from?.pathname || "/";


  useEffect(()=>{
    if (token) {
      navigate(from, { replace: true });
    }
  },[from,navigate,token])

  if(gError|| error){
    signInError = <p className="text-red-500 pb-3">{gError?.message || error?.message}</p>
  }
  if(gLoading|| loading || sending){
    return <Loading/>
  }
  const onSubmit = (data) => {
    const email = data.email
    setEmail(email)
    const password = data.password
    signInWithEmailAndPassword(email,password)
  };

  const resetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Send Your email");
    } else {
      toast.error("Enter your email address.");
    }
  };

  return (
   <section className="">
     <div className="flex justify-center items-center h-screen ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            
            <p className="text-[15px] mb-2">
          <button
            onClick={resetPassword}
            className="text-accent"
          >
            Forget Password?
          </button>
        </p>
        {signInError}
            <input type="submit" className="btn w-full max-w-xs" value={'Login'} />
          </form>
          <p className="text-[15px] text-center font-normal ">New to Doctors portal? <Link to='/signUp' className="text-secondary">Create New Account</Link> </p>
          <div className="divider">OR</div>
          <button
            className="btn btn-outline"
            onClick={() => signInWithGoogle()}
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
   </section>
  );
};

export default Login;
