import React from 'react'

export default function ContactUs() {
    return (
        <>
            <div className='container w-50'>
                <h2 className='text-center my-4'>Contact us</h2>
                <form>
                <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Message</label>
                        <textarea  rows="4" cols="50" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <div className='socialIcons container mx-auto text-center my-4'>

                <i class="bi bi-facebook mx-4 fs-1"></i>
                <i class="bi bi-whatsapp mx-4 fs-1"></i>
                <i class="bi bi-instagram mx-4 fs-1"></i>
                </div>
            </div>
        </>
    )
}
