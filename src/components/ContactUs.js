import React from 'react'

export default function ContactUs() {
    return (
        <>
            <div id='contactUs' className='container w-75'>
                <h2 className='text-center my-4'>Contact us</h2>
                <form>
                <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
                        <textarea  rows="4" cols="50" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <div className='socialIcons container mx-auto text-center my-4'>

                <i className="bi bi-facebook mx-2 fs-1"></i>
                <i className="bi bi-whatsapp mx-2 fs-1"></i>
                <i className="bi bi-instagram mx-2 fs-1"></i>
                </div>
            </div>
        </>
    )
}
