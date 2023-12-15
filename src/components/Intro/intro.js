import React from "react";
import "./intro.css";
import { Link } from "react-scroll";
import hireme from "../../assests/hireme.png";
import me from "../../assests/portfolio-bg.png";
import pdf from "../../assests/OmSaiRamKurra3.pdf";

const Intro = () => {
  const openPDF = () => {
    const openedWindow = window.open(pdf, "_blank");

    if (openedWindow) {
      openedWindow.addEventListener("load", () => {
        window.alert(
          "PDF opened successfully! Please go to the contact section and contact me."
        );
      });
    } else {
      window.alert("Failed to open PDF.");
    }
  };

  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">
          I'm <span className="introName">Om Sai Ram</span> <br />
          Full Stack Developer & <br /> Website Designer
        </span>
        <p className="introPara">
          I am a Skilled Full Stack Developer & Web Designer with <br />{" "}
          experience in creating visually appealing and user friendly websites.
        </p>
        <Link>
          <button className="btn" onClick={openPDF}>
            <img src={hireme} alt="Hire" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={me} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
