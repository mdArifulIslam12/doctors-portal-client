import React from "react";
import contact from "../../assets/images/appointment.png";

const Contact = () => {
  const handleContact = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const message = event.target.message.value;
    const subject = event.target.subject.value;
    console.log('Email:',email ,' ', 'Message:',message,' ','Subject',subject);
    event.target.reset()
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
          />
          <input type="text" placeholder="Subject" className="input w-full mb-3 " name="subject" />
          <textarea
            placeholder="Your Message"
            className =" textarea w-full mb-3 input h-[120px]"
            name="message"
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
