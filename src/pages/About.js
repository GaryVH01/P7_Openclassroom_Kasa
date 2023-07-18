import React from "react";
import Banner from "../components/Banner";
import "./About.css";
import Accordion from "../components/Accordion";
import data from "../assets/about.json";

const About = () => {
  return (
    <div className="about">
      <Banner src="./about.png" />
      <div className="sectionAccordion">
        {data.map((content, index) => (
          <Accordion
            key={index}
            title={content.title}
            description={content.description}
            itemCss="accordionItemAbout"
            contentCss="accordionContentAbout"
          />
        ))}
      </div>
    </div>
  );
};

export default About;
