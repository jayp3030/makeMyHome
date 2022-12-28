import React from 'react'
import pgImage from '../images/pgImage.jpg'
import roomsImage from '../images/roomsImage.jpg'
import tiffinImage from '../images/tiffinImage.jpg'
export default function Services() {
  return (
    <>
    <h1 id='services' className='text-center my-4 fs-1'>Our Services</h1>
    <div className='container row text-center d-flex justify-content-between mx-auto my-4 py-4'>
    <div className="card mx-auto " style={{width: "22rem",border:"none"}}>
  <img src={pgImage} className="card-img-top" alt="PGs" style={{height:"20rem" }}/>
  <div className="card-body">
    <h5 className="card-title">Paying guest</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Explore Now</a>
  </div>
</div>
<div className="card mx-auto" style={{width: "22rem",border:"none"}}>
  <img src={roomsImage} className="card-img-top" alt="..." style={{height:"20rem" }} />
  <div className="card-body">
    <h5 className="card-title">Room on rent</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Explore Now</a>
  </div>
</div>
<div className="card mx-auto" style={{width: "22rem",border:"none"}}>
  <img src={tiffinImage} className="card-img-top" alt="..." style={{height:"20rem" }} />
  <div className="card-body">
    <h5 className="card-title">Tiffin service</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Explore Now</a>
  </div>
</div>
</div>
</>
  )
}
