import React from "react";
import "./works.css";
import pic1 from "../../assests/portfolio-1.png";
import pic2 from "../../assests/portfolio-2.png";
import pic3 from "../../assests/portfolio-3.png";
import pic4 from "../../assests/portfolio-4.png";
import pic5 from "../../assests/portfolio-5.png";
import pic6 from "../../assests/portfolio-6.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        I take pride in paying attention to the smallest details and making sure
        that my work is pixel perfect. I am excited to bring my skills and
        experience to help business achieve their goals and create a strong
        online presence.
      </span>
      <div className="worksImgs">
        <img src={pic1} alt="work" className="worksImg" />
        <img src={pic2} alt="work" className="worksImg" />
        <img src={pic3} alt="work" className="worksImg" />
        <img src={pic4} alt="work" className="worksImg" />
        <img src={pic5} alt="work" className="worksImg" />
        <img src={pic6} alt="work" className="worksImg" />
      </div>
      <button className="workBtn">See More</button>
    </section>
  );
};

export default Works;
