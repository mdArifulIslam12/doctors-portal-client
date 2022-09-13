import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import Button from '../Shared/Button';
import { Link } from 'react-router-dom';

const MakeAppointment = () => {
    return (
        <section
            style={{backgroundImage: `url(${appointment})`}}
            className='flex items-center justify-center mb-12 mt-36 p-10 lg:p-0'
        >
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-140px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 lg:pr-24'>
                <h3 className='text-secondary text-xl font-bold'>Appointment</h3>
                <h2 className='text-white font-semibold text-4xl my-4'>Make an appointment Today</h2>
                <p className='text-white mb-12'>It is a long established fact that a reader will be disstracted by the readable content of a page when looking at its layout. The point of using lorem ipsumis that it has a more-or-less mormal distribution of letters,as opposed to using content here making it look like readable English. Many destop publishing packages and web page.</p>
                <Button><Link to='/appointment'>Get Started</Link></Button>
            </div>
        </section>
    );
};

export default MakeAppointment;