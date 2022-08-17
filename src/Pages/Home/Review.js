import React from "react";

const Review = ({review}) => {
    const {name,details,img,other} = review
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{details}</p>
        <div className="card-actions items-center mt-4">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} className='w-[75px] h-[75px]' />
            </div>
          </div>
          <div className="ml-4">
            <h2 className="card-title">{name}</h2>
            <h5>{other}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
