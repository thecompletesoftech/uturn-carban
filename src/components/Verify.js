import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from './Footer'


const Verify = () => {

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
                {
                    index == 0 ? (<>
                        <div className="container">
                            <div className="row justify-content-center text-center mt-5 mb-2 verify-first-com">
                                <p style={{
                                    fontFamily: 'Inter',
                                    fontWeight: '500',
                                    fontSize: '25px',
                                }}>Welcome to  U’TURN CO2 Decarboniser</p>
                                <p >You may provide the certificate to view the verified certificate created  by the U’TURN on the credentials Ethereum blockchain</p>

                            </div>
                        </div>

                        <div className="row">
                            <img src="../assets/images/verify-right-img.png" style={{
                                width: '100%',
                                height: '200px',
                                marginLeft: '1200px'
                            }} />
                        </div>

                        <div className="container" style={{
                            marginTop: '-170px'
                        }}>
                            <div className="row mb-5 justify-content-center text-center verify-first-component">
                                <div className="card" style={{
                                    boxShadow: "0px 4px 10px 0px #00000040",
                                    // width: '50%',
                                    borderRadius: '15px'
                                }}>
                                    <div className="card-body">
                                        <input type="text" placeholder="Certificate ID" />

                                        <button
                                            onClick={() => setindex(1)}
                                            style={{
                                                backgroundColor: '#FFD80E',
                                                outline: 'none',
                                                border: 'none',
                                                borderRadius: '5px',
                                                width: '150px',
                                                padding: '5px',
                                                color: 'black'
                                            }}
                                        >
                                            <b style={{
                                                fontSize: '15px'
                                            }}>View Certificate</b>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <img src="../assets/images/left-flower-verify.png" style={{
                                width: '200px',
                                height: '200px',
                            }} />
                        </div>
                    </>) : (<>

                        <div className="container">
                            <div className="row justify-content-center text-center mt-5 mb-2">
                                <p style={{
                                    fontFamily: 'Inter',
                                    fontWeight: '500',
                                    fontSize: '25px',
                                }}>U’TURN Carbon Credits</p>
                            </div>
                        </div>

                        <div className="row">
                            <img src="../assets/images/verify-second-img.png" style={{
                                width: '250px',
                                height: '250px',
                                marginLeft: '1150px'
                            }} />
                        </div>

                        <div className="container" style={{
                            marginTop: '-200px'
                        }}>
                            <div className="row mb-5 justify-content-center verifycardreduce">
                                <div className="card" style={{
                                    boxShadow: '-4px 4px 10px 0px rgba(58, 58, 58, 0.25)',
                                    
                                    borderRadius: '10px'
                                }}>
                                    <div className="card-body">
                                        <div>
                                            <p style={{
                                                fontSize: '12px',
                                                color: 'rgba(94, 178, 63, 1)',
                                                fontFamily: 'Inter',
                                                fontStyle: 'normal',
                                                fontWeight: '600'
                                            }}>Business Owner</p>
                                            <p style={{
                                                marginTop: '-10px',
                                                fontSize: '12px',
                                                color: 'rgba(0, 0, 0, 1)'
                                            }}>Test1 Test1</p>
                                            <hr style={{
                                                marginTop: '-5px',

                                            }} />
                                        </div>

                                        <div>
                                            <div style={{
                                                backgroundColor: 'rgba(94, 178, 63, 1)',
                                                width: '50px',
                                                height: '67px',
                                                position: 'absolute',
                                                top: '0%',
                                                left: '83%',
                                                borderBottomLeftRadius: '30px',
                                                borderBottomRightRadius: '30px',
                                            }}>
                                                <img src="../assets/images/success-verify.png" style={{
                                                    width:'20px',
                                                    height:'20px',
                                                    marginTop:'5px',
                                                    marginLeft:'15px'
                                                }}/>

                                                <br/>

                                                <span style={{
                                                    color:'#ffffff',
                                                    fontSize:'10px',
                                                    marginLeft:'6px'
                                                }}>Verified</span>
                                                

                                                <img src="../assets/images/verify-round.png" style={{
                                                    width:'5px',
                                                    height:'5px',
                                                    marginLeft:'-20px',
                                                    marginTop:'25px'
                                                }}/>

                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <p style={{
                                                    fontSize: '12px',
                                                    color: 'rgba(94, 178, 63, 1)',
                                                    fontFamily: 'Inter',
                                                    fontStyle: 'normal',
                                                    fontWeight: '600'
                                                }}>Project Category</p>
                                                <p style={{
                                                    marginTop: '-10px',
                                                    fontSize: '12px',
                                                    color: 'rgba(0, 0, 0, 1)'
                                                }}>Test1 </p>
                                            </div>
                                            <div className="col-md-6">
                                                <p style={{
                                                    fontSize: '12px',
                                                    color: 'rgba(94, 178, 63, 1)',
                                                    fontFamily: 'Inter',
                                                    fontStyle: 'normal',
                                                    fontWeight: '600'
                                                }}>Department Link</p>
                                                <p style={{
                                                    marginTop: '-10px',
                                                    fontSize: '12px',
                                                    color: 'rgba(0, 0, 0, 1)'
                                                }}>R Carbon </p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <p style={{
                                                    fontSize: '12px',
                                                    color: 'rgba(94, 178, 63, 1)',
                                                    fontFamily: 'Inter',
                                                    fontStyle: 'normal',
                                                    fontWeight: '600'
                                                }}>Department Acronym</p>
                                                <p style={{
                                                    marginTop: '-10px',
                                                    fontSize: '12px',
                                                    color: 'rgba(0, 0, 0, 1)'
                                                }}>RC </p>
                                            </div>
                                            <div className="col-md-6">
                                                <p style={{
                                                    fontSize: '12px',
                                                    color: 'rgba(94, 178, 63, 1)',
                                                    fontFamily: 'Inter',
                                                    fontStyle: 'normal',
                                                    fontWeight: '600'
                                                }}>Department Link</p>
                                                <p style={{
                                                    marginTop: '-10px',
                                                    fontSize: '12px',
                                                    color: 'rgba(0, 0, 0, 1)'
                                                }}>raeex.com</p>
                                            </div>
                                        </div>

                                        <hr style={{ marginTop: '-5px' }} />

                                        <div className="row">
                                            <div className="col-md-6">
                                                <p style={{
                                                    fontSize: '12px',
                                                    color: 'rgba(94, 178, 63, 1)',
                                                    fontFamily: 'Inter',
                                                    fontStyle: 'normal',
                                                    fontWeight: '600'
                                                }}>Issuance Date</p>
                                                <p style={{
                                                    marginTop: '-10px',
                                                    fontSize: '12px',
                                                    color: 'rgba(0, 0, 0, 1)'
                                                }}>29 September 2022 </p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)
                }

                <Footer />

            </div>

        </>
    )
}

export default Verify