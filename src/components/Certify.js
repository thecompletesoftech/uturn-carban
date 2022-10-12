import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import './Certify1.css'


const Certify = () => {

    var data = [
        {
            id: 1,
            title: 'Certification Review Fees',
            icon: <MdKeyboardArrowRight style={{
                fontSize: '20px'
            }} />
        },
        {
            id: 2,
            title: 'Fees For First Year Of Issuance',
            icon: <MdKeyboardArrowRight style={{
                fontSize: '20px'
            }} />
        },
        {
            id: 3,
            title: 'Subsequent Issuances',
            icon: <MdKeyboardArrowRight style={{
                fontSize: '20px'
            }} />
        },
        {
            id: 4,
            title: 'Microscale Validation And Verification Fund Fees (Standalone & Programme) ',
            icon: <MdKeyboardArrowRight style={{
                fontSize: '20px'
            }} />
        },
        {
            id: 5,
            title: 'Other Services',
            icon: <MdKeyboardArrowRight style={{
                fontSize: '20px'
            }} />
        },
        {
            id: 6,
            title: 'Conversion Fees',
            icon: <MdKeyboardArrowRight style={{
                fontSize: '20px'
            }} />
        },
    ]


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
                                            <div className="container">

                                            </div>
                                        </div>

                                    </div>
                                </li>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container mt-2 mb-1">
                    <div className="row">
                        <div className="col-md-7" style={{
                            marginTop: '100px'
                        }}>
                            <div className="row">
                                <h3 className="title-big ">
                                    <b style={{
                                        fontSize: '19px'
                                    }}> GOLD STANDARD FOR THE <span style={{
                                        color: '#5EB23F'
                                    }}>GLOBAL GOALS </span></b>
                                </h3>


                                <p className="" style={{
                                    color: '#000000',
                                    marginTop: '10px',
                                    fontSize: '13px'
                                }}>
                                    Standard requirements are tailored to your specific activity and objectives - whether you wish to monetise impacts through issuance of carbon credits or other instruments, or simply certify project impacts for credibility and brand value.  New user-friendly IT tools currently in development will simplify monitoring, reporting and verification (MRV) and provide dynamic data visualisation capabilities to bring your project's impact to life.
                                </p>

                                <p style={{
                                    color: '#000000',

                                    fontSize: '13px'
                                }}>
                                    Developers have multiple options for certification:
                                </p>

                                <p style={{
                                    color: '#000000',

                                    fontSize: '13px'
                                }}>
                                    Originate a project
                                </p>

                                <p style={{
                                    color: '#000000',
                                    marginTop: '-18px',
                                    fontSize: '13px'
                                }}>
                                    Transition an existing project from the UN CDM or other standards to Gold Standard
                                </p>

                                <p style={{
                                    marginTop: '-18px',
                                    color: '#000000',
                                    fontSize: '13px'
                                }}>
                                    Certify the sustainable development impacts of a project issued under another standard
                                </p>

                            </div>



                        </div>
                        <div className="col-md-5">
                            <img src="../assets/images/certify-right.png" style={{
                                width: '80%', marginTop: '60px'
                            }} />
                        </div>
                    </div>
                </section>

                <div className="row" style={{
                    marginLeft: '-35px'
                }}>
                    <div className="col-md-3">
                        <img src="../assets/images/whoweare-right-img-rb.png" style={{
                            width: '200px',
                            height: '200px',

                        }} />
                    </div>

                    <div className="col-md-6 justify-content-center text-center " style={{
                        marginTop: '70px'
                    }}>
                        <h3 className="title-big">
                            <b style={{
                                fontSize: '19px'
                            }}> THE BENEFITS OF CERTIFYING  <span style={{
                                color: '#5EB23F'
                            }}>TO U’TURN </span></b>
                        </h3>
                    </div>
                </div>

                <div className="container" style={{
                    marginTop: '-70px',
                    marginBottom: '20px'
                }}>
                    <div className="row justify-content-center text-center">
                        <div className="card" style={{
                            borderRadius: '20px',
                            boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.25)'
                        }}>
                            <div className="card-body">

                                <div className="row mt-4">
                                    <div className="col-md-4">
                                        <img src="../assets/images/certify-img1-r.png" style={{
                                            width: '100px'
                                        }} />

                                        <p className="mt-1" style={{ fontSize: '20px' }}><b>Greater Impact And Value</b></p>

                                        <p className="mt-5" style={{ fontSize: '13px' }}>
                                            Rigorous safeguards, stakeholder engagement, and methodologies maximise the climate and SDG impacts of your projects.
                                            For those issuing environmental commodities like carbon credits, this often leads to price premiums.
                                            Gold Standard also offers the ability to calculate the economic
                                            value created by your specific project and communicate this impact in compelling
                                        </p>

                                    </div>
                                    <div className="col-md-4">
                                        <img src="../assets/images/certify-img2-r.png" style={{
                                            width: '100px'
                                        }} />

                                        <p className="mt-1" style={{ fontSize: '20px' }}>
                                            <b>
                                                Streamlined Project <br />
                                                Development Process
                                            </b></p>

                                        <p className="mt-1" style={{ fontSize: '13px' }}>
                                            Our partnership with SustainCERT, the official certification body for Gold Standard for the Global
                                            Goals, is geared to reduce costs and complexities of the certification process,
                                            with an aim to fully digitise the certification process by 2020.


                                        </p>

                                    </div>
                                    <div className="col-md-4">
                                        <img src="../assets/images/certify-img3-r.png" style={{
                                            width: '100px'
                                        }} />

                                        <p className="mt-1" style={{ fontSize: '20px' }}><b>Brand Reputation</b></p>

                                        <p className="mt-5" style={{ fontSize: '13px' }}>
                                            Our NGO Supporter Network and strategic partnerships with industry thought leaders helps
                                            ensure that we remain the highest standard for climate and development initiatives.
                                        </p>
                                    </div>
                                </div>

                                <br />
                                <br />
                                <br />
                                <br />

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row justify-content-center text-center" style={{
                        marginTop: '100px',
                        marginBottom: '100px'
                    }}>
                        <h3 className="title-big">
                            <b style={{
                                fontSize: '19px'
                            }}> Process To Be Certified   <span style={{
                                color: '#5EB23F'
                            }}>U’TURN </span></b>
                        </h3>
                    </div>
                </div>


                <div className="container-fluid">
                    <div className="row">
                        <div id="timeline">

                            <div className="row timeline-movement">
                                <div className="timeline-badge center-left"></div>
                                <div className="col-sm-6 ">
                                    <div className="row">
                                        <div className="col-sm-11">
                                            <div className="timeline-panel credits">
                                                <ul className="timeline-panel-ul">

                                                    <div className="righting-wrap" style={{
                                                        marginLeft: '57px'
                                                    }}>
                                                        <li>

                                                            <div className="card" style={{
                                                                border: 'none',
                                                                outline: 'none',
                                                                background: '#FFFBE9',
                                                                borderRadius: '10px',
                                                                boxShadow: '0px 0px 10px 0px #00000040',
                                                                paddingLeft: '10px',
                                                                width: '40%',
                                                                marginTop: '-100px'
                                                            }}>
                                                                <div className="card-body">
                                                                    <p style={{
                                                                        fontSize: '13px',
                                                                        fontWeight: '700',

                                                                    }}>Plan Project And Hold Stakeholder Consultaiton</p>

                                                                    <p style={{
                                                                        fontSize: '12px',
                                                                    }}> Before the project starts, Project Developers should:</p>

                                                                    <ul className="mt-4 mb-4 p-0" >
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}>  Confirm the basic project design</li>
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}>  Assess against Gold Standard safeguards</li>
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}>  Estimate climate and sustainable development impacts</li>
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}> Prepare a Key Project Information note summarising the above</li>
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}> Hold a Gold Standard Stakeholder Consultation Meeting</li>
                                                                    </ul>


                                                                    <p style={{
                                                                        fontSize: '11px',
                                                                        marginTop: '-10px'
                                                                    }}>
                                                                        To start the Gold Standard certification process, projects must open a registry account and pay the annual registry fee
                                                                        of ($1000). See Gold Standard Principles + Requirements for more details
                                                                    </p>




                                                                </div>
                                                            </div>

                                                            <div style={{
                                                                width: '90px',
                                                                position: 'absolute',
                                                                height: '1px',
                                                                top: '-7px',
                                                                left: '500px',
                                                                background: '#000000'
                                                            }}>

                                                                <p style={{
                                                                    width: '200px',
                                                                    fontSize: '12px',
                                                                    position: 'absolute',
                                                                    height: '1px',
                                                                    top: '-10px',
                                                                    left: '128px',
                                                                    fontFamily: 'Inter',
                                                                    fontStyle: 'normal',
                                                                    fontWeight: '400'
                                                                }}>Third Party Reviewers</p>


                                                            </div>

                                                        </li>

                                                    </div>

                                                    <div>
                                                        <img src="../assets/images/one.jpeg" style={{
                                                            position: 'absolute',
                                                            width: '35px',
                                                            height: '35px',
                                                            top: '-25px',
                                                            left: '587px',
                                                            borderRadius: '50%'
                                                        }} />
                                                    </div>

                                                    <div className="clear" />
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* first end */}

                            <div className="row timeline-movement">
                                <div className="timeline-badge center-right"></div>
                                <div className="offset-sm-6 col-sm-6  timeline-item">
                                    <div className="row">
                                        <div className="offset-sm-1 col-sm-11">
                                            <div className="timeline-panel">
                                                <ul className="timeline-panel-ul">

                                                    <div className="righting-wrap" style={{
                                                        marginTop: '-120px',
                                                        marginLeft: '-20px'
                                                    }}>
                                                        <li>
                                                            <div style={{
                                                                width: '90px',
                                                                position: 'absolute',
                                                                height: '1px',
                                                                top: '-5px',
                                                                left: '-100px',
                                                                background: '#000000'
                                                            }}>
                                                            </div>

                                                            <div className="card" style={{
                                                                border: 'none',
                                                                outline: 'none',
                                                                background: '#FFFBE9',
                                                                borderRadius: '10px',
                                                                boxShadow: '0px 0px 10px 0px #00000040',
                                                                paddingLeft: '10px',
                                                                width: '40%'

                                                            }}>
                                                                <div className="card-body">
                                                                    <p style={{
                                                                        fontSize: '13px',
                                                                        fontWeight: '700',

                                                                    }}>Plan Project And Hold Stakeholder Consultaiton</p>

                                                                    <p style={{
                                                                        fontSize: '12px',
                                                                    }}> Before the project starts, Project Developers should:</p>

                                                                    <ul className="mt-4 mb-4 p-0">
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}>  Confirm the basic project design</li>
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}>  Assess against Gold Standard safeguards</li>
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}>  Estimate climate and sustainable development impacts</li>
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}> Prepare a Key Project Information note summarising the above</li>
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}> Hold a Gold Standard Stakeholder Consultation Meeting</li>
                                                                    </ul>


                                                                    <p style={{
                                                                        fontSize: '11px',
                                                                        marginTop: '-10px'
                                                                    }}>
                                                                        To start the Gold Standard certification process, projects must open a registry account and pay the annual registry fee
                                                                        of ($1000). See Gold Standard Principles + Requirements for more details
                                                                    </p>




                                                                </div>
                                                            </div>

                                                            <div>
                                                                <img src="../assets/images/two.jpeg" style={{
                                                                    position: 'absolute',
                                                                    width: '35px',
                                                                    height: '35px',
                                                                    top: '-22px',
                                                                    left: '-133px',
                                                                    borderRadius: '50%'
                                                                }} />
                                                            </div>

                                                            <p style={{
                                                                width: '300px',
                                                                fontSize: '12px',
                                                                position: 'absolute',
                                                                height: '1px',
                                                                top: '-15px',
                                                                left: '-270px',
                                                            }}>Third Party Reviewers</p>

                                                        </li>

                                                    </div>
                                                    <div className="clear" />
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* second end */}


                            <div className="row timeline-movement">
                                <div className="timeline-badge center-left"></div>
                                <div className="col-sm-6  timeline-item">
                                    <div className="row">
                                        <div className="col-sm-11">
                                            <div className="timeline-panel">
                                                <ul className="timeline-panel-ul">

                                                    <div className="righting-wrap" style={{
                                                        marginLeft: '105px',
                                                    }}>
                                                        <li>
                                                            <div className="card" style={{
                                                                border: 'none',
                                                                outline: 'none',
                                                                background: '#FFFBE9',
                                                                borderRadius: '10px',
                                                                boxShadow: '0px 0px 10px 0px #00000040',
                                                                paddingLeft: '10px',
                                                                width: '40%',
                                                                marginTop: '-110px'
                                                            }}>
                                                                <div className="card-body">
                                                                    <p style={{
                                                                        fontSize: '13px',
                                                                        fontWeight: '700',

                                                                    }}>Plan Project And Hold Stakeholder Consultaiton</p>

                                                                    <p style={{
                                                                        fontSize: '12px',
                                                                    }}> Before the project starts, Project Developers should:</p>

                                                                    <ul className="mt-4 mb-4 p-0">
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}>  Confirm the basic project design</li>
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}>  Assess against Gold Standard safeguards</li>
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}>  Estimate climate and sustainable development impacts</li>
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}> Prepare a Key Project Information note summarising the above</li>
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}> Hold a Gold Standard Stakeholder Consultation Meeting</li>
                                                                    </ul>


                                                                    <p style={{
                                                                        fontSize: '11px',
                                                                        marginTop: '-10px'
                                                                    }}>
                                                                        To start the Gold Standard certification process, projects must open a registry account and pay the annual registry fee
                                                                        of ($1000). See Gold Standard Principles + Requirements for more details
                                                                    </p>




                                                                </div>
                                                            </div>

                                                            <div style={{
                                                                width: '90px',
                                                                position: 'absolute',
                                                                height: '1px',
                                                                top: '-7px',
                                                                left: '500px',
                                                                background: '#000000'
                                                            }}>
                                                            </div>

                                                            <p style={{
                                                                width: '200px',
                                                                fontSize: '12px',
                                                                position: 'absolute',
                                                                height: '1px',
                                                                top: '-15px',
                                                                left: '615px',
                                                                fontFamily: 'Inter',
                                                                fontStyle: 'normal',
                                                                fontWeight: '400'
                                                            }}>Third Party Reviewers</p>


                                                        </li>

                                                    </div>
                                                    <div>
                                                        <img src="../assets/images/one.jpeg" style={{
                                                            position: 'absolute',
                                                            width: '35px',
                                                            height: '35px',
                                                            top: '-25px',
                                                            left: '573px',
                                                            borderRadius: '50%'
                                                        }} />
                                                    </div>
                                                    <div className="clear" />
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* third end */}

                            <div className="row timeline-movement">
                                <div className="timeline-badge center-right"></div>
                                <div className="offset-sm-6 col-sm-6  timeline-item">
                                    <div className="row">
                                        <div className="offset-sm-1 col-sm-11">
                                            <div className="timeline-panel">
                                                <ul className="timeline-panel-ul">

                                                    <div className="righting-wrap" style={{
                                                        marginTop: '-120px',
                                                        marginLeft: '-20px'
                                                    }}>
                                                        <li>
                                                            <div style={{
                                                                width: '90px',
                                                                position: 'absolute',
                                                                height: '1px',
                                                                top: '-5px',
                                                                left: '-100px',
                                                                background: '#000000'
                                                            }}>
                                                            </div>

                                                            <p style={{
                                                                width: '300px',
                                                                fontSize: '12px',
                                                                position: 'absolute',
                                                                height: '1px',
                                                                top: '-15px',
                                                                left: '-190px',
                                                            }}>U’TURN</p>

                                                            <div className="card" style={{
                                                                border: 'none',
                                                                outline: 'none',
                                                                background: '#FFFBE9',
                                                                borderRadius: '10px',
                                                                boxShadow: '0px 0px 10px 0px #00000040',
                                                                paddingLeft: '10px',
                                                                width: '40%'

                                                            }}>
                                                                <div className="card-body">
                                                                    <p style={{
                                                                        fontSize: '13px',
                                                                        fontWeight: '700',

                                                                    }}>Plan Project And Hold Stakeholder Consultaiton</p>

                                                                    <p style={{
                                                                        fontSize: '12px',
                                                                    }}> Before the project starts, Project Developers should:</p>

                                                                    <ul className="mt-4 mb-4 p-0">
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}>  Confirm the basic project design</li>
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}>  Assess against Gold Standard safeguards</li>
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}>  Estimate climate and sustainable development impacts</li>
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}> Prepare a Key Project Information note summarising the above</li>
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}> Hold a Gold Standard Stakeholder Consultation Meeting</li>
                                                                    </ul>


                                                                    <p style={{
                                                                        fontSize: '11px',
                                                                        marginTop: '-10px'
                                                                    }}>
                                                                        To start the Gold Standard certification process, projects must open a registry account and pay the annual registry fee
                                                                        of ($1000). See Gold Standard Principles + Requirements for more details
                                                                    </p>




                                                                </div>
                                                            </div>

                                                            <div>
                                                                <img src="../assets/images/two.jpeg" style={{
                                                                    position: 'absolute',
                                                                    width: '35px',
                                                                    height: '35px',
                                                                    top: '-22px',
                                                                    left: '-133px',
                                                                    borderRadius: '50%'
                                                                }} />
                                                            </div>

                                                        </li>

                                                    </div>
                                                    <div className="clear" />
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* fourth end */}


                            <div className="row timeline-movement">
                                <div className="timeline-badge center-left"></div>
                                <div className="col-sm-6  timeline-item">
                                    <div className="row">
                                        <div className="col-sm-11">
                                            <div className="timeline-panel">
                                                <ul className="timeline-panel-ul">

                                                    <div className="righting-wrap" style={{
                                                        marginLeft: '105px',
                                                    }}>
                                                        <li>
                                                            <div className="card" style={{
                                                                border: 'none',
                                                                outline: 'none',
                                                                background: '#FFFBE9',
                                                                borderRadius: '10px',
                                                                boxShadow: '0px 0px 10px 0px #00000040',
                                                                paddingLeft: '10px',
                                                                width: '40%',
                                                                marginTop: '-110px'
                                                            }}>
                                                                <div className="card-body">
                                                                    <p style={{
                                                                        fontSize: '13px',
                                                                        fontWeight: '700',

                                                                    }}>Plan Project And Hold Stakeholder Consultaiton</p>

                                                                    <p style={{
                                                                        fontSize: '12px',
                                                                    }}> Before the project starts, Project Developers should:</p>

                                                                    <ul className="mt-4 mb-4 p-0">
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}>  Confirm the basic project design</li>
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}>  Assess against Gold Standard safeguards</li>
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}>  Estimate climate and sustainable development impacts</li>
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}> Prepare a Key Project Information note summarising the above</li>
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}> Hold a Gold Standard Stakeholder Consultation Meeting</li>
                                                                    </ul>


                                                                    <p style={{
                                                                        fontSize: '11px',
                                                                        marginTop: '-10px'
                                                                    }}>
                                                                        To start the Gold Standard certification process, projects must open a registry account and pay the annual registry fee
                                                                        of ($1000). See Gold Standard Principles + Requirements for more details
                                                                    </p>




                                                                </div>
                                                            </div>

                                                            <div style={{
                                                                width: '90px',
                                                                position: 'absolute',
                                                                height: '1px',
                                                                top: '-7px',
                                                                left: '500px',
                                                                background: '#000000'
                                                            }}>
                                                            </div>

                                                            <p style={{
                                                                width: '200px',
                                                                fontSize: '12px',
                                                                position: 'absolute',
                                                                height: '1px',
                                                                top: '-15px',
                                                                left: '615px',
                                                                fontFamily: 'Inter',
                                                                fontStyle: 'normal',
                                                                fontWeight: '400'
                                                            }}>Third Party Reviewers</p>

                                                        </li>

                                                    </div>
                                                    <div>
                                                        <img src="../assets/images/one.jpeg" style={{
                                                            position: 'absolute',
                                                            width: '35px',
                                                            height: '35px',
                                                            top: '-25px',
                                                            left: '573px',
                                                            borderRadius: '50%'
                                                        }} />
                                                    </div>
                                                    <div className="clear" />
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* five end */}


                            <div className="row timeline-movement">
                                <div className="timeline-badge center-right"></div>
                                <div className="offset-sm-6 col-sm-6  timeline-item">
                                    <div className="row">
                                        <div className="offset-sm-1 col-sm-11">
                                            <div className="timeline-panel">
                                                <ul className="timeline-panel-ul">

                                                    <div className="righting-wrap" style={{
                                                        marginTop: '-120px',
                                                        marginLeft: '-20px'
                                                    }}>
                                                        <li>
                                                            <div style={{
                                                                width: '90px',
                                                                position: 'absolute',
                                                                height: '1px',
                                                                top: '-5px',
                                                                left: '-100px',
                                                                background: '#000000'
                                                            }}>
                                                            </div>

                                                            <p style={{
                                                                width: '300px',
                                                                fontSize: '12px',
                                                                position: 'absolute',
                                                                height: '1px',
                                                                top: '-15px',
                                                                left: '-205px',
                                                            }}>Developer</p>

                                                            <div className="card" style={{
                                                                border: 'none',
                                                                outline: 'none',
                                                                background: '#FFFBE9',
                                                                borderRadius: '10px',
                                                                boxShadow: '0px 0px 10px 0px #00000040',
                                                                paddingLeft: '10px',
                                                                width: '40%'

                                                            }}>
                                                                <div className="card-body">
                                                                    <p style={{
                                                                        fontSize: '13px',
                                                                        fontWeight: '700',

                                                                    }}>Plan Project And Hold Stakeholder Consultaiton</p>

                                                                    <p style={{
                                                                        fontSize: '12px',
                                                                    }}> Before the project starts, Project Developers should:</p>

                                                                    <ul className="mt-4 mb-4 p-0">
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}>  Confirm the basic project design</li>
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}>  Assess against Gold Standard safeguards</li>
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}>  Estimate climate and sustainable development impacts</li>
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}> Prepare a Key Project Information note summarising the above</li>
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}> Hold a Gold Standard Stakeholder Consultation Meeting</li>
                                                                    </ul>


                                                                    <p style={{
                                                                        fontSize: '11px',
                                                                        marginTop: '-10px'
                                                                    }}>
                                                                        To start the Gold Standard certification process, projects must open a registry account and pay the annual registry fee
                                                                        of ($1000). See Gold Standard Principles + Requirements for more details
                                                                    </p>




                                                                </div>
                                                            </div>

                                                            <div>
                                                                <img src="../assets/images/two.jpeg" style={{
                                                                    position: 'absolute',
                                                                    width: '35px',
                                                                    height: '35px',
                                                                    top: '-22px',
                                                                    left: '-133px',
                                                                    borderRadius: '50%'
                                                                }} />
                                                            </div>

                                                        </li>

                                                    </div>
                                                    <div className="clear" />
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* six end */}


                            <div className="row timeline-movement">
                                <div className="timeline-badge center-left"></div>
                                <div className="col-sm-6  timeline-item">
                                    <div className="row">
                                        <div className="col-sm-11">
                                            <div className="timeline-panel">
                                                <ul className="timeline-panel-ul">

                                                    <div className="righting-wrap" style={{
                                                        marginLeft: '105px',
                                                    }}>
                                                        <li>
                                                            <div className="card" style={{
                                                                border: 'none',
                                                                outline: 'none',
                                                                background: '#FFFBE9',
                                                                borderRadius: '10px',
                                                                boxShadow: '0px 0px 10px 0px #00000040',
                                                                paddingLeft: '10px',
                                                                width: '40%',
                                                                marginTop: '-110px'
                                                            }}>
                                                                <div className="card-body">
                                                                    <p style={{
                                                                        fontSize: '13px',
                                                                        fontWeight: '700',

                                                                    }}>Plan Project And Hold Stakeholder Consultaiton</p>

                                                                    <p style={{
                                                                        fontSize: '12px',
                                                                    }}> Before the project starts, Project Developers should:</p>

                                                                    <ul className="mt-4 mb-4 p-0">
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}>  Confirm the basic project design</li>
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}>  Assess against Gold Standard safeguards</li>
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}>  Estimate climate and sustainable development impacts</li>
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}> Prepare a Key Project Information note summarising the above</li>
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}> Hold a Gold Standard Stakeholder Consultation Meeting</li>
                                                                    </ul>


                                                                    <p style={{
                                                                        fontSize: '11px',
                                                                        marginTop: '-10px'
                                                                    }}>
                                                                        To start the Gold Standard certification process, projects must open a registry account and pay the annual registry fee
                                                                        of ($1000). See Gold Standard Principles + Requirements for more details
                                                                    </p>




                                                                </div>
                                                            </div>

                                                            <div style={{
                                                                width: '90px',
                                                                position: 'absolute',
                                                                height: '1px',
                                                                top: '-7px',
                                                                left: '500px',
                                                                background: '#000000'
                                                            }}>
                                                            </div>

                                                            <p style={{
                                                                width: '200px',
                                                                fontSize: '12px',
                                                                position: 'absolute',
                                                                height: '1px',
                                                                top: '-15px',
                                                                left: '615px',
                                                                fontFamily: 'Inter',
                                                                fontStyle: 'normal',
                                                                fontWeight: '400'
                                                            }}>Third Party Reviewers</p>

                                                        </li>

                                                    </div>
                                                    <div>
                                                        <img src="../assets/images/one.jpeg" style={{
                                                            position: 'absolute',
                                                            width: '35px',
                                                            height: '35px',
                                                            top: '-25px',
                                                            left: '573px',
                                                            borderRadius: '50%'
                                                        }} />
                                                    </div>
                                                    <div className="clear" />
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* seven end */}


                            <div className="row timeline-movement">
                                <div className="timeline-badge center-right"></div>
                                <div className="offset-sm-6 col-sm-6  timeline-item">
                                    <div className="row">
                                        <div className="offset-sm-1 col-sm-11">
                                            <div className="timeline-panel">
                                                <ul className="timeline-panel-ul">

                                                    <div className="righting-wrap" style={{
                                                        marginTop: '-120px',
                                                        marginLeft: '-20px'
                                                    }}>
                                                        <li>
                                                            <div style={{
                                                                width: '90px',
                                                                position: 'absolute',
                                                                height: '1px',
                                                                top: '-5px',
                                                                left: '-100px',
                                                                background: '#000000'
                                                            }}>
                                                            </div>

                                                            <p style={{
                                                                width: '300px',
                                                                fontSize: '12px',
                                                                position: 'absolute',
                                                                height: '1px',
                                                                top: '-15px',
                                                                left: '-190px',
                                                            }}>U’TURN</p>


                                                            <div className="card" style={{
                                                                border: 'none',
                                                                outline: 'none',
                                                                background: '#FFFBE9',
                                                                borderRadius: '10px',
                                                                boxShadow: '0px 0px 10px 0px #00000040',
                                                                paddingLeft: '10px',
                                                                width: '40%'

                                                            }}>
                                                                <div className="card-body">
                                                                    <p style={{
                                                                        fontSize: '13px',
                                                                        fontWeight: '700',

                                                                    }}>Plan Project And Hold Stakeholder Consultaiton</p>

                                                                    <p style={{
                                                                        fontSize: '12px',
                                                                    }}> Before the project starts, Project Developers should:</p>

                                                                    <ul className="mt-4 mb-4 p-0">
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}>  Confirm the basic project design</li>
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}>  Assess against Gold Standard safeguards</li>
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}>  Estimate climate and sustainable development impacts</li>
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}> Prepare a Key Project Information note summarising the above</li>
                                                                        <li style={{
                                                                            fontSize: '11px',
                                                                            listStyle: 'none'
                                                                        }}> Hold a Gold Standard Stakeholder Consultation Meeting</li>
                                                                    </ul>


                                                                    <p style={{
                                                                        fontSize: '11px',
                                                                        marginTop: '-10px'
                                                                    }}>
                                                                        To start the Gold Standard certification process, projects must open a registry account and pay the annual registry fee
                                                                        of ($1000). See Gold Standard Principles + Requirements for more details
                                                                    </p>




                                                                </div>
                                                            </div>

                                                            <div>
                                                                <img src="../assets/images/two.jpeg" style={{
                                                                    position: 'absolute',
                                                                    width: '35px',
                                                                    height: '35px',
                                                                    top: '-22px',
                                                                    left: '-133px',
                                                                    borderRadius: '50%'
                                                                }} />
                                                            </div>

                                                        </li>

                                                    </div>
                                                    <div className="clear" />
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* eight end */}

                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row justify-content-center text-center" style={{
                        marginTop: '-50px'
                    }}>
                        <img src="../assets/images/roadmap-bottom-img-rb.png" style={{
                            width: '100px'
                        }} />
                    </div>

                </div>

                <div className="container mb-5 justify-content-center text-center">

                    <br />

                    <h3 className="title-big">
                        <b style={{
                            fontSize: '19px'
                        }}> Standard Requirements And Other<span style={{
                            color: '#5EB23F'
                        }}> Documents    </span></b>
                    </h3>

                    <div className="row justify-content-center text-center" style={{
                        marginTop: '10px'
                    }}>


                        <div className="col-md-5">
                            <div className="card mt-5" style={{
                                boxShadow: '0px 0px 10px 0px rgba(196, 235, 181, 1)',
                                height: '21vh'
                            }}>
                                <div className="card-body">
                                    <div className="row mt-2">
                                        <div className="col-md-3 ml-3">
                                            <p style={{
                                                color: '#BEBEBE',
                                                fontSize: '50px'
                                            }}><b>01</b></p>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="mt-3">
                                                <p style={{ color: '#5EB23F', fontWeight: '700', fontSize: '15px' }}>Principles and Requirements</p>
                                                <p style={{ fontSize: '13px', marginTop: '-15px', marginLeft: '-60px' }}>Applicable to all projects</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-5">
                            <div className="card mt-5" style={{
                                boxShadow: '0px 0px 10px 0px rgba(196, 235, 181, 1)',
                                height: '21vh'
                            }}>
                                <div className="card-body">
                                    <div className="row mt-2">
                                        <div className="col-md-3 ml-3">
                                            <p style={{
                                                color: '#BEBEBE',
                                                fontSize: '50px'
                                            }}><b>02</b></p>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="mt-3">
                                                <p style={{ color: '#5EB23F', fontWeight: '700', fontSize: '15px', marginLeft: '-55px' }}>Activity Requirements</p>
                                                <p style={{ fontSize: '13px', marginTop: '-15px', marginLeft: '-10px' }}>Specific to project type and context</p>
                                                <p style={{ fontSize: '13px', marginTop: '-15px', marginLeft: '-25px' }}>(eg, community based or urban)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>




                    </div>

                    <div className="row justify-content-center text-center" style={{
                        marginTop: '10px'
                    }}>


                        <div className="col-md-5">
                            <div className="card mt-5" style={{
                                boxShadow: '0px 0px 10px 0px rgba(196, 235, 181, 1)',
                                height: '21vh'
                            }}>
                                <div className="card-body">
                                    <div className="row mt-2">
                                        <div className="col-md-3 ml-3">
                                            <p style={{
                                                color: '#BEBEBE',
                                                fontSize: '50px'
                                            }}><b>03</b></p>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="mt-3">
                                                <p style={{ color: '#5EB23F', fontWeight: '700', fontSize: '15px', marginLeft: '-10px' }}>SDG Impact Methodologies</p>
                                                <p style={{ fontSize: '13px', marginTop: '-15px', marginLeft: '20px' }}>Specific to project and technology type</p>
                                                <p style={{ fontSize: '13px', marginTop: '-15px', marginLeft: '-20px' }}>and desired relevant SDG impact</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-5">
                            <div className="card mt-5" style={{
                                boxShadow: '0px 0px 10px 0px rgba(196, 235, 181, 1)',
                                height: '21vh'
                            }}>
                                <div className="card-body">
                                    <div className="row mt-2">
                                        <div className="col-md-3 ml-3">
                                            <p style={{
                                                color: '#BEBEBE',
                                                fontSize: '50px'
                                            }}><b>04</b></p>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="mt-3">
                                                <p style={{ color: '#5EB23F', fontWeight: '700', fontSize: '15px', marginLeft: '-55px' }}>Product Requirements</p>
                                                <p style={{ fontSize: '13px', marginTop: '-15px', marginLeft: '-10px' }}>Specific to assets issued (eg, carbon </p>
                                                <p style={{ fontSize: '13px', marginTop: '-15px', marginLeft: '-15px' }}>credits or renewable energy labels)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="container mb-2 justify-content-center text-center">
                    <div className="row">
                        <p style={{
                            color: '#000000',
                            fontSize: '30px',
                            fontWeight: '400',
                            textTransform: 'uppercase'
                        }}><b>FEES</b></p>

                    </div>
                </div>

                <div className="container">
                    <div className="row justify-content-center">
                        <p style={{
                            fontSize: '13px',
                            color: '#000000'
                        }}>
                            Certification costs vary according to project type, scale, and complexity. Fees paid to Gold Standard include an issuance fee on products like carbon credits or renewable energy labels, plus a flat fee for tracking on our public Impact Registry.
                            Additional costs come from project implementation, third-party reviews by approved Validation and Verification Bodies, and certification review fees paid to SustainCERT, the official certification provide for Gold Standard for the Global Goals.
                        </p>
                    </div>
                </div>

                <div className="container mt-4">
                    <div className="row justify-content-left">
                        <p style={{
                            fontSize: '18px',
                            color: '#000000',
                            fontWeight: '500'
                        }}>Fees Listing</p>
                    </div>
                </div>

                <div className="container mt-2 mb-5">
                    <div className="row">
                        <div className="col-md-4">

                            <div className="card"
                                style={{
                                    boxShadow: '0px 0px 10px 0px #AFFA94',
                                    background: '#FDED99',
                                    height: '12vh',
                                    borderRadius: '15px',

                                }}>
                                <div className="card-body">

                                    <div className="row">
                                        <div className="col-md-10 mt-1" style={{ paddingTop: '5px' }}>
                                            <p style={{
                                                paddingLeft: '20px',
                                                lineHeight: '20px',
                                                fontSize: '12px'
                                            }}><b>Registry Fees</b></p>
                                        </div>
                                        <div className="col-md-2 mt-2">
                                            <MdKeyboardArrowLeft style={{
                                                fontSize: '20px'
                                            }} />
                                        </div>

                                    </div>

                                </div>
                            </div>

                            {
                                data.map((item, index) => (
                                    <div key={index}>
                                        <div className="card"
                                            style={{
                                                boxShadow: '0px 0px 10px 0px #AFFA94',
                                                background: '#FFFFFF',
                                                height: '12vh',
                                                borderRadius: '15px',
                                                marginTop: '15px'
                                            }}>
                                            <div className="card-body">

                                                <div className="row">
                                                    <div className="col-md-10 mt-1" style={{ paddingTop: '5px' }}>
                                                        <p style={{
                                                            paddingLeft: '20px',
                                                            lineHeight: '20px',
                                                            fontSize: '12px'
                                                        }}><b>{item.title}</b></p>
                                                    </div>
                                                    <div className="col-md-2 mt-2">
                                                        {item.icon}
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                ))
                            }





                        </div>
                        <div className="col-md-7">
                            <div className="card" style={{
                                boxShadow: '0px 0px 10px 0px #AFFF92',
                                borderRadius: '15px'
                            }}>

                                <div className="card-header" style={{
                                    background: '#7ACE5B',
                                    color: '#000000',
                                    fontWeight: '700',
                                    height: '8vh',
                                    borderTopLeftRadius: '15px',
                                    borderTopRightRadius: '15px',
                                }}>
                                    <div className="row justify-content-center text-center mt-2">
                                        <div className="col-md-4">
                                            Project Types/Party
                                        </div>
                                        <div className="col-md-4">
                                            Fee Type
                                        </div>
                                        <div className="col-md-4">
                                            Fee
                                        </div>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="row justify-content-center text-center">
                                        <div className="col-md-4">
                                            <p><b>All, VVB</b></p>
                                        </div>
                                        <div className="col-md-4">
                                            <p><b>Anual Registry Account Fee</b></p>
                                        </div>
                                        <div className="col-md-4">
                                            <p><b>$1000 per account</b></p>
                                        </div>
                                    </div>
                                    <hr style={{ padding: 0 }} />
                                    <div className="row justify-content-center text-center">
                                        <div className="col-md-4">
                                            <p><b>All, VVB</b></p>
                                        </div>
                                        <div className="col-md-4">
                                            <p><b>Account Reactivation Fee</b></p>
                                        </div>
                                        <div className="col-md-4">
                                            <p><b>$2500 per Suspension</b></p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-2 mb-5">
                    <div className="row justify-content-center text-center">
                        <a
                            href="#features"
                            className=""
                            style={{
                                textDecoration: 'none',
                                width: '150px',
                                padding: '10px',
                                borderRadius: '5px',
                                color: '#000000',
                                fontSize: '17px',
                                fontWeight: '600',
                                border: 'none',
                                backgroundColor: '#FFD80E',
                                outline: 'none'
                            }}

                        >
                            Fees Schedule
                        </a>
                    </div>

                </div>

                <div className="row justify-content-center text-center" style={{
                    background: '#FFFCEF',
                    padding: '5%',

                }}>

                    <div className="col-md-3">
                        <div class="content-certify">
                            <a href="#" target="_blank">
                                <div class="content-overlay-certify"></div>
                                <img src="../assets/images/bottom-img1.png" style={{
                                    width: '100%'
                                }} />
                                <div class="content-details-certify fadeIn-bottom">
                                    <h3 class="content-title-certify">Support Project</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="content-certify-yellow">
                            <a href="#" target="_blank">
                                <div class="content-overlay-certify-yellow"></div>
                                <img src="../assets/images/bottom-img2.png" style={{
                                    width: '100%'
                                }} />
                                <div class="content-details-certify-yellow fadeIn-bottom">
                                    <h3 class="content-title-certify-yellow">Devleop A Project</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="content-certify">
                            <a href="#" target="_blank">
                                <div class="content-overlay-certify"></div>
                                <img src="../assets/images/bottom-img3.png" style={{
                                    width: '100%'
                                }} />
                                <div class="content-details-certify fadeIn-bottom">
                                    <h3 class="content-title-certify">Fund Our Project</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="content-certify-yellow">
                            <a href="#" target="_blank">
                                <div class="content-overlay-certify-yellow"></div>
                                <img src="../assets/images/bottom-img4.png" style={{
                                    width: '100%'
                                }} />
                                <div class="content-details-certify-yellow fadeIn-bottom">
                                    <h3 class="content-title-certify-yellow">Join Us</h3>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <img src="../assets/images/bottom-img.png" style={{
                        width: '100%',
                    }} />
                </div>

                <Footer />

            </div>

        </>
    )
}
export default Certify