import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';
import Footer from '../Shared/Footer'

const Home = () => {
    return (
        <div className=''>
           <Banner/>
           <Info></Info>
           <Services/>
           <MakeAppointment/>
           <Testimonials/>
           <Contact/>
           <Footer/>
        </div>
    );
};

export default Home;