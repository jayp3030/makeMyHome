import React from 'react'
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white py-1 px-4 fixed-top" >
                <div className="container-fluid">
                    <a className="navbar-brand fs-3" href="#home">makeMyHome</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto fs-6">
                            <li className="nav-item">
                                <a className="nav-link text-dark " aria-current="page" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#about">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#contactUs" >Contact us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        </>
    )
}
