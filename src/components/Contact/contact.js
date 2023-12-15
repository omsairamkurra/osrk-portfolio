import React, { useRef } from "react";
import "./contact.css";
import walmart from "../../assests/walmart.png";
import adobe from "../../assests/adobe.png";
import microsoft from "../../assests/microsoft.png";
import facebook from "../../assests/facebook.png";
import facebookIcon from "../../assests/facebook-icon.png";
import twitterIcon from "../../assests/twitter.png";
import instagramIcon from "../../assests/instagram.png";
import LinkedInIcon from "../../assests/linkedin-icon.png";
import GithubIcon from "../../assests/github-icon.png";

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
          <a
            href="https://www.walmart.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={walmart} alt="Walmart" className="clientImg" />
          </a>
          <a
            href="https://www.adobe.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={adobe} alt="Adobe" className="clientImg" />
          </a>
          <a
            href="https://www.microsoft.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={microsoft} alt="Microsoft" className="clientImg" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="Facebook" className="clientImg" />
          </a>
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
            <a
              href="https://www.facebook.com/abhikurra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookIcon} alt="facebook" className="link" />
            </a>
            <a
              href="https://twitter.com/kurraomsairam1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitterIcon} alt="twitter" className="link" />
            </a>
            <a
              href="https://www.instagram.com/abhi__kurra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="instagram" className="link" />
            </a>
            <a
              href="https://github.com/omsairamkurra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GithubIcon} alt="Github" className="link" />
            </a>
            <a
              href="https://www.linkedin.com/in/omsairamkurra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedInIcon} alt="LinkedIn" className="linkedin" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
