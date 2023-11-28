import React from 'react'
import  "../styles.css"

const Card = () => {
  return (
    <div>
        <div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <p className='context'>--Context</p>
        <h5 className="card-title1">Any type of query <br/>& discussion</h5>
        <p className="card-text1">With supporting text below<br/> as a natural lead-in to additional content.</p>
        <button type="button" className="btn btn-link">xxx.com →</button>

      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title1">You can't use up creativity</h5>
        <p className="card-text1">the more you use,<br/>more you have in your significant mind.
        <span><h2 className='number'>14</h2></span>
        <span className='small'>years of experience</span><span><h2 className='number'>187</h2></span><span className='small'>Satisfied clients</span></p>
     
      </div>
    </div>
  </div>
</div>
<div className='row mx-5'>
  <div className='col-3 mx-4'>
<div className="card1 text-white bg-warning mb-3" >
  <div className="card-body">
    <h5 className="card-title1 my-5">Product<br/>Designer</h5>
    <p className="card-text1"></p>
  </div>
</div>
</div>
<div className='col-3 mx-4'>
<div className="card2 text-white bg-secondary mb-3" >
  <div className="card-body">
    <h5 className="card-title1 my-5">Branding Designer</h5>
    <p className="card-text1"></p>
  </div>
</div>
</div>
<div className='col-3 mx-4'>
<div className="card1 text-white bg-secondary mb-3" >
  <div className="card-body">
    <h5 className="card-title1 my-5">Full Stack Developer</h5>
    <p className="card-text1"></p>
  </div>
</div>
</div>
</div>
    </div>
  )
}

export default Card