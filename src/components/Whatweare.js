import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Whatweare = () => {

    return (
        <>
            <div style={{
                overflow: 'hidden',
            }}>
                <Navbar />

                <section className="w3l-main-slider" style={{
                    backgroundImage: "url('../assets/images/Who-We-Are.png')",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}>
                    <div className="">
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


                <section className="w3l-aboutblock1">
                    <div className="midd-w3">

                        <div className="row mt-5" style={{
                            paddingLeft: '40px',
                            paddingRight: '40px'
                        }}>
                            <div className="col-md-6">
                                <div className="position-relative" >
                                    <img
                                        src="assets/images/whoweare-com-img.png"
                                        alt=""
                                        className="radius-image img-fluid"
                                        style={{
                                            width: '500px',
                                            height: '500px'
                                        }}
                                    />

                                </div>
                            </div>
                            <div className="col-md-6 mb-lg-0 mb-md-5 mb-5 align-self whatwearetextleft">
                                <h3 className="title-big mx-0">
                                    <b> Who <span style={{
                                        color: '#5EB23F'
                                    }}>we are?</span></b>
                                </h3>

                                <br />

                                <span className="mt-md-4" style={{
                                    color: 'black',
                                    width: '500px'
                                }}>
                                    U-Turn was founded by a team of techies who thought of a solution to safe guard this planet and environment.  The team developed and prepared extensive emission reduction ways and strategies that turn climate action into long-term business opportunities for companies, governments organisations and what not which not only target any specific but around the globe.
                                    {" "}
                                </span>

                                <br />
                                <br />

                                <span className="mt-md-4" style={{
                                    color: 'black'
                                }}>
                                    We might survive if planet will, At U-Turn, we work with businesses & governments across the globe. We help realise deep decarbonisation pathways across industries, based on a thorough understanding of climate risks and opportunities in specific sectors, as well as the highest emission reduction standards.
                                    {" "}
                                </span>

                            </div>
                        </div>

                    </div>
                </section>

                <div className="row">

                    <span className="mt-md-4 justify-content-center pl-5 pr-5" style={{
                        color: 'black'
                    }}>
                        Our concept of idea is niche as we have created a fusion of combining the long hectic and opaque carbon credit distribution, management, tracking and auditing with utmost secure and immutable technology by recording everything on blockchain.
                        {" "}
                    </span>

                </div>

                <section className="w3l-aboutblock1">
                    <div className="midd-w3">

                        <div className="row" style={{
                            paddingLeft: '40px',
                            paddingRight: '40px'
                        }}>
                            <div className="col-md-6 mb-lg-0 mb-md-5 mb-5 align-self moverightside">
                                <h3 className="title-big mx-0">
                                    <b> The <span style={{
                                        color: '#5EB23F'
                                    }}>Organization</span></b>
                                </h3>

                                <br />

                                <span className="mt-md-4" style={{
                                    color: 'black',
                                    width: '500px'
                                }}>
                                    U-Turn was founded in 2021 by team of techies how are enthusiast for saving this world and business leaders who saw the need for greater quality assurance in voluntary carbon markets. We are in process to move ahead with this noble cause of nurturing this world again with reduce emmission using  various standards, we are into developing programs we can manage, as well as an incubator of new ideas that can generate meaningful environmental and social value at scale. The objective of U-Turn is clear to safeguard the globe. Out head office is located in US and our global team is working remotely.
                                    {" "}
                                </span>

                                <br />
                                <br />

                                <span className="mt-md-4" style={{
                                    color: 'black'
                                }}>
                                    Our golabal audit team is making an impact over industry released carbon emmission through proper monitoring and providing consulting regarding the reduction ways. Also, our global standards for tracking and providing carbon utilisation credits not only appraise the one’s who are making and effort for the offset and doing their good but also keeping a balance of 1:1 offset to reduction.
                                    {" "}
                                </span>

                            </div>
                            <div className="col-md-6">
                                <div className="position-relative" >
                                    <img
                                        src="assets/images/whoweare-second-right-img.png"
                                        alt=""
                                        className="radius-image img-fluid"
                                        style={{
                                            width: '500px',
                                            height: '500px'
                                        }}
                                    />

                                </div>
                            </div>

                        </div>

                    </div>
                </section>


                <Footer />

            </div>

        </>
    )

}

export default Whatweare