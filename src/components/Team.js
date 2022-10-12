import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";


const Team = () => {
    
    return (
        <>

            <div style={{
                overflow: 'hidden',

            }}>


                <header className="fixed-top" >
                    <section className="w3l-header-4">
                        <div className="container">

                            <Navbar />
                        </div>
                    </section>
                </header>

                <section className="w3l-main-slider" id="home" style={{
                    backgroundImage: "url('../assets/images/team-back.png')",
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

                <section className="container mt-2 mb-2">
                    <div className="row">
                        <div className="col-md-6" style={{
                            marginTop: '100px'
                        }}>

                            <div className="row teamtitle">
                                <p style={{
                                    color: '#000000',
                                    fontSize: '20px'
                                }}><b>Team</b></p>
                            </div>

                            <div className="row">
                                <div className="col-md-8 teamtextleft">
                                    <p className="" style={{
                                        color: '#000000',
                                    }}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-8 teamtextleft" >
                                    <p className="" style={{
                                        color: '#000000',
                                       
                                    }}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <img src="../assets/images/team-right.png" style={{
                                width: '100%'
                            }} />
                        </div>

                    </div>
                </section>

                <div className="container mt-2">
                    <div className="row justify-content-center text-center">
                        <div className="col-md-4">
                            <img src="../assets/images/s4.jpg" style={{
                                borderRadius: '50%',
                                width: '60%',
                                height: '30vh'
                            }} />
                            <br/>
                            <br/>
                            <p><b>John Doe</b></p>
                            <p style={{ lineHeight:'1%' }}>Chief Executive Officer</p>
                        </div>
                        <div className="col-md-4">
                            <img src="../assets/images/s4.jpg" style={{
                                borderRadius: '50%',
                                width: '60%',
                                height: '30vh'
                            }} />
                            <br/>
                            <br/>
                            <p><b>John Doe</b></p>
                            <p style={{ lineHeight:'1%' }}>Chief Executive Officer</p>
                        </div>
                        <div className="col-md-4">
                            <img src="../assets/images/s4.jpg" style={{
                                borderRadius: '50%',
                                width: '60%',
                                height: '30vh'
                            }} />
                             <br/>
                             <br/>
                            <p><b>John Doe</b></p>
                            <p style={{ lineHeight:'1%' }}>Chief Executive Officer</p>
                        </div>
                    </div>
                </div>

                <div className="container mt-5 mb-5">
                    <div className="row justify-content-center text-center">
                        <div className="col-md-4">
                            <img src="../assets/images/s4.jpg" style={{
                                borderRadius: '50%',
                                width: '60%',
                                height: '30vh'
                            }} />
                            <br/>
                            <br/>
                            <p><b>John Doe</b></p>
                            <p style={{ lineHeight:'1%' }}>Chief Executive Officer</p>
                        </div>
                        <div className="col-md-4">
                            <img src="../assets/images/s4.jpg" style={{
                                borderRadius: '50%',
                                width: '60%',
                                height: '30vh'
                            }} />
                            <br/>
                            <br/>
                            <p><b>John Doe</b></p>
                            <p style={{ lineHeight:'1%' }}>Chief Executive Officer</p>
                        </div>
                        <div className="col-md-4">
                            <img src="../assets/images/s4.jpg" style={{
                                borderRadius: '50%',
                                width: '60%',
                                height: '30vh'
                            }} />
                             <br/>
                             <br/>
                            <p><b>John Doe</b></p>
                            <p style={{ lineHeight:'1%' }}>Chief Executive Officer</p>
                        </div>
                    </div>
                </div>

                <Footer />

            </div>

        </>
    )
}
export default Team