import React from "react";
import Navbar from "./Navbar";
import Footer from './Footer'

const Environment = () => {
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
                    backgroundImage: "url('../assets/images/environ-back-img.png')",
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

                <section className="w3l-aboutblock1" id="about">
                    <div className="midd-w3">
                        <div className="row mt-5">

                            <div className="col-md-5 mb-lg-0 mb-md-5 mb-5 align-self">

                                <div className="row">
                                    <div className="col-md-6 envirfirstcom">
                                        <p className="mt-md-4" style={{
                                            color: '#000000',
                                            width: '100vw'
                                        }}>
                                            High-impact U-Turn assets -- from carbon credits to renewable energy certificates -- allow the power of markets to drive change, accelerating progress toward the Paris Agreement and the Sustainable Development Goals.
                                            {" "}
                                        </p>

                                        <p className="mt-md-4 envirfirstcom" style={{
                                            color: '#000000',
                                            width: '100vw'
                                        }}>
                                            The latest IPCC report highlights the urgency to fully decarbonize our global economy. Carbon markets help accelerate and finance the transition to net-zero emissions by enabling businesses and individuals to take accountability for their unavoidable emissions through the purchase of carbon credits.
                                            {" "}
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6" style={{
                                padding: 0
                            }}>
                                <div className="position-relative" >
                                    <img
                                        src="assets/images/environment-f-c-img-rb.png"
                                        alt=""
                                        style={{
                                            width: '70%'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className="row mb-5 justify-content-left" style={{
                        marginTop: '50px',
                        marginLeft: '-8px'
                    }}>
                        <span style={{
                            color: '#000000',
                            width: '100%',
                            fontSize: '23px',
                        }}><b>Driving Finance To High Imapct <small style={{ fontSize: '23px', color: '#5EB23F' }}>Climate Protection Activities</small></b></span>

                    </div>

                    <div className="row mt-5 mb-5 justify-content-left">
                        <span style={{
                            color: 'black',
                            width: '1200px'
                        }}>
                            However much we try to reduce our footprint, in our current world some emissions are
                            still unavoidable. Financing emission reductions by purchasing high impact carbon credits
                            is a way to take responsibility for your climate impact and to take-action beyond your own footprint.
                        </span>
                    </div>

                    {/* mt-md-5 mt-4 mr-2 */}

                    <div className="row mt-5 mb-5 justify-content-center text-center">
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
                                fontWeight: '600',
                                border: 'none',
                                backgroundColor: '#FFD80E',
                                outline: 'none'
                            }}

                        >
                            OFFSETTING 101 GUIDE
                        </a>
                    </div>

                    <div className="row mt-5 mb-5 justify-content-left">
                        <span style={{
                            color: 'black',
                            width: '1200px'
                        }}>
                            Carbon credits represent the reduction or removal of one tonne of CO2 equivalent (tCO2e).
                            U-Turn carbon credits also include gender-sensitive and inclusive stakeholder design,
                            environmental and social safeguards, and a contribution towards at
                            least three Sustainable Development Goals (SDGs) - ensuring the greatest impact delivered
                            for every dollar channeled to projects.
                        </span>
                    </div>

                    <div className="row mt-5 justify-content-center">
                        <div className="col-md-4 text-center">
                            <img src="../assets/images/vector-cloud-white.png" style={{
                                width: '80px',
                                height: '70px'
                            }} />
                            <br />
                            <br />
                            <span

                                style={{
                                    color: '#000000',
                                    fontWeight: 400
                                }}>
                                CERs
                            </span>


                        </div>

                        <div className="col-md-4 text-center">
                            <img src="../assets/images/vector-cloud-black.png" style={{
                                width: '80px',
                                height: '70px'
                            }} />
                            <br />
                            <br />
                            <span style={{
                                color: '#000000',
                                fontWeight: 400
                            }}>
                                VERs
                            </span>


                        </div>
                    </div>

                    <div className="row mb-5 mt-4 justify-content-center">
                        <div className="col-md-4" style={{
                            paddingLeft: '100px',
                            paddingRight: '100px'
                        }}>
                            <span style={{
                                color: '#000000',
                                fontWeight: 400,
                            }}>
                                U-Turn labels for Certified Emission Reductions (CERs) for compliance targets
                            </span>
                        </div>
                        <div className="col-md-4 envirfouthcom" style={{
                            paddingLeft: '100px',
                            paddingRight: '100px'
                        }}>
                            <span style={{
                                color: '#000000',
                                fontWeight: 400,
                            }}>
                                U-Turn labels for Certified Emission Reductions (CERs) for compliance targets
                            </span>
                        </div>
                    </div>
                </div>

                <div className="row environ-right-img">
                    <img src="../assets/images/whoweare-right-img-rb.png" style={{
                        width: '200px',
                    }} />
                </div>

                <div className="container evironrenewable">
                    <div className="row pl-5">
                        <h3 className="title-big mx-0">
                            <b style={{
                                fontSize: '19px'
                            }}> Renewable <span style={{
                                color: '#5EB23F'
                            }}>Energy Markets </span></b>
                        </h3>
                    </div>
                </div>

                <section className="w3l-aboutblock1 mt-5" id="about">
                    <div className="midd-w3">
                        <div className="row mt-1">
                            <div className="col-md-6">
                                <div className="position-relative" >
                                    <img
                                        src="assets/images/environment-f-s-img-rb.png"
                                        alt=""
                                        style={{
                                            width: '70%'
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 mb-lg-0 mb-md-5 mb-5 align-self">
                                <div className="row">
                                    <div className="col-md-8 environthirdcom" >
                                        <p className="mt-md-4" style={{
                                            color: '#000000',

                                        }}>
                                            At least 42% of electricity must be supplied by renewable sources by 2030 to reach net zero emissions by midcentury -- the ambition of the Paris Agreement -- which requires doubling renewable power capacity. The private sector is key to this transition, yet some companies are limited in their ability to source renewable energy directly. Renewable energy markets allow these companies to purchase clean energy from their grid.

                                            {" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <div className="container">

                    <div className="row ">
                        <h3 className="title-big mx-0">
                            <b style={{
                                fontSize: '19px'
                            }}> Accelerating Clean <span style={{
                                color: '#5EB23F'
                            }}>Energy Translation</span></b>
                        </h3>
                    </div>

                    <div className="row mb-5 " style={{
                        marginTop: '50px'
                    }}>
                        <span style={{
                            color: 'black',

                        }}>
                            More and more businesses are setting ambitious renewable energy targets in an effort to spur the global transitions to renewables and purchasing renewable electricity through energy attribute certificates is a convenient, affordable and accessible option.
                        </span>
                    </div>

                    <div className="row mb-5 " style={{
                        marginTop: '50px'
                    }}>
                        <span style={{
                            color: 'black',

                        }}>
                            U-Turn labelled Renewable Energy Attribute Certificates represent a megawatt-hour (MWh) of electricity generated and delivered to the grid from a renewable source. They are issued on top of I-RECs, internationally recognised and reliable electricity attribute tracking certificates (RECs). And most importantly, they follow U-Turn principles to ensure that a buyer’s purchase results in real-world emissions reductions and the addition of new renewable energy capacity to the grid, helping to drive the clean energy transition.
                        </span>
                    </div>

                </div>

                <div className="environ-flower-left">
                        <img src="../assets/images/stand-flower-rb.png" />
                </div>

                <div className="container">
                    <div className="row">
                        <h3 className="title-big mx-0">
                            <b style={{
                                fontSize: '19px'
                            }}> Water <span style={{
                                color: '#5EB23F'
                            }}>Markets </span></b>
                        </h3>
                    </div>
                </div>

                <div className="container">
                    <div className="row mt-1">
                        <div className="col-md-6">
                            <div>
                                <img
                                    src="assets/images/environment-t-c-img-rb.png"
                                    alt=""
                                    style={{
                                        width: '50%'
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col-md-5 mb-lg-0 mb-md-5 mb-5 align-self">
                            <div className="row">
                                <div className="col-md-6 fifthcom">
                                    <p className="mt-md-4" style={{
                                        color: '#000000',
                                        width: '100vw'
                                    }}>
                                        The World Economic Forum names water crises as the #1 greatest risk facing the world.


                                        {" "}
                                    </p>

                                    <p className="mt-md-4" style={{
                                        color: '#000000',
                                        width: '100vw'
                                    }}>
                                        Freshwater sustains life – neither people nor nature can exist without it. But many of the world’s water systems are dangerously stressed and experts predict that ‘business as usual’ water use will expose 4.8 billion people to severe water scarcity by 2050.
                                        {" "}
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>





                <div className="container">

                    <div className="row">
                        <h3 className="title-big mx-0">
                            <b style={{
                                fontSize: '19px'
                            }}> Increasing access to  <span style={{
                                color: '#5EB23F'
                            }}>safe water for all </span></b>
                        </h3>
                    </div>

                    <div className="row mb-5 " style={{
                        marginTop: '50px'
                    }}>
                        <span style={{
                            color: 'black',
                            width: '1100px'
                        }}>
                            Water is the most fundamental human need and many organisations are committed to water stewardship, working collaboratively to ensure that social, environmental and economic benefits are achieved.
                        </span>
                    </div>

                    <div className="row mb-5 " style={{
                        marginTop: '50px'
                    }}>
                        <span style={{
                            color: 'black',
                            width: '1100px'
                        }}>
                            U-Turn has developed requirements to certify the positive socio-economic impacts of water projects, enabling companies to support high-impact water projects through the purchase of Water Benefit Certificates (WBCs).

                        </span>
                    </div>

                    <div className="row mb-5 " style={{
                        marginTop: '50px'
                    }}>
                        <span style={{
                            color: 'black',
                            width: '1100px'
                        }}>
                            A Water Benefit Certificate represents a volume of water that has been sustainably supplied, purified or conserved. There are different volumes for different project types, depending on size and impacts provided. Each U-Turn certified water project must deliver impact toward at least three SDGs and demonstrate a clear financial need for additional finance from selling Water Benefit Certificates – delivering development impacts that would not have otherwise happened.

                        </span>
                    </div>

                </div>

                <div className="container">
                    <h3 className="title-big mx-0">
                        <b style={{
                            fontSize: '19px',

                        }}> For More Information</b>
                    </h3>
                </div>

                <br />

                <div className="container">
                    <div className="row">
                        <div className="col-md-5 align-self environlastcomponent" style={{ marginBottom: '40px' }}>

                            <div className="row">
                                <div className="col-md-1">
                                    <img src="../assets/images/round-gray-img.png" style={{
                                        width: '20px',
                                        height: '20px'
                                    }} />
                                </div>
                                <div className="col-md-6 mt-2">
                                    <p style={{
                                        fontSize: '12px',                      
                                        color: '#000000',
                                    }}><b>Learn More About Carbon Credits</b></p>
                                </div>
                                <div className="col-md-1 mt-2">
                                    <img src="../assets/images/chevrons-right-8.png" style={{
                                        width: '20px',
                                        height: '20px'
                                    }} />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-1">
                                    <img src="../assets/images/round-gray-img.png" style={{
                                        width: '20px',
                                        height: '20px'
                                    }} />
                                </div>
                                <div className="col-md-6 mt-2">
                                    <p style={{
                                        fontSize: '12px',
                                        color: '#000000',
                                    }}><b>Purchase Carbon Credits</b></p>
                                </div>
                                <div className="col-md-1 mt-2">
                                    <img src="../assets/images/chevrons-right-8.png" style={{
                                        width: '20px',
                                        height: '20px'
                                    }} />
                                </div>
                            </div>
                            <br />
                            <div className="row" >
                                <div className="col-md-1">
                                    <img src="../assets/images/round-gray-img.png" style={{
                                        width: '20px',
                                        height: '20px'
                                    }} />
                                </div>
                                <div className="col-md-6 mt-2">
                                    <p style={{
                                        fontSize: '12px',
                                        color: '#000000',


                                    }}><b>View Our Project Impact Registry</b></p>
                                </div>
                                <div className="col-md-1 mt-2">
                                    <img src="../assets/images/chevrons-right-8.png" style={{
                                        width: '20px',
                                        height: '20px'
                                    }} />
                                </div>
                            </div>
                            <br />
                            <div className="row" >
                                <div className="col-md-1">
                                    <img src="../assets/images/round-gray-img.png" style={{
                                        width: '20px',
                                        height: '20px'
                                    }} />
                                </div>
                                <div className="col-md-6 mt-2">
                                    <p style={{
                                        fontSize: '12px',
                                        color: '#000000',
                                    }}><b>Certify Your Own Climate Project</b></p>
                                </div>
                                <div className="col-md-1 mt-2">
                                    <img src="../assets/images/chevrons-right-8.png" style={{
                                        width: '20px',
                                        height: '20px'
                                    }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row environlastcomimg">
                    <img src="../assets/images/environ-bottom-img-rb.png" style={{
                        width: '200px',
                        
                    }} />
                </div>


                <Footer />

            </div>
        </>
    )
}
export default Environment