import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from './Footer'


const Contact = () => {

    const [index, setindex] = useState(0)

    return (
        <>

            <div style={{
                overflow: 'hidden',

            }}>

                <header className="fixed-top">
                    <section className="w3l-header-4">
                        <div className="container">
                            <Navbar />
                        </div>
                    </section>
                </header>

                <section className="w3l-main-slider" style={{
                    backgroundImage: "url('../assets/images/Verify-back.png')",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}>
                    <div className="" >
                        <div className="">
                            <div className="item">
                                <li>
                                    <div className="slider-info banner-view bg bg2">
                                        <div className="banner-info">
                                        </div>
                                    </div>
                                </li>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className="row justify-content-center mt-5">

                        <div className="col-md-1"></div>

                        <div className="col-md-7">
                            <h3 style={{
                                fontFamily: 'Inter',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                fontSize: '20px',
                                color: '#000000',
                                marginBottom: '10px'
                            }}>Contact</h3>

                            <div className="form-group">
                                <lable>First Name</lable>
                                <input type="" className="form-control mt-1 input-sm" />
                            </div>

                            <div className="form-group">
                                <lable>Last Name</lable>
                                <input type="" className="form-control mt-1 input-sm" />
                            </div>

                            <div className="form-group">
                                <lable>Company</lable>
                                <input type="" className="form-control mt-1 input-sm" />
                            </div>

                            <div className="form-group">
                                <lable>Job Title</lable>
                                <input type="" className="form-control mt-1 input-sm" />
                            </div>

                            <div className="form-group">
                                <lable>Country</lable>
                                <input type="" className="form-control mt-1 input-sm" />
                            </div>

                            <div className="form-group">
                                <lable>Phone</lable>
                                <input type="" className="form-control mt-1 input-sm" />
                            </div>

                            <div className="form-group">
                                <lable>Email</lable>
                                <input type="" className="form-control mt-1 input-sm" />
                            </div>

                            <div className="form-group">
                                <lable>Comments</lable>
                                <input type="" className="form-control mt-1 input-sm" />
                            </div>
                            <a
                                href="#features"
                                className=""
                                style={{
                                    textDecoration: 'none',
                                    width: '300px',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    color: '#000000',
                                    fontSize: '17px',
                                    fontWeight: '400',
                                    border: 'none',
                                    backgroundColor: '#FFD80E',
                                    outline: 'none'
                                }}

                            >
                                submit
                            </a>

                        </div>

                        <div className="col-md-1"></div>

                    </div>
                    <br />
                    <br />
                    <br />
                </div>


                <div className="row" style={{
                    float: 'right',
                    marginTop: '-140px',
                    marginLeft: '110px',
                    zIndex:'-1'
                }}>
                    <img src="../assets/images/left-flower-verify-rb.png"
                        style={{
                            width: '200px',
                            height: '200px',
                        }} />
                </div>



                <Footer />

            </div>

        </>
    )
}

export default Contact