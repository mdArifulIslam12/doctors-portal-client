import React from 'react';
import MakeAppointment from '../Home/MakeAppointment';
import Footer from '../Shared/Footer';
import HeadingTitle from '../Shared/HeadingTitle';

const About = () => {
    return (
        <div>
            <HeadingTitle title={'About Us'}/>
            <MakeAppointment/>
            <Footer/>
        </div>
    );
};

export default About;