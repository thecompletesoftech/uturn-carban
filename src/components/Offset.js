import React from "react";
import Navbar from "./Navbar";
import Footer from './Footer'

const Offset = () => {
    return (
        <>

            <div style={{
                overflow: 'hidden',

            }}>

                <header className="fixed-top" >
                    <section className="w3l-header-4">
                        <div className="container">
                            {/* <nav className="navbar navbar-expand-lg navbar-light">
                                <h1>
                                    <NavLink className="navbar-brand" to="/">
                                        <img src="assets/images/raeex-blue-orange.png" style={{
                                            width: '9rem'
                                        }} />
                                    </NavLink>
                                </h1>
                                <button
                                    className="navbar-toggler collapsed"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarNav"
                                    aria-controls="navbarNav"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="fa icon-expand fa-bars" />
                                    <span className="fa icon-close fa-times" />
                                </button>
                                <div className="navbar-collapse" id="navbarNav" >
                                    <ul className="navbar-nav">
                                        <li className="nav-item active">
                                            <NavLink className="nav-link" to="/Whatareyou">
                                                About{" "}
                                            </NavLink>
                                        </li>
                                        <li className="nav-item @@about__active">
                                            <a className="nav-link" href="">
                                                Projects
                                            </a>
                                        </li>
                                        <li className="nav-item @@services__active">
                                            <a className="nav-link" href="">
                                                Blockchain
                                            </a>
                                        </li>
                                        <li className="nav-item @@contact__active">
                                            <a className="nav-link" href="">
                                                Resources
                                            </a>
                                        </li>
                                        <li className="nav-item @@contact__active">
                                            <a className="nav-link" href="">
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="navbar-nav search-right mt-lg-0 mt-2">
                                        <li className="nav-item mr-2" title="Search">
                                            <a href="#search" className="btn search-search">
                                               
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="" className="btn btn-primary d-none d-lg-block btn-style mr-3">
                                                Login
                                            </a>
                                        </li>
                                    </ul>

                                    <div id="search" className="pop-overlay">
                                        <div className="popup">
                                            <form action="" method="GET" className="d-flex">
                                                <input
                                                    type="search"
                                                    placeholder="Search.."
                                                    name="search"
                                                    required="required"
                                                    autoFocus=""
                                                />
                                                <button type="submit">
                                                    <span className="fa fa-search" />
                                                </button>
                                                <a className="close" href="#close">
                                                    ×
                                                </a>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </nav> */}
                            <Navbar />
                        </div>
                    </section>
                </header>

                <section className="w3l-main-slider" style={{
                    backgroundImage: "url('../assets/images/Offset-back.png')",
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

                <section className="w3l-aboutblock1">
                    <div className="midd-w3">
                        <div className="container">
                            <div className="row mt-5">
                                <div className="col-md-5">
                                    <div className="position-relative" >
                                        <img
                                            src="assets/images/Offset-fan-img.png"
                                            alt=""
                                            style={{
                                                width: '100%'
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-lg-0 mb-md-5 mb-5 align-self">

                                    <div className="row">



                                        <div className="col-md-12" style={{
                                            paddingLeft: '100px'
                                        }}>

                                            <div className="row">
                                                <h3 className="title-big mx-0" >
                                                    <b style={{
                                                        fontSize: '19px'
                                                    }}> Climate Stewardship is  <span style={{
                                                        color: '#5EB23F'
                                                    }}>Good Business </span></b>
                                                </h3>
                                            </div>


                                            <p className="mt-md-4" style={{
                                                color: '#000000',
                                                width: '100vw'
                                            }}>
                                                Flowcarbon is leading the charge in responsible corporate offsetting, helping you meet your ambitious climate goals while unlocking much needed transparency and efficiency in the voluntary carbon market.


                                                {" "}
                                            </p>

                                            <p className="mt-md-4" style={{
                                                color: '#000000',
                                                width: '100vw'
                                            }}>
                                                Whether you’re looking to offset historical emissions or develop a customized plan to shape the future of carbon removal, we’re ready to meet you wherever you are in your journey to net zero.
                                                {" "}
                                            </p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>

                <div className="container">

                    <div className="row">
                        <div className="col-md-6">

                            <div className="row mb-4 justify-content-left" style={{
                                marginTop: '60px',
                                marginLeft: '-8px'
                            }}>
                                <span style={{
                                    color: '#000000',
                                    width: '100%',
                                    fontSize: '23px',
                                }}><b>An OverSure <small style={{ fontSize: '23px', color: '#5EB23F' }}>Change</small></b></span>
                            </div>

                            <div className="row mt-2 mb-2 justify-content-left">

                                <p style={{
                                    fontSize: '15px',
                                    color: '#5EB23F',
                                    lineHeight: '5px',
                                }}>Transparency</p>

                                <span style={{
                                    color: 'black',
                                    fontSize: '11px'

                                }}>

                                    Flowcarbon believes offset buyers deserve transparent pricing and project-level visibility, while project developers deserve access to capital to build world-saving projects. Purchase offsets with your eyes wide open.
                                </span>



                                <p style={{
                                    fontSize: '15px',
                                    color: '#5EB23F',
                                    lineHeight: '5px',
                                    marginTop: '15px'
                                }}>Accessibility</p>

                                <span style={{
                                    color: 'black',
                                    fontSize: '11px',
                                    // lineHeight:'15px'

                                }}>Flowcarbon offers rigorously evaluated, high-impact offsets from innovative projects across the globe.</span>

                                <p style={{
                                    fontSize: '15px',
                                    color: '#5EB23F',
                                    lineHeight: '5px',
                                    marginTop: '15px'
                                }}>Customization</p>
                                <span style={{
                                    color: 'black',
                                    fontSize: '11px'

                                }}>Flowcarbon works with you to construct an offset portfolio that meets your specific organizational needs.</span>

                            </div>
                        </div>

                        <div className="col-md-6">
                            <img src="../assets/images/offset-second-img.png" style={{
                                width: '100%',
                            }} />
                        </div>

                    </div>
                </div>

                <div className="row">
                    <img src="../assets/images/offset-right-img.png" style={{
                        width: '150px',
                        marginLeft: '1250px'
                    }} />
                </div>

                <div className="container" style={{
                    marginTop:'-100px'
                }}>
                    <div className="row pl-5 text-center justify-content-center">
                        <h3 className="title-big ">
                            <b style={{
                                fontSize: '19px'
                            }}> Corporate  <span style={{
                                color: '#5EB23F'
                            }}>Solutions </span></b>
                        </h3>
                    </div>
                </div>

                <section className="container mt-2 mb-2">
                    <div className="row mt-5 mb-5">
                        <div className="col-md-2">
                            <img src="../assets/images/corporate1.png" style={{
                                width: '100px'
                            }} />
                        </div>
                        <div className="col-md-10">
                            <p><b>Spot and Forward Credit Purchases</b></p>
                            <span style={{
                                fontSize: '12px',

                            }}>
                                Flowcarbon offers rigorously evaluated, high-impact offsets from innovative sustainability
                                projects across the globe. We work directly with third party-certified project developers to
                                give you access to premium projects with a host of
                                co-benefits that support local communities, protect biodiversity,
                                and preserve scarce resources.

                            </span>
                        </div>
                    </div>

                    <div className="row mt-1 mb-5">
                        <div className="col-md-2">
                            <img src="../assets/images/corporate2.png" style={{
                                width: '100px'
                            }} />
                        </div>
                        <div className="col-md-10">
                            <p><b>Spot and Forward Credit Purchases</b></p>
                            <span style={{
                                fontSize: '12px',

                            }}>Flowcarbon offers rigorously evaluated, high-impact offsets from innovative sustainability
                                projects across the globe. We work directly with third party-certified project developers to
                                give you access to premium projects with a host of
                                co-benefits that support local communities, protect biodiversity,
                                and preserve scarce resources.
                            </span>
                        </div>
                    </div>
                    <div className="row mt-1 mb-5">
                        <div className="col-md-2">
                            <img src="../assets/images/corporate3.png" style={{
                                width: '100px'
                            }} />
                        </div>
                        <div className="col-md-10">
                            <p><b>Spot and Forward Credit Purchases</b></p>
                            <span style={{
                                fontSize: '12px',

                            }}>Flowcarbon offers rigorously evaluated, high-impact offsets from innovative sustainability
                                projects across the globe. We work directly with third party-certified project developers to
                                give you access to premium projects with a host of
                                co-benefits that support local communities, protect biodiversity,
                                and preserve scarce resources.
                            </span>
                        </div>
                    </div>
                    <div className="row mt-1 mb-5">
                        <div className="col-md-2">
                            <img src="../assets/images/corporate4.png" style={{
                                width: '100px'
                            }} />
                        </div>
                        <div className="col-md-10">
                            <p><b>Spot and Forward Credit Purchases</b></p>
                            <span style={{
                                fontSize: '12px',

                            }}>Flowcarbon offers rigorously evaluated, high-impact offsets from innovative sustainability
                                projects across the globe. We work directly with third party-certified project developers to
                                give you access to premium projects with a host of
                                co-benefits that support local communities, protect biodiversity,
                                and preserve scarce resources.
                            </span>
                        </div>
                    </div>
                </section>

                <div className="row">
                    <img src="../assets/images/bottom-img.png" style={{
                        width: '100%',
                        // marginLeft: '1150px'
                    }} />
                </div>


                <Footer />

            </div>

        </>
    )
}

export default Offset