import React from 'react'
import img1 from '../images/room1.jpg'
import img2 from '../images/room2.jpg'
import img3 from '../images/room3.jpg'

function Slider() {
  return (
    <div className='my-3 px-4'>
        <h2 className='text-center'>Recommended For You</h2>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner"  style={{height:'36rem'}}>
                <div className="carousel-item active">
                <img src={img1} style={{backgroundPosition:'center',height:'36rem'}} className="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h3 className='text-dark'>Motera</h3>
                    <p className='text-dark'>Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src={img2} style={{backgroundPosition:'center',height:'36rem'}} className="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h3 className='text-dark'>Chandkheda</h3>
                    <p className='text-dark'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src={img3} style={{backgroundPosition:'center',height:'36rem'}} className="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h3 className='text-dark'>Gota</h3>
                    <p className='text-dark'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default Slider
