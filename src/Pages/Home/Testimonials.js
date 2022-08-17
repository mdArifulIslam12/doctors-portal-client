import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id:1,
            name: 'Winson Herry',
            other: 'California',
            img:people1,
            details:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more or less normal distribu to using content here all this thime.'
        },
        {
            _id:25,
            name: 'Mia',
            other: 'California',
            img:people2,
            details:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more or less normal distribu to using content here all this thime.'
        },
        {
            _id:3,
            name: 'Ava',
            other: 'California',
            img:people3,
            details:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more or less normal distribu to using content here all this thime.'
        },
    ]
    return (
       <section className='mt-24 mb-24'>
        <div className='flex justify-between'>
            <div className='pb-12'>
                <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                <h2 className='text-3xl'>What Our Patients Says</h2>
            </div>
            <div>
                <img src={quote} className=' w-24 lg:w-48' alt="" />
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 pt-12'>
            {
                reviews.map(review => <Review key={review._id} review={review}></Review>)
            }
        </div>
       </section>
    );
};

export default Testimonials;