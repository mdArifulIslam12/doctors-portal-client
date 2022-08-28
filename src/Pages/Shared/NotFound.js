import React from 'react';
import pageNotFound from '../../assets/images/404.jpg'

const NotFound = () => {
    return (
        <div>
            <img src={pageNotFound} className='h-[600px] mx-auto' alt="" />
        </div>
    );
};

export default NotFound;