import React from 'react';
import Footer from '../Shared/Footer';
import Testimonials from '../Home/Testimonials';
import HeadingTitle from '../Shared/HeadingTitle';

const AllReview = () => {
    return (
        <div>
            <HeadingTitle title={'Review'}/>
            <Testimonials/>
            <Footer/>
        </div>
    );
};

export default AllReview;