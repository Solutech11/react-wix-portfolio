import React from "react";
import "./section4.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoPlay from "react-awesome-slider/dist/autoplay";
function Section4() {
  const AutoplaySlider = withAutoPlay(AwesomeSlider);
  return (
    <div className="main4">
      <h2>What People Say</h2>
      <AutoplaySlider color="#a7d1d4" className="slider" play interval={3000}>
        <div className="slides">
          <h1>"</h1>
          <div className="slidesInside">
            <p className="maintext">
              I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services.
            </p>
            <p className="author">
              <strong>Sam Price,</strong> CA
            </p>
          </div>
        </div>
        <div className="slides">
          <h1>"</h1>
          <div className="slidesInside">
            <p className="maintext">
              I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services.
            </p>
            <p className="author">
              <strong>Natalie Frank, </strong> NYC
            </p>
          </div>
        </div>
        <div className="slides">
          <h1>"</h1>
          <div className="slidesInside">
            <p className="maintext">
              I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services.
            </p>
            <p className="author">
              <strong>Nina Dean, </strong> TX
            </p>
          </div>
        </div>
      </AutoplaySlider>
    </div>
  );
}

export default Section4;
