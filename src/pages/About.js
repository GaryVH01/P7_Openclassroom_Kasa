import React from "react";
import Banner from "../components/Banner";
import "./About.css";
import Accordion from "../components/Accordion";
import data from "../assets/about.json";

const About = () => {
  return (
    <div className="about">
      <Banner src="./about.png" />
      {data.map((content, index) => (
        <Accordion
          key={index}
          title={content.title}
          description={content.description}
        />
      ))}
    </div>
  );
};

export default About;
