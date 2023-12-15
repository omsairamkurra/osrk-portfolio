import React, { useRef } from "react";
import "./contact.css";
import walmart from "../../assests/walmart.png";
import adobe from "../../assests/adobe.png";
import microsoft from "../../assests/microsoft.png";
import facebook from "../../assests/facebook.png";
import facebookIcon from "../../assests/facebook-icon.png";
import twitterIcon from "../../assests/twitter.png";
import instagramIcon from "../../assests/instagram.png";
import youtubeIcon from "../../assests/youtube.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bipgncc",
        "template_n56bmxk",
        form.current,
        "fzygMDyEk73z-bQ4q"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          I have had the opportunity to work with a diverse group of companies.
          Some of the notable companies I have worked with includes
        </p>
        <div className="clientImgs">
          <img src={walmart} alt="client" className="clientImg" />
          <img src={adobe} alt="client" className="clientImg" />
          <img src={microsoft} alt="client" className="clientImg" />
          <img src={facebook} alt="client" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            name="your_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            className="email"
            name="your_email"
            placeholder="Your Email"
            required
          />
          <input
            type="tel"
            class="number"
            pattern="[+][0-9]{2}[0-9]{10,}"
            title="Please enter a valid phone number with country code (e.g., +1234567890)"
            name="your_number"
            placeholder="Your Mobile Number (include country code)"
            required
          />
          <textarea
            name="message"
            className="msg"
            rows="6"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={facebookIcon} alt="facebook" className="link" />
            <img src={twitterIcon} alt="twitter" className="link" />
            <img src={instagramIcon} alt="instagram" className="link" />
            <img src={youtubeIcon} alt="youtube" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
