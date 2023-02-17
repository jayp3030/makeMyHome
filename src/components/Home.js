import React from 'react'
import background from '../images/background.jpg'

export default function Home() {
  return (
    <>
     <div id='home'  className="py-4 d-flex" style={{ backgroundImage: `url(${background})`, height: "100vh", backgroundSize: 'cover' ,opacity:"1"}}>
                <div className='container py-4 my-auto h-25'>
                    <h1 className='text-center my-4 text-light display-1' style={{fontWeight:"600"}}>Find  Me A Home</h1>
                {/* <div className="input-group w-75 mx-auto ">
                    <input type="search" id="search"  className="form-control"  placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <button type="button" className="btn btn-primary" >search</button>
                </div> */}
                </div>
            </div>
    </>
  )
}
