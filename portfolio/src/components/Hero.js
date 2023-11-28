import React from 'react'
import "../styles.css"
import image from "../image.png"
const Hero = () => {
  return (
    <div className='Hero-black'>
        <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <h5 className="card-title">Maleena</h5>
      <div className='line'></div>
      <img src={image} className="img-fluid rounded-start" alt="..."/>
              

    </div>
    <div className="col-md-8">
      <div className="card-body">
       <h5> <p className="card-text">Product Designer and Developer<br/> Based in Hyderabad.</p></h5>
        <p className="card-text1">Skilled in JavaScript, HTML/CSS, MongoDB, Node.js and React.js to build<br/> progressive web applications and web services. </p>
        <br/><br/>
        <button type="button" class="btn btn-link">My Story →</button>

      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Hero