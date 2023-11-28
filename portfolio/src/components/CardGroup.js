import React from "react";
import OIP from "./OIP.jpg"
import OIP1 from "./img1.jpg"
import OIP2 from "./img2.jpg"

const CardGroup = () => {
  return (
    <div className="container my-5">
      <div className="row my-5 ">
        <div className="texty col-3">
          <h3>My creative work selected Projects</h3>
        <p className="card-text1">Skilled in JavaScript, HTML/CSS, MongoDB, Node.js and React.js to build<br/> progressive web applications and web services. </p>
        <br/><br/>
        <button type="button" class="btn btn-link">Know More →</button>
        </div>
        <div className="col-4">
          <div className="box1">
            <h5>TODO- lIST</h5>
            <img src={OIP} alt="..." className="image" />
          </div>
        </div>
        <div className="col-4">
          <div className="box2">
          <h5>E-COMMERCE WEBSITE</h5>
            <img src={OIP1} alt="..." className="image1" />
          </div>

          <div className="box3">
          <h5>MOVIE BOOKING APP</h5>
            <img src={OIP2} alt="..." className="image2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGroup;
