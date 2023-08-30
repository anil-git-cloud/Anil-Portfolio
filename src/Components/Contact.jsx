// import React, { useEffect } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
// import emailjs from "emailjs-com";
// import AOS from "aos";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container" data-aos="slide-up">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>anildhangar2709@gmail.com</h5>
            <a href="mailto:anildhangar2709@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <a href="https://api.whatsapp.com/send?phone=7738642024">
              Send a message
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
