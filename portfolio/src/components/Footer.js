import React from "react";
import "../styles.css";

const Footer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h4 className="h4 my-5">
            Got A Project? <br /> Lets Talk...
            <div>
              <p>
                <span className="line1"></span>
                <span className="line1"></span>
              </p>
            </div>
          </h4>
          <button type="button" className="btn btn-link">
            maleena.sohail@gmail.com →
          </button>
        </div>
        <div className="col-6 my-5">
          <h5 className="my-5">
            Estimate your project.
            <br />
            Let me know here...
          </h5>
          <div className="col-6">
            <button className="accordion my-1">let me know your name.</button>
            <br />
            <div className="panel">
              <p></p>
            </div>
            <button className="accordion my-1">
              let me know your Email-id
            </button>
            <br />
            <div className="panel">
              <p></p>
            </div>
            <button className="accordion my-1">
              Tell me about your Project 🔗 →
            </button>
            <br />
            <div className="panel">
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <img
        src="https://th.bing.com/th/id/OIP.GTD_40r4dGx389taBH-zVwHaEy?w=304&h=196&c=7&r=0&o=5&pid=1.7"
        alt="..."
        className="logo1 my-5"
      />
    </div>
  );
};

export default Footer;
