import React from "react";




const InfoCard = ({ img,bgColor,cardTitle,cardDetail }) => {
  return (
    <div data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="card rounded-Card shadow-sm aos-init aos-animate" >   
      <div className={`card lg:card-side shadow-xl pl-8 pt-6 lg:pt-0 ${bgColor}`} >
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">{cardTitle}</h2>
          <p className="text-white">{cardDetail}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
