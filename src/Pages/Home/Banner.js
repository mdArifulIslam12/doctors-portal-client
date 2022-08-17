import React from "react";
import bgImg from "../../assets/images/bg.png";
import chair from "../../assets/images/chair.png";
import Button from "../Shared/Button";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        width: "100%",
        height: "100%",
        backgroundSize: "cover"
      }}
      className="lg:pt-5 pb-10 mb-12"
    >
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="rounded-lg shadow-2xl " width='594px'  />
          <div className="pr-5">
            <h1 className="text-5xl font-bold text-accent">Your New Smile Starts Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
