import React from "react";
import "../styles.css";

const Accordian = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h4>
              Whats New? <br /> My Blogs & News...
            </h4>
            <p className="blogbody">
              "Blogging is good for your career. A well-executed blog sets you
              apart as an expert in your field."
              <br /> <span className="name">– Penelope Trunk</span>
            </p>
          </div>
          <div className="col-2"></div>
          <div className="col-6">
            <button class="accordion">
              <span className="small">3rd Nov</span>&nbsp;&nbsp;My Blog 1
            </button>
            <div class="panel">
              <p>Road Map to Full Stack Development →</p>
            </div>

            <button class="accordion">
              <span className="small">13rd Nov</span>&nbsp;&nbsp;My Blog 2
            </button>
            <div class="panel">
              <p>Keeping ourselve updated →</p>
            </div>

            <button class="accordion">
              <span className="small">23rd Nov</span>&nbsp;&nbsp;My Blog 3
            </button>
            <div class="panel">
              <p>Learning New Tech Stacks →</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
