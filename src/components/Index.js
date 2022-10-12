import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './indes.css';
import { AnimatedOnScroll } from "react-animated-css-onscroll";

const Index = () => {

    const videoEl = useRef(null);

    const attemptPlay = () => {
        videoEl &&
            videoEl.current &&
            videoEl.current.play().catch(error => {
                console.error("Error attempting to play", error);
            });
    };

    useEffect(() => {
        attemptPlay();
    }, []);


    return (
        <>
            <div style={{
                overflowX: 'hidden'
            }}>

                <Navbar />

                <section className="w3l-main-slider">

                    <video
                        playsInline
                        loop
                        muted
                        alt="All the devices"
                        src="../assets/video/homepage-video.webm"
                        ref={videoEl}

                        id="video"
                    />


                    <div className="">
                        <div className="">
                            <div className="item">
                                <li>
                                    <div className="slider-info banner-view bg bg2">
                                        <div class="row">
                                            {/* <div class="col-md-1"></div> */}
                                            <div class="col-md-4 moveleft">
                                                <div className="banner-info">
                                                    <div className="container">
                                                        <div className="banner-info-bg">
                                                            <h6 >A HIGHER STANDARD </h6>
                                                            <h5>for a climate secure and sustainable world</h5>
                                                            <p className="mt-md-3 mt-3">
                                                                Gold standard for the Global Goals sets the
                                                                standard for climate and development interventions to
                                                                quantify, certify and maximise there impact -- creating value
                                                                for people around the world and the planet we share.{" "}
                                                            </p>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>


                                        </div>


                                        <NavLink to="/dashboard">
                                            <div className="right-dashboard-img">

                                            <div className="blinking-yellow"></div>



                                                <div className="dashboard-img">
                                                    <img src="../assets/images/dashboard.png"
                                                        className="btn-aqa"
                                                    />
                                                </div>

                                                <div className="dashboard-text">
                                                    <div className="pt-2 pl-2">
                                                        <div className="row">
                                                            <div className="col-md-10">
                                                                <p>Check Air Quality Of Your City</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <div className="arrow-btn">
                                                                    <img src="../assets/images/double-arrow.png" style={{
                                                                        width: '20px',
                                                                        height: '20px'
                                                                    }} />
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </NavLink>
                                    </div>
                                </li>
                            </div>
                        </div>
                    </div>
                </section>

                
                <div className=" py-lg-0 py-2">
                            <div className="row">
                                <div className="col-md-6 mb-lg-0 mb-md-5 mb-5 align-self" id="textset">
                                    <AnimatedOnScroll animationIn="bounceInRight" delay={20000}>
                                        <h3 className="title-big mx-0 ">
                                            <b>Measure, Reduce, Offset.</b>
                                        </h3>
                                        <p className="mt-md-4 mt-3 slide-text" style={{
                                            color: '#000000'
                                        }}>
                                            By being conscious of the choices you make and their effects on the environment, you can reduce your own carbon footprint and offset your unavoidable emissions to support the transition to a low-carbon sustainable future.

                                            {" "}
                                        </p>
                                        <a
                                            href="#features"
                                            className="btn btn-primary off-setting-style mt-md-5 mt-4 mr-2"
                                            style={{
                                                textTransform: 'uppercase',
                                                color: '#000000',
                                                fontSize: '17px',
                                                fontWeight: '600',
                                                border: 'none',
                                                backgroundColor: '#FFD80E',
                                                outline: 'none'
                                            }}
                                        >
                                            OFFSETTING 101 GUIDE
                                        </a>
                                    </AnimatedOnScroll>
                                </div>

                                <div className="col-md-5" id="movetext">
                                    <AnimatedOnScroll animationIn="bounceInLeft" delay={20000}>
                                        <div id="bgcolor"
                                        >
                                            <img
                                                src="assets/images/about.jpg"
                                                alt=""
                                                className="img-fluid"
                                                style={{
                                                    opacity: '0.2',
                                                }}
                                            />
                                            <p
                                            >Climate +</p>
                                        </div>
                                    </AnimatedOnScroll>
                                </div>
                            </div>
                </div>
                   



                <section className="" id="about">
                    <div>
                        <div className="py-lg-5" style={{
                            background: '#FEF9DC'

                        }}>
                            <div className="row justify-content-center text-center">
                                <p

                                    id="gotext"

                                    style={{
                                        fontSize: '30px',
                                        lineHeight: '50px',
                                        marginTop: '10px'
                                    }}><b>Go Climate Positive</b></p>

                            </div>


                            <div className="row justify-content-center pr-1 pl-3">
                                <p
                                    style={{
                                        marginTop: '-15px',
                                        maxWidth: '800px',
                                        lineHeight: '25px'
                                    }}>We all have a role to play in the fight against climate change. Our actions,
                                    however small, can have a profound impact when combined with thousands of others wanting to make a difference.</p>
                            </div>

                            <div className="row justify-content-center text-center mt-5">

                                <div className="col-md-4">
                                    <div >
                                        <img src="../assets/images/Vector-green.png" className="one" />
                                        <br />
                                        <span style={{
                                            lineHeight: '50px'
                                        }}>Climate Concious Changes</span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div id="one">
                                        <img src="../assets/images/Vector-gray.png" />
                                        <br />
                                        <span style={{
                                            lineHeight: '50px'
                                        }}>Business As Usual</span>
                                    </div>
                                </div>


                                <div className="row justify-content-center text-center mt-5" >
                                    <div className="col-md-4 " id="go-climate-position">
                                        <table >

                                            <tr>
                                                <td style={{ padding: '8px' }}>
                                                    <span style={{
                                                        fontSize: '12px'
                                                    }}>Drink only tap water</span>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div style={{
                                                        borderLeft: '1px solid gray',
                                                        height: '40px'
                                                    }}></div>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div><img src="../assets/images/Vector-glass.png" style={{
                                                        width: '13px',
                                                        height: '13px'
                                                    }} /></div>
                                                </td>
                                                <td>
                                                    <div style={{ padding: '8px', fontSize: '14px', color: 'black' }}><b>0</b></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ padding: '8px' }}>
                                                    <span style={{
                                                        fontSize: '12px'
                                                    }}>A weekend newspaper - recycled</span>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div style={{
                                                        borderLeft: '1px solid gray',
                                                        height: '40px'
                                                    }}></div>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div><img src="../assets/images/vector-second.png" style={{
                                                        width: '13px',
                                                        height: '13px'
                                                    }} /></div>
                                                </td>
                                                <td>
                                                    <div style={{ padding: '8px', fontSize: '14px', color: 'black' }}><b>94</b></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ padding: '8px' }}>
                                                    <span style={{
                                                        fontSize: '12px'
                                                    }}>Buy produce - local + Seasonal</span>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div style={{
                                                        borderLeft: '1px solid gray',
                                                        height: '40px'
                                                    }}></div>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div><img src="../assets/images/vector-third.png" style={{
                                                        width: '13px',
                                                        height: '13px'
                                                    }} /></div>
                                                </td>
                                                <td>
                                                    <div style={{ padding: '8px', fontSize: '14px', color: 'black' }}><b>2</b></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ padding: '8px' }}>
                                                    <span style={{
                                                        fontSize: '12px'
                                                    }}>Take a shower</span>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div style={{
                                                        borderLeft: '1px solid gray',
                                                        height: '40px'
                                                    }}></div>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div><img src="../assets/images/vector-fourth.png" style={{
                                                        width: '13px',
                                                        height: '13px'
                                                    }} /></div>
                                                </td>
                                                <td>
                                                    <div style={{ padding: '8px', fontSize: '14px', color: 'black' }}><b>183</b></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ padding: '8px' }}>
                                                    <span style={{
                                                        fontSize: '12px'
                                                    }}>Dishwasher at 550C</span>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div style={{
                                                        borderLeft: '1px solid gray',
                                                        height: '40px'
                                                    }}></div>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div><img src="../assets/images/vector-five.png" style={{
                                                        width: '13px',
                                                        height: '13px'
                                                    }} /></div>
                                                </td>
                                                <td>
                                                    <div style={{ padding: '8px', fontSize: '14px', color: 'black' }}><b>80</b></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ padding: '8px' }}>
                                                    <span style={{
                                                        fontSize: '12px'
                                                    }}>Take a train or bus</span>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div style={{
                                                        borderLeft: '1px solid gray',
                                                        height: '40px'
                                                    }}></div>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div><img src="../assets/images/vector-six.png" style={{
                                                        width: '13px',
                                                        height: '13px'
                                                    }} /></div>
                                                </td>
                                                <td>
                                                    <div style={{ padding: '8px', fontSize: '14px', color: 'black' }}><b>1800</b></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ padding: '8px' }}>
                                                    <span style={{
                                                        fontSize: '12px'
                                                    }}>Wash at 300C - dry on the line</span>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div style={{
                                                        borderLeft: '1px solid gray',
                                                        height: '40px'
                                                    }}></div>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div><img src="../assets/images/vector-seven.png" style={{
                                                        width: '13px',
                                                        height: '13px'
                                                    }} /></div>
                                                </td>
                                                <td>
                                                    <div style={{ padding: '8px', fontSize: '14px', color: 'black' }}><b>62</b></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ padding: '8px' }}>
                                                    <span style={{
                                                        fontSize: '12px'
                                                    }}>Low energy bulb</span>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div style={{
                                                        borderLeft: '1px solid gray',
                                                        height: '40px'
                                                    }}></div>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div><img src="../assets/images/vector-eight.png" style={{
                                                        width: '13px',
                                                        height: '13px'
                                                    }} /></div>
                                                </td>
                                                <td>
                                                    <div style={{ padding: '8px', fontSize: '14px', color: 'black' }}><b>90</b></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ padding: '8px' }}>
                                                    <span style={{
                                                        fontSize: '12px'
                                                    }}>Plant based diet</span>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div style={{
                                                        borderLeft: '1px solid gray',
                                                        height: '40px'
                                                    }}></div>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div><img src="../assets/images/vector-nine.png" style={{
                                                        width: '13px',
                                                        height: '13px'
                                                    }} /></div>
                                                </td>
                                                <td>
                                                    <div style={{ padding: '8px', fontSize: '14px', color: 'black' }}><b>1391</b></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ padding: '8px' }}>
                                                    <span style={{
                                                        fontSize: '12px'
                                                    }}>A weekend newspaper - recycled</span>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div style={{
                                                        borderLeft: '1px solid gray',
                                                        height: '40px'
                                                    }}></div>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div><img src="../assets/images/vector-ten.png" style={{
                                                        width: '13px',
                                                        height: '13px'
                                                    }} /></div>
                                                </td>
                                                <td>
                                                    <div style={{ padding: '8px', fontSize: '14px', color: 'black' }}><b>94</b></div>
                                                </td>
                                            </tr>

                                        </table>

                                    </div>
                                    <div className="col-md-4" id="go-climate-position2">
                                        <table>

                                            <tr>

                                                <td>
                                                    <div style={{ padding: '8px', fontSize: '14px', color: 'black' }}><b>0</b></div>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div><img src="../assets/images/Vector-glass.png" style={{
                                                        width: '13px',
                                                        height: '13px'
                                                    }} /></div>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div style={{
                                                        borderLeft: '1px solid gray',
                                                        height: '40px'
                                                    }}></div>
                                                </td>


                                                <td style={{ padding: '8px' }}>
                                                    <span style={{
                                                        fontSize: '13px'
                                                    }}>Drink only tap water</span>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td>
                                                    <div style={{ padding: '8px', fontSize: '14px', color: 'black' }}><b>94</b></div>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div><img src="../assets/images/vector-second.png" style={{
                                                        width: '13px',
                                                        height: '13px'
                                                    }} /></div>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div style={{
                                                        borderLeft: '1px solid gray',
                                                        height: '40px'
                                                    }}></div>
                                                </td>


                                                <td style={{ padding: '8px' }}>
                                                    <span style={{
                                                        fontSize: '13px'
                                                    }}>Drink only tap water</span>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td>
                                                    <div style={{ padding: '8px', fontSize: '14px', color: 'black' }}><b>2</b></div>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div><img src="../assets/images/vector-third.png" style={{
                                                        width: '13px',
                                                        height: '13px'
                                                    }} /></div>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div style={{
                                                        borderLeft: '1px solid gray',
                                                        height: '40px'
                                                    }}></div>
                                                </td>


                                                <td style={{ padding: '8px' }}>
                                                    <span style={{
                                                        fontSize: '13px'
                                                    }}>Drink only tap water</span>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td>
                                                    <div style={{ padding: '8px', fontSize: '14px', color: 'black' }}><b>183</b></div>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div><img src="../assets/images/Vector-fourth.png" style={{
                                                        width: '13px',
                                                        height: '13px'
                                                    }} /></div>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div style={{
                                                        borderLeft: '1px solid gray',
                                                        height: '40px'
                                                    }}></div>
                                                </td>


                                                <td style={{ padding: '8px' }}>
                                                    <span style={{
                                                        fontSize: '13px'
                                                    }}>Drink only tap water</span>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td>
                                                    <div style={{ padding: '8px', fontSize: '14px', color: 'black' }}><b>80</b></div>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div><img src="../assets/images/Vector-five.png" style={{
                                                        width: '13px',
                                                        height: '13px'
                                                    }} /></div>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div style={{
                                                        borderLeft: '1px solid gray',
                                                        height: '40px'
                                                    }}></div>
                                                </td>


                                                <td style={{ padding: '8px' }}>
                                                    <span style={{
                                                        fontSize: '13px'
                                                    }}>Drink only tap water</span>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td>
                                                    <div style={{ padding: '8px', fontSize: '14px', color: 'black' }}><b>1800</b></div>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div><img src="../assets/images/Vector-six.png" style={{
                                                        width: '13px',
                                                        height: '13px'
                                                    }} /></div>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div style={{
                                                        borderLeft: '1px solid gray',
                                                        height: '40px'
                                                    }}></div>
                                                </td>


                                                <td style={{ padding: '8px' }}>
                                                    <span style={{
                                                        fontSize: '13px'
                                                    }}>Drink only tap water</span>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td>
                                                    <div style={{ padding: '8px', fontSize: '14px', color: 'black' }}><b>62</b></div>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div><img src="../assets/images/Vector-seven.png" style={{
                                                        width: '13px',
                                                        height: '13px'
                                                    }} /></div>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div style={{
                                                        borderLeft: '1px solid gray',
                                                        height: '40px'
                                                    }}></div>
                                                </td>


                                                <td style={{ padding: '8px' }}>
                                                    <span style={{
                                                        fontSize: '13px'
                                                    }}>Drink only tap water</span>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td>
                                                    <div style={{ padding: '8px', fontSize: '14px', color: 'black' }}><b>1391</b></div>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div><img src="../assets/images/Vector-eight.png" style={{
                                                        width: '13px',
                                                        height: '13px'
                                                    }} /></div>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div style={{
                                                        borderLeft: '1px solid gray',
                                                        height: '40px'
                                                    }}></div>
                                                </td>


                                                <td style={{ padding: '8px' }}>
                                                    <span style={{
                                                        fontSize: '13px'
                                                    }}>Drink only tap water</span>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td>
                                                    <div style={{ padding: '8px', fontSize: '14px', color: 'black' }}><b>94</b></div>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div><img src="../assets/images/Vector-nine.png" style={{
                                                        width: '13px',
                                                        height: '13px'
                                                    }} /></div>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div style={{
                                                        borderLeft: '1px solid gray',
                                                        height: '40px'
                                                    }}></div>
                                                </td>


                                                <td style={{ padding: '8px' }}>
                                                    <span style={{
                                                        fontSize: '13px'
                                                    }}>Drink only tap water</span>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td>
                                                    <div style={{ padding: '8px', fontSize: '14px' }}>0</div>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div><img src="../assets/images/Vector-ten.png" style={{
                                                        width: '13px',
                                                        height: '13px'
                                                    }} /></div>
                                                </td>
                                                <td style={{ padding: '8px' }}>
                                                    <div style={{
                                                        borderLeft: '1px solid gray',
                                                        height: '40px'
                                                    }}></div>
                                                </td>


                                                <td style={{ padding: '8px' }}>
                                                    <span style={{
                                                        fontSize: '13px'
                                                    }}>Drink only tap water</span>
                                                </td>
                                            </tr>


                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center text-center mt-5">
                                <div className="col-md-2">
                                    <p style={{
                                        fontSize: '20px'
                                    }}><b>3733 kgCO2e
                                        </b></p>

                                    <p style={{
                                        fontSize: '20px'
                                    }}><b>3,8 tCO2e</b></p>
                                </div>
                                <div className="col-md-2">
                                    <p style={{
                                        fontSize: '20px'
                                    }}><b>15935 kgCO2e
                                        </b></p>

                                    <p style={{
                                        fontSize: '20px'
                                    }}><b>15,9 tCO2e</b></p>
                                </div>
                            </div>

                            <div className="row justify-content-center text-center mt-5">
                                <div className="col-md-6">
                                    <hr style={{ width: '50%', textAlign: 'left', margin: 'auto', border: '1px solid gray' }} />
                                </div>
                            </div>

                            <div className="row justify-content-center text-center mt-5 p-5">
                                <div className="col-md-3" style={{
                                    marginTop: '70px'
                                }}>
                                    <p style={{
                                        fontSize: '20px'
                                    }}><b>SAVINGS FOR

                                        </b></p>
                                    <p style={{
                                        fontSize: '20px'
                                    }}><b>1 PERSON

                                        </b></p>
                                </div>

                                <div className="col-md-3" style={{
                                    marginTop: '90px'
                                }}>
                                    <hr style={{ width: '30%', textAlign: 'left', margin: 'auto', border: '1px solid gray' }} />
                                </div>

                                <div className="col-md-3">
                                    <div>
                                        <img src="../assets/images/Vector-green.png" />
                                        <br />
                                        <span style={{
                                            lineHeight: '50px'
                                        }}>3,8 tCO2e</span>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div>
                                        <img src="../assets/images/Vector-gray.png" />
                                        <br />
                                        <span style={{
                                            lineHeight: '50px'
                                        }}>Business As Usual</span>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center text-center mt-5">
                                <div className="col-md-2">
                                    <p style={{
                                        fontSize: '20px'
                                    }}><b>
                                            Savings 1 Person/Year
                                        </b></p>
                                    <p style={{
                                        fontSize: '20px'
                                    }}>12,1 tCO2e</p>
                                </div>
                            </div>

                            <div className="row justify-content-center text-center mt-5">
                                <div className="col-md-12">
                                    <hr style={{ width: '90%', textAlign: 'left', margin: 'auto', border: '1px solid gray' }} />
                                </div>
                            </div>

                            <div className="row justify-content-center text-center mt-5 p-5">
                                <div className="col-md-3" style={{
                                    marginTop: '70px'
                                }}>
                                    <p style={{
                                        fontSize: '20px'
                                    }}><b>SEE SAVINGS FOR


                                        </b></p>
                                    <p style={{
                                        fontSize: '20px'
                                    }}><b>100,000 PEOPLE

                                        </b></p>
                                </div>
                                <div className="col-md-3" style={{
                                    marginTop: '90px'
                                }}>
                                    <hr style={{ width: '30%', textAlign: 'left', margin: 'auto', border: '1px solid gray' }} />
                                </div>
                                <div className="col-md-3">
                                    <div>
                                        <img src="../assets/images/GroupMan.png" height="100px" />
                                        <br />
                                        <span style={{
                                            lineHeight: '50px'
                                        }}>0,4 MtCO2e</span>
                                    </div>
                                </div>
                                <div className="col-md-3">

                                    <div>
                                        <img src="../assets/images/GroupMangrey.png" height="100px" />
                                        <br />
                                        <span style={{
                                            lineHeight: '50px'
                                        }}>1,6MtCO2e</span>
                                    </div>

                                </div>
                            </div>


                            <div className="row justify-content-center text-center mt-5">

                                <div className="col-md-3">
                                    <p style={{
                                        fontSize: '20px'
                                    }}><b>
                                            Savings for 100,000 People/Year

                                        </b></p>
                                    <p style={{
                                        fontSize: '20px'
                                    }}>1,2MtCO2e</p>
                                </div>
                            </div>

                            <div className="row justify-content-center text-center mt-5">
                                <div className="col-md-12">
                                    <hr style={{ width: '90%', textAlign: 'left', margin: 'auto', border: '1px solid gray' }} />
                                </div>
                            </div>

                            <div className="row justify-content-center text-center mt-5 p-5">
                                <div className="col-md-6" style={{
                                    marginTop: '70px'
                                }}>
                                    <p style={{
                                        fontSize: '20px'
                                    }}><b>SEE SAVINGS FOR PER
                                        </b></p>
                                    <p style={{
                                        fontSize: '20px'
                                    }}><b>
                                            POPULATION OF
                                        </b></p>
                                    <p style={{
                                        fontSize: '20px'
                                    }}><b>
                                            THE EU - 508,000 MILLION PEOPLE
                                        </b></p>
                                </div>
                                <div className="col-md-3">
                                    <div>
                                        <img src="../assets/images/globepersonegreen.png" height="300px" />
                                        <br />
                                        <span style={{
                                            lineHeight: '50px'
                                        }}>0,4 MtCO2e</span>
                                    </div>
                                </div>
                                <div className="col-md-3">

                                    <div>
                                        <img src="../assets/images/grayglobeperson.png" height="300px" />
                                        <br />
                                        <span style={{
                                            lineHeight: '50px'
                                        }}>1,6MtCO2e</span>
                                    </div>

                                </div>
                            </div>


                            <div className="row justify-content-center text-center mt-5">

                                <div className="col-md-3">
                                    <p style={{
                                        fontSize: '20px'
                                    }}><b>
                                            Savings for 508,000 People/Year
                                        </b></p>
                                    <p style={{
                                        fontSize: '20px'
                                    }}>6,1GtCO2e</p>
                                </div>
                            </div>

                            <div className="row justify-content-center text-center mt-5">
                                <div className="col-md-12">
                                    <hr style={{ width: '90%', textAlign: 'left', margin: 'auto', border: '1px solid gray' }} />
                                </div>

                            </div>

                            <div className="row justify-content-center text-center mt-5 p-5">
                                <div className="col-md-6" style={{
                                    marginTop: '70px'
                                }}>
                                    <p style={{
                                        fontSize: '20px'
                                    }}><b>
                                            SEE SAVINGS FOR PER POPULATION

                                        </b></p>
                                    <p style={{
                                        fontSize: '20px'
                                    }}><b>
                                            OF THE NORTH AMERICAN AND

                                        </b></p>
                                    <p style={{
                                        fontSize: '20px'
                                    }}><b>
                                            THE  EU - 1.1  BILLION PEOPLE
                                        </b></p>
                                </div>
                                <div className="col-md-3">
                                    <div>
                                        <img src="../assets/images/globepersonegreen.png" height="300px" />
                                        <br />
                                        <span style={{
                                            lineHeight: '50px'
                                        }}>4,1 GtCO2e</span>
                                    </div>
                                </div>
                                <div className="col-md-3">

                                    <div>
                                        <img src="../assets/images/grayglobeperson.png" height="300px" />
                                        <br />
                                        <span style={{
                                            lineHeight: '50px'
                                        }}>17,5 GtCO2e</span>
                                    </div>

                                </div>
                            </div>


                            <div className="row justify-content-center text-center mt-5">

                                <div className="col-md-3">
                                    <p style={{
                                        fontSize: '20px'
                                    }}><b>
                                            Savings 1.1 BILLION PEOPLE/YEAR

                                        </b></p>
                                    <p style={{
                                        fontSize: '20px'
                                    }}>13,4 GtCO2e</p>
                                </div>
                            </div>


                            <div className="row justify-content-center text-center mt-5">

                                <div className="col-md-3">
                                    <p style={{
                                        fontSize: '20px'
                                    }}><b>
                                            Enough to meet the 2030 emissions gap


                                        </b></p>
                                    <p style={{
                                        fontSize: '20px'
                                    }}>to stay within the 2C limit*</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="w3l-bottom-grids-6 py-5" id="allservices">
                    <div class="container py-lg-5 py-md-4 py-2">

                        <h3 class="title-big mb-md-5 mb-4 text-center">Tips to reduce your daily footprint.</h3>

                        <div class="row">
                            <div class="col-lg-4   padding-0 col-md-6 grids-feature">
                                <div class="content">
                                    <a href="#" target="_blank">
                                        <div class="content-overlay"></div>
                                        <img class="content-image" src="../assets/images/tip-img1.png" />
                                        <div class="content-details fadeIn-bottom">
                                            <img class="" height="50px" width="50px" src="../assets/images/Vector-house.png" />
                                            <h3 class="content-title">HOME</h3>
                                            <p class="content-text">When Ecology makes a rhyme with Economy</p>
                                        </div>
                                    </a>
                                </div>

                            </div>
                            <div class="col-lg-4   padding-0 col-md-6 grids-feature">
                                <div class="content">
                                    <a href="#" target="_blank">
                                        <div class="content-overlay1"></div>
                                        <img class="content-image" src="../assets/images/tip-img2.png" />
                                        <div class="content-details fadeIn-bottom">
                                            <img class="" height="50px" width="50px" src="../assets/images/Vector-air.png" />
                                            <h3 class="content-title" style={{
                                                color: 'black'
                                            }}>TRAVEL</h3>
                                            <p class="content-text" style={{
                                                color: 'black',
                                                paddingLeft: '50px',
                                                paddingRight: '50px'
                                            }}>Reducing the milage of the average new car from 24,000 to 16,000km a year will save more than a tonne of CO2</p>
                                        </div>
                                    </a>
                                </div>

                            </div>
                            <div class="col-lg-4   padding-0 col-md-6 grids-feature">
                                <div class="content">
                                    <a href="#" target="_blank">
                                        <div class="content-overlay"></div>
                                        <img class="content-image" src="../assets/images/tip-img3.png" />
                                        <div class="content-details fadeIn-bottom">
                                            <img class="" height="50px" width="50px" src="../assets/images/Vector-spea.png" />
                                            <h3 class="content-title">ADVOCATE</h3>
                                            <p class="content-text" style={{
                                                paddingLeft: '50px',
                                                paddingRight: '50px'
                                            }}>Apple says that 80% of the carbon footprint of a new laptop comes from manufacturing and distribution, not use in the home.</p>
                                        </div>
                                    </a>
                                </div>

                            </div>
                            <div class="col-lg-4   padding-0 col-md-6 grids-feature">
                                <div class="content">
                                    <a href="#" target="_blank">
                                        <div class="content-overlay1"></div>
                                        <img class="content-image" src="../assets/images/tip-img4.png" />
                                        <div class="content-details fadeIn-bottom">
                                            <img class="" height="50px" width="50px" src="../assets/images/Vector-shop.png" />
                                            <h3 class="content-title" style={{
                                                color: 'black'
                                            }}>SHOPPING</h3>
                                            <p class="content-text" style={{
                                                color: 'black',
                                                paddingLeft: '50px',
                                                paddingRight: '50px'
                                            }}>Apple says that 80% of the carbon footprint of a new laptop comes from manufacturing and distribution, not use in the home.</p>
                                        </div>
                                    </a>
                                </div>

                            </div>
                            <div class="col-lg-4   padding-0 col-md-6 grids-feature">
                                <div class="content">
                                    <a href="#" target="_blank">
                                        <div class="content-overlay"></div>
                                        <img class="content-image" src="../assets/images/tip-img5.png" />
                                        <div class="content-details fadeIn-bottom">
                                            <img class="" height="50px" width="50px" src="../assets/images/Vector-food.png" />
                                            <h3 class="content-title">FOOD</h3>
                                            <p class="content-text" style={{
                                                paddingLeft: '50px',
                                                paddingRight: '50px'
                                            }}>Apple says that 80% of the carbon footprint of a new laptop comes from manufacturing and distribution, not use in the home.</p>
                                        </div>
                                    </a>
                                </div>

                            </div>
                            <div class="col-lg-4   padding-0 col-md-6 grids-feature">
                                <div class="content">
                                    <a href="#" target="_blank">
                                        <div class="content-overlay1"></div>
                                        <img class="content-image" src="../assets/images/tip-img6.png" />
                                        <div class="content-details fadeIn-bottom">
                                            <img class="" height="50px" width="50px" src="../assets/images/Vector-eng.png" />
                                            <h3 class="content-title" style={{
                                                color: 'black'
                                            }}>ENERGY</h3>
                                            <p class="content-text" style={{
                                                color: 'black',
                                                paddingLeft: '50px',
                                                paddingRight: '50px'
                                            }}>Apple says that 80% of the carbon footprint of a new laptop comes from manufacturing and distribution, not use in the home.</p>
                                        </div>
                                    </a>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>








                <div class="w3l-servicesblock2" id="services" >
                    <section id="grids5-block" class="py-5">
                        <div class="container py-lg-5 py-md-4 py-2">
                            <h3 class="title-big text-center" style={{ color: 'white' }} id="lastcomponent" >Measure Your Carbon Footprint</h3>
                            <div class="row mt-lg-5 mt-4">

                                <div class="col-lg-4 col-md-6">
                                    <AnimatedOnScroll animationIn="fadeInDownBig" delay={10000}>
                                        <div class="grids5-info">
                                            <a href="#service" class="d-block zoom">
                                                <img src="assets/images/Rectangle76.png" alt="" class="img-fluid service-image" />
                                            </a>
                                            <div class="blog-info">
                                                <p style={{ color: 'white' }}>
                                                    1 ton/month or less<br /><br />
                                                    Most of European countries, emerging economies and developing countries
                                                </p>
                                            </div>
                                        </div>
                                    </AnimatedOnScroll>
                                </div>



                                <div class="col-lg-4 col-md-6 ">
                                    <AnimatedOnScroll animationIn="fadeInDownBig" delay={10000}>
                                        <div class="grids5-info">
                                            <a href="#service" class="d-block zoom">
                                                <img src="assets/images/Rectangle77.png" alt="" class="img-fluid service-image" />
                                            </a>
                                            <div class="blog-info">
                                                <p style={{ color: 'white' }}>
                                                    2 tons/month
                                                    <br /><br />
                                                    Australia, Canada, Estonia, Luxembourg, United States + several oil exporting countries
                                                </p>
                                            </div>
                                        </div>
                                    </AnimatedOnScroll>
                                </div>



                                <div class="col-lg-4 col-md-6 ">
                                    <AnimatedOnScroll animationIn="fadeInDownBig" delay={10000}>
                                        <div class="grids5-info">
                                            <a href="#service" class="d-block zoom">
                                                <img src="assets/images/Rectangle78.png" alt="" class="img-fluid service-image" />
                                            </a>
                                            <div class="blog-info">
                                                <p style={{ color: 'white' }}>
                                                    3 tons/month or more
                                                    <br /><br />
                                                    Curacao, Kuwait, Qatar, Trinidad & Tobago
                                                </p>
                                            </div>
                                        </div>
                                    </AnimatedOnScroll>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <section class="w3l-services" id="core">
                    <div class="midd-w3 py-5">
                        <div class="container py-lg-5 py-md-3 py-2">
                            <div class="row">
                                <div class="col-lg-3 mb-lg-0 mb-md-5 mt-2 align-self bgimage" style={{ height: '605px' }} id="imageset">
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <h3 class="title-small" style={{ color: 'white' }}>Offset your unavoidable emissions</h3>
                                    <p class="mt-md-4 mt-3" style={{ color: 'white', fontSize: '12px' }}>Most of us cannot yet reduce our carbon footprint to zero. After reducing your climate impact, you can support the transition to a low-carbon future by offsetting your unavoidable emissions with high-impact carbon credits from Gold Standard-certified projects. </p>
                                    <a href="#features" class="btn btn-primary btn-style mt-md-5 mt-4 mr-2 mb-2" style={{ fontSize: '12px', border: 'none', outline: 'none', backgroundColor: 'rgba(255, 216, 14, 1)', color: '#000000', fontFamily: "Inter", fontWeight: '700' }}>OFFSET YOUR CARBON FOOTPRINT</a>
                                    <br />
                                </div>
                                <div class="col-lg-9 p-0" >
                                    <div class="row" style={{
                                        marginTop: '1%',
                                    }}>
                                        <div class="col-lg-4 col-md-6" >
                                            <div class="content" >
                                                <a href="#" target="_blank">
                                                    <div class="content-overlay3"></div>
                                                    <img class="content-image" src="../assets/images/water.png" style={{
                                                        width: '111%',
                                                        height: '300px'
                                                    }} />
                                                    <div class="content-details fadeIn-bottom ml-3">
                                                        <img class="" height="80px" width="80px" src="../assets/images/Vector-water.png" />
                                                        <h3 class="content-title mt-3" style={{
                                                            fontSize: '12px'
                                                        }}>CLEAN WATER ACCESS</h3>
                                                        <p class="content-text mt-3" style={{
                                                            fontSize: '12px'
                                                        }}>$12.00 USD/TONNE</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                            <div class="content">
                                                <a href="#" target="_blank">
                                                    <div class="content-overlay4"></div>
                                                    <img class="content-image" src="../assets/images/gas.png" style={{
                                                        width: '111%',
                                                        height: '300px'
                                                    }} />
                                                    <div class="content-details fadeIn-bottom ml-3">
                                                        <img class="" height="80px" width="80px" src="../assets/images/Vector-gas.png" />
                                                        <h3 class="content-title mt-3" style={{
                                                            fontSize: '12px',
                                                            color: 'black'
                                                        }}>BIOGAS</h3>
                                                        <p class="content-text mt-3" style={{
                                                            fontSize: '12px',
                                                            color: 'black'
                                                        }}>$19.00 USD/TONNE</p>
                                                    </div>
                                                </a>
                                            </div>

                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                            <div class="content">
                                                <a href="#" target="_blank">
                                                    <div class="content-overlay3"></div>
                                                    <img class="content-image" src="../assets/images/fan.png" style={{
                                                        width: '111%',
                                                        height: '300px'
                                                    }} />
                                                    <div class="content-details fadeIn-bottom ml-3">
                                                        <img class="" height="80px" width="80px" src="../assets/images/Vector-fan.png" />
                                                        <h3 class="content-title mt-3" style={{
                                                            fontSize: '12px'
                                                        }}>WIND

                                                        </h3>
                                                        <p class="content-text mt-3" style={{
                                                            fontSize: '12px'
                                                        }}>$10.00 USD/TONNE</p>
                                                    </div>
                                                </a>
                                            </div>

                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                            <div class="content">
                                                <a href="#" target="_blank">
                                                    <div class="content-overlay4"></div>
                                                    <img class="content-image" src="../assets/images/solar.png" style={{
                                                        width: '111%',
                                                        height: '300px'
                                                    }} />
                                                    <div class="content-details fadeIn-bottom ml-3">
                                                        <img class="" height="80px" width="80px" src="../assets/images/Vector-solar.png" />
                                                        <h3 class="content-title mt-3" style={{
                                                            fontSize: '12px',
                                                            color: 'black'
                                                        }}>SOLAR

                                                        </h3>
                                                        <p class="content-text mt-3" style={{
                                                            fontSize: '12px',
                                                            color: 'black'
                                                        }}>$12.00 USD/TONNE</p>
                                                    </div>
                                                </a>
                                            </div>

                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                            <div class="content">
                                                <a href="#" target="_blank">
                                                    <div class="content-overlay3"></div>
                                                    <img class="content-image" src="../assets/images/gas1.png" style={{
                                                        width: '111%',
                                                        height: '300px'
                                                    }} />
                                                    <div class="content-details fadeIn-bottom ml-3">
                                                        <img class="" height="80px" width="80px" src="../assets/images/Vector-gas1.png" />
                                                        <h3 class="content-title mt-3" style={{
                                                            fontSize: '12px'
                                                        }}>COOKSTOVES

                                                        </h3>
                                                        <p class="content-text mt-3" style={{
                                                            fontSize: '12px'
                                                        }}>$15.00 USD/TONNE</p>
                                                    </div>
                                                </a>
                                            </div>

                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                            <div class="content">
                                                <a href="#" target="_blank">
                                                    <div class="content-overlay4"></div>
                                                    <img class="content-image" src="../assets/images/nature.png" style={{
                                                        width: '111%',
                                                        height: '300px'
                                                    }} />
                                                    <div class="content-details fadeIn-bottom ml-3">
                                                        <img class="" height="80px" width="80px" src="../assets/images/Vector-nature.png" />
                                                        <h3 class="content-title mt-3" style={{
                                                            fontSize: '12px',
                                                            color: 'black'
                                                        }}>FORESTRY

                                                        </h3>
                                                        <p class="content-text mt-3" style={{
                                                            fontSize: '12px',
                                                            color: 'black'
                                                        }}>$18.00 USD/TONNE</p>
                                                    </div>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="w3l-servicesblock1" id="why">
                    <section id="grids5-block" class="py-5">
                        <div class="container py-lg-5 py-md-4">
                            <div class="row align-items-center">
                                <div class="col-lg-4">
                                </div>
                                <div class="col-lg-5 mt-lg-0 mt-md-4 mt-3">
                                    <h3 class="title-big mw-100" id="footprintcom" >Measure Your Carbon Footprint</h3>
                                </div>
                            </div>
                            <br />
                            <div class="row justify-content-center"><p style={{ maxWidth: '90%', lineHeight: '25px', fontSize: '15px' }}>
                                In a word, impact. We’re considered the most rigorous climate standard by many NGOs, including WWF and the David Suzuki Foundation. This means that every dollar, Euro, pound or peso you spend offsetting creates more value for local communities and ecosystems and contributes in a measurable way to the UN Sustainable Development Goals.
                                <br />
                                <br />
                                We’ve even quantified it. Check out the independent study on the economic value delivered from Gold Standard-certified projects.
                            </p>

                            </div>
                            <br />
                            <br />
                            <div class="col-lg-12 align-self-center">
                                <div class="row features4-grids">
                                    <div class="col-md-2">
                                    </div>
                                    <div class="col-md-9">
                                        <img src="../assets/images/footerimg.png" width="90%" />
                                    </div>
                                </div>
                            </div>


                        </div>

                    </section>


                </div>

                <Footer />

            </div>


        </>
    )

}

export default Index