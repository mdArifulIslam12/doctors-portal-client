import React from 'react';
import { useLocation } from 'react-router-dom';

const HeadingTitle = ({title}) => {
    const location = useLocation()
    return (
        <div className='flex justify-center py-6 bg-gradient-to-r from-secondary to-primary rounded-lg text-white'>
        <section className='text-center'>
          <h2 className='text-2xl uppercase font-medium ' >Home / {location.pathname.split("/")[1]}</h2>
          <h1 className='text-xl pt-3 font-normal'>{title}</h1>
        </section>
      </div>
    );
};

export default HeadingTitle;