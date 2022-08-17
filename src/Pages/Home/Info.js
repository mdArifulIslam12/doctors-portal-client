
import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-24 mb-16 '>
            <InfoCard cardDetail="Lorem ipsumis simply dummy " cardTitle="Opening Hours" img={clock} bgColor='bg-gradient-to-r from-secondary to-primary'/>
            <InfoCard cardDetail="Brooklyn, NY 10036, United States" cardTitle="Visit our location" img={marker} bgColor='bg-accent'/>
            <InfoCard cardDetail="+000 123 456789" cardTitle="Contact us now" img={phone} bgColor='bg-gradient-to-r from-secondary to-primary'/>
            
        </div>
    );
};

export default Info;