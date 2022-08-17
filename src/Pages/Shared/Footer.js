import React from "react";
import FooterImg from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <div style={{ background: `url(${FooterImg})`, backgroundSize: "cover" }}>
      <footer className="footer p-10 text-accent text-sm mt-16">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Emergncy Checkup</a>
          <a className="link link-hover">Monthly Checkup</a>
          <a className="link link-hover">Weekly checkup</a>
          <a className="link link-hover">Deep Checkup</a>
        </div>
        <div>
          <span className="footer-title">Oral Health</span>
          <a className="link link-hover">Fluoride Treatment</a>
          <a className="link link-hover">Cavity Filling</a>
          <a className="link link-hover">Teath Whitening</a>
        </div>
        <div>
          <span className="footer-title">Our Address</span>
          <a className="link link-hover">New York - 101010 Hudson</a>
        </div>
      </footer>
      <section className="footer footer-center p-6 pt-12 text-base-content">
        <div>
          <p>Copyright © 2022 - All right reserved by Doctor Portal</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
