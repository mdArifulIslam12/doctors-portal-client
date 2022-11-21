import React from "react";
import contact from '../../assets/images/appointment.png';
import toast from 'react-hot-toast';
import emailjs from 'emailjs-com'

const Contact = () => {
  const handleContact = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const message = event.target.message.value;
    const subject = event.target.subject.value;
    emailjs.sendForm('service_0gb8yw7', 'template_df7a1jt', event.target, 'GGJcUSYKscponjqL2')
    .then((result) => {
        toast.success('Send your email message Successfully')
        event.target.reset()
    }, (error) => {
        toast.error(`Send message failed ${error} !!`)
    });
  };
  return (
    <section className="" style={{ backgroundImage: `url(${contact})` }}>
      <div className="lg:w-[450px] p-8  mx-auto py-16 text-center">
        <div className="text-center">
          <h4 className="text-secondary text-xl font-bold">Contact Us</h4>
          <h2 className="text-white mt-3 mb-8 text-4xl font-normal">
            Stay connected with us
          </h2>
        </div>
        <form className="w-100" onSubmit={handleContact}>
          <input
            type="email"
            placeholder="Email Address"
            className="input w-full mb-3"
            name="email"
            required
          />
          <input type="text" placeholder="Subject" className="input w-full mb-3 " name="subject" required />
          <textarea
            placeholder="Your Message"
            className =" textarea w-full mb-3 input h-[120px]"
            name="message"
            required
          ></textarea>
          <input
            type="submit"
            value="Submit"
            className="btn font-bold text-white bg-gradient-to-r from-secondary to-primary px-12 "
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
