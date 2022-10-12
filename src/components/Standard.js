import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Standard = () => {
    return (
        <>
            <div style={{
                overflow: 'hidden',
            }}>
                <Navbar />


                <section className="w3l-main-slider" id="home" style={{
                    backgroundImage: "url('../assets/images/Standards-and-Programms.png')",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}>
                    <div className="" >
                        <div className="">
                            <div className="item">
                                <li>
                                    <div className="slider-info banner-view bg bg2">
                                        <div className="banner-info">
                                            <div className="container">

                                            </div>
                                        </div>

                                    </div>
                                </li>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className="row pl-5" style={{
                        marginTop: '70px'
                    }}>
                        <h3 className="title-big mx-0">
                            <b style={{
                                fontSize: '19px'
                            }}> U’turn for the <span style={{
                                color: '#5EB23F'
                            }}>Global Goals</span></b>
                        </h3>
                    </div>
                </div>


                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-5">
                            <div className="position-relative">
                                <img
                                    src="assets/images/stand-p-img1.png"
                                    alt=""
                                    style={{
                                        width: '100%'
                                    }}
                                />
                            </div>
                        </div>

                        <div className="col-md-7 mb-lg-0 mb-md-5 mb-5 align-self">
                            <div className="row firsttextleft">
                                <div className="col-md-8">
                                    <p className="mt-md-1" style={{
                                        color: '#000000',
                                    }}>
                                        U-Turn for the Global Goals customises safeguards, requirements, and methodologies to measure and verify impact on a wide range of activities -- from climate protection projects seeking to issue carbon credits to corporate supply chain interventions to national or subnational programmes looking for the most credible claims for their impact reporting.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

              
                <div className="flower-right">  
                    <img src="../assets/images/whoweare-right-img-rb.png" />
                </div>
              

                <div className="row mt-5 justify-content-center seconcom">
                    <img src="../assets/images/standard-c-img.png"  style={{
                        width: '50rem',
                    }} />
                </div>

                <div className="flower-left">
                    <img src="../assets/images/stand-flower-rb.png" />
                </div>

                <div className="row lastcom justify-content-center text-left fouthcom">
                    <h3 className="title-big">
                        <b style={{
                            fontSize: '19px'
                        }}> Digitising certification to  <span style={{
                            color: '#5EB23F'
                        }}>lower costs + complexity</span></b>
                    </h3>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="succes-img">
                                <img
                                    src="assets/images/stand-success.png"
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="col-md-8 mb-lg-0 mb-md-5 mb-5 align-self">
                            <div className="row">
                                <div className="col-md-8 img1">
                                    <p className="mt-md-1" style={{
                                        color: '#000000',
                                    }}>
                                        U-Turn partners with SustainCERT to streamline monitoring, reporting and verification with a goal of digitising the certification process by introducing new IT systems to improve impact data quality, reduce the time and costs of project development and certification, and enhance developers' ability to communicate about project impact and connect with funders.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>




                <div className="row">
                    <img src="../assets/images/stand-bottom-img.png" style={{
                        width: '100%',
                        height: '100px'
                    }} />
                </div>


                <Footer />

            </div>
        </>
    )
}

export default Standard