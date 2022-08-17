import React from "react";
import Cavity from "../../assets/images/cavity.png";
import Fluoride from "../../assets/images/fluoride.png";
import Whitening from "../../assets/images/whitening.png";
import Treatment from "../../assets/images/treatment.png"
import Button from "../Shared/Button";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      _id: 1,
      img: Fluoride,
      name: "Fluoride Treatment",
      detail:
        "Lorem Ipsum is simply durmmy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: 2,
      img: Cavity,
      name: "Cavity Filling",
      detail:
        "Lorem Ipsum is simply durmmy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: 3,
      img: Whitening,
      name: "Teeth Whitening",
      detail:
        "Lorem Ipsum is simply durmmy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <div className="mb-16">
      <div className="text-center pt-24 pb-12">
        <h2 className="text-primary font-semibold text-2xl">Our services</h2>
        <h2 className="font-medium text-4xl " style={{ color: "#3A4256" }}>
          Services We Provide
        </h2>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 mb-16">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <div>
        <div className="hero min-h-screen pt-12">
          <div className="hero-content flex-col lg:flex-row grid grid-cols-1 lg:grid-cols-2">
           <div className="mx-auto aos-init aos-animate " data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
           <img
              src={Treatment}
              className="max-w-sm rounded-lg shadow-2xl "
              alt=""
            />
           </div>
            <div className="lg:pr-24 aos-init aos-animate" data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <h1 className="text-5xl font-bold text-accent">Exceptional Dental Care, on Your Terms</h1>
              <p className="py-6 text-accent">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem ipsumis that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.
              </p>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
