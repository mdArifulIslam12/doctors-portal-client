import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
    createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});
    const [updateProfile, updating, uError] = useUpdateProfile(auth);
    let signInError;
    let navigate = useNavigate();
    let location = useLocation();
  
    let from = location?.state?.from?.pathname || "/";
  
    useEffect(()=>{
      if (gUser || user) {
        navigate(from, { replace: true });
      }
    },[gUser,user,from,navigate])

    if(gError|| error || uError){
      signInError = <p className="text-red-500 pb-3">{gError?.message || error?.message || uError?.message}</p>
    }
    if(gLoading|| loading || updating){
      return <Loading/>
    }
    const onSubmit = async(data) => {
      const displayName = data.name
      const email = data.email
      const password = data.password
      await createUserWithEmailAndPassword(email,password)
      await updateProfile({displayName})
    };
    return (
      <section className=''>
        <div className="flex justify-center items-center h-screen">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    }
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
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
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    }, 
                    pattern: {
                        value: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,32}/,
                        message: "Minimum six characters, at least one uppercase letter, one lowercase letter, one number and one special character",
                      }
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {signInError}
              <input type="submit" className="btn w-full max-w-xs" value={'Sing Up'} />
            </form>
            <p className="text-[15px] text-center font-normal">Already have an account? <Link to='/login' className="text-secondary">Please Login</Link> </p>
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

export default SignUp;