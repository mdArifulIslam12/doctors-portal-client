
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();
  const [user, loading] = useAuthState(auth);

  const {data:services,isLoading}=useQuery("service",()=>fetch('https://young-bayou-33287.herokuapp.com/service').then(res=>res.json()))
  
  if(isLoading){
    return <Loading/>
  }
  const imageApiKey = '28dbf8cc24c2d8aefb6b1eb8f25c9b22'

  const onSubmit = async(data) =>{
    const formData = new FormData();
    const image = data.image[0]
    formData.append('image', image);

    const url = `https://api.imgbb.com/1/upload?key=${imageApiKey}`
    fetch(url,{
      method:'POST',
      body:formData
    })
    .then(res=>res.json())
    .then(result => {
      if(result.success){
        const img = result.data.url
        const doctor = {
          name:data.name,
          email:data.email,
          specialty:data.specialty,
          img:img
        }
        fetch('https://young-bayou-33287.herokuapp.com/doctor',{
          method: "POST",
          headers:{
            'content-type':'application/json',
            authorization:`bearer ${localStorage.getItem('accessToken')}`
          },
          body:JSON.stringify(doctor)
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data)
          if(data.insertedId){
            toast.success('Doctor Added Successfully.')
            reset()
          }else{
            toast.error('Failed to add the doctor!!')
          }
          
        })
      }
    })
  }

  return (
    <div>
      <h2>Add Doctor</h2>
      <section className="">
        <div className="flex justify-center items-center h-screen">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-center text-2xl font-bold">Add Doctor</h2>
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
                      },
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
                <div className="form-control w-full max-w-xs mb-5">
                  <label className="label">
                    <span className="label-text">Specialty</span>
                  </label>
                  <select {...register("specialty")} className="select select-bordered w-full max-w-xs">
                      {
                        services.map(service =><option
                          key={service._id}
                          value={service.name}
                        >{service.name}</option> )
                      }
                      
                  </select>
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    type="file"
                    className="input input-bordered w-full max-w-xs p-[6px]"
                    {...register("image", {
                      required: {
                        value: true,
                        message: "Image is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.image?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.image.message}
                      </span>
                    )}
                  </label>
                </div>
                <input
                  type="submit"
                  className="btn w-full max-w-xs"
                  value={"Add Doctor"}
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddDoctor;
