import React from "react";

import "./section3.css";

function Section3() {
  return (
    <div className="s3">
      <h1 className="title3">You Will Learn How To</h1>
      <div className="middle3">

        <div className="miditem">
          <h3>
            Use Instagram & <br /> Facebook to increase <br /> conversions
          </h3>
          <h1 style={{color:'red'}}>01</h1>
        </div>

        <div className="miditem">
          <h3>
            Improve your <br /> brand awareness
            <br /> using analytics
          </h3>
          <h1 style={{color:'purple'}}>02</h1>
        </div>

        <div className="miditem">
        <h3>
        Design marketing <br /> materials that <br /> drive sales</h3>
          <h1 style={{color:'skyblue'}}>03</h1>
        </div>

      </div>
      <button className="reserveme">Reserve My Spot</button>

    </div>
  );
}

export default Section3;
