import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';


const Navbar = () => {

    const [show, setShow] = useState(false);


    return (
        <>
            <header className="fixed-top" style={{
                backgroundImage: "url('../assets/images/Rectangle93.png')"
            }}>
                <section className="w3l-header-4">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <h1>
                                <NavLink className="navbar-brand" to="/">
                                    <img src="assets/images/U-Turn-removebg-preview.png" style={{
                                        width: '9rem'
                                    }} />
                                </NavLink>
                            </h1>

                            {/* 
                            <button
                                className="navbar-toggler collapsed"
                                data-toggle="collapse"
                                data-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                                onClick={() => setShow(!show)}
                            >
                                <span className="fa icon-expand fa-bars" />
                                <span className="fa icon-close fa-times" />
                            </button> 
                            */}

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">

                                <ul className="navbar-nav">
                                    <li class="nav-item dropdown" style={{ padding: "10px" }}>
                                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{
                                            color: 'black',
                                            fontSize: '12px',
                                            fontFamily: 'Inter',
                                            fontWeight: 600

                                        }}>About <IoIosArrowDown /></a>
                                        <div class="dropdown-menu">
                                            <NavLink to="/Whatweare" className="dropdown-item">Who we are</NavLink>
                                            <NavLink to="/Whatwedo" className="dropdown-item">What we do</NavLink>
                                            <NavLink to="/Governance" className="dropdown-item">Governance</NavLink>
                                        </div>
                                    </li>

                                    <li class="nav-item dropdown" style={{ padding: "10px" }}>
                                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
                                            style={{
                                                color: 'black',
                                                fontSize: '12px',
                                                fontFamily: 'Inter',
                                                fontWeight: 800
                                            }}>Projects <IoIosArrowDown /></a>
                                        <div class="dropdown-menu">
                                            <NavLink to="/Standard" className="dropdown-item">Standards & Programs</NavLink>
                                            <NavLink to="/Environment" className="dropdown-item">Environmental Solutions</NavLink>
                                            <NavLink to="" className="dropdown-item">Corporate & Sustainability</NavLink>
                                        </div>
                                    </li>

                                    <li style={{ padding: "10px" }} class="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href=""
                                            style={{
                                                color: 'black',
                                                fontSize: '12px',
                                                fontFamily: 'Inter',
                                                fontWeight: 800
                                            }}>
                                            Solutions <IoIosArrowDown />
                                        </a>
                                        <div class="dropdown-menu">
                                            <NavLink to="/Reduce" className="dropdown-item">Reduce Your Carbon Footprint</NavLink>
                                            <NavLink to="/Offset" className="dropdown-item">Offset Your Emission</NavLink>
                                            <NavLink to="/Certify" className="dropdown-item">Certify A Project</NavLink>
                                            <NavLink to="/Verify" className="dropdown-item">Verify Your Certificate</NavLink>
                                        </div>
                                    </li>
                                    <li style={{ padding: "10px" }} class="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href=""
                                            style={{
                                                color: 'black',
                                                fontSize: '12px',
                                                fontFamily: 'Inter',
                                                fontWeight: 800
                                            }}>
                                            Resources <IoIosArrowDown />
                                        </a>
                                        <div class="dropdown-menu">
                                            <NavLink to="" className="dropdown-item">Standard Documents</NavLink>
                                            <NavLink to="" className="dropdown-item">Certified Carbon Credits (CCU)</NavLink>
                                            <NavLink to="" className="dropdown-item">Project Auditing</NavLink>
                                            <NavLink to="" className="dropdown-item">Project Development Methedolig</NavLink>
                                            <NavLink to="" className="dropdown-item">Complaints & Appeals</NavLink>
                                            <NavLink to="" className="dropdown-item">Facts About Carbon Emission</NavLink>
                                            <NavLink to="" className="dropdown-item">FAQs</NavLink>
                                        </div>
                                    </li>
                                    <li style={{ padding: "10px" }} className="nav-item @@contact__active">
                                        <NavLink to="/Contact" className="nav-link" style={{
                                            color: 'black',
                                            fontSize: '12px',
                                            fontFamily: 'Inter',
                                            fontWeight: 600
                                        }}>
                                            Contact
                                        </NavLink>
                                    </li>
                                </ul>

                                <ul className="navbar-nav search-right mt-lg-0 mt-2">

                                    <li className="nav-item">
                                        <a href="" className="btn btn-primary d-none d-lg-block btn-style mr-3"
                                            style={{
                                                backgroundColor: '#FFD80E',
                                                outline: 'none',
                                                border: 'none',
                                                color: 'black'
                                            }}
                                        >
                                            <NavLink to="/Login" style={{
                                                textDecoration: 'none',

                                            }}> <b style={{
                                                color: 'black'
                                            }}>Login</b></NavLink>

                                        </a>
                                    </li>
                                </ul>



                            </div>



                        </nav>
                    </div>
                </section>
            </header>
        </>
    )



}

export default Navbar