import React from "react";
import Banner from "components/Banner";
import "./style.css";
import Accordion from "components/Accordion";
import data from "assets/about.json";

const About = () => {
  return (
    <div className="about">
      <Banner src="./about.png" />
      <div className="sectionAccordion"> {/** On map sur le tableau de données du fichier about.json pour injecter les données avec les props */}
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
