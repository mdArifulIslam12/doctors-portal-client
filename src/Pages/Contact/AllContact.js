import React from 'react';
import Contact from '../Home/Contact';
import Footer from '../Shared/Footer';
import HeadingTitle from '../Shared/HeadingTitle';

const AllContact = () => {
    return (
        <div>
           <div className='mb-10'>
           <HeadingTitle title={'Contact'}/>
           </div>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default AllContact;