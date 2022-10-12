import React from "react";
import Navbar from "./Navbar";
import Footer from './Footer'
import './Reduce.css'


const Reduce = () => {
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

                <section className="w3l-main-slider" style={{
                    backgroundImage: "url('../assets/images/Reduce-back.png')",
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
                                            src="assets/images/Reduce-first.png"
                                            alt=""
                                            style={{
                                                width: '100%'
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-lg-0 mb-md-5 mb-5 align-self">

                                    <div className="row">

                                        <div className="col-md-12">

                                            <div className="row reducefirstcom">
                                                <h3 className="title-big mx-0" >
                                                    <b style={{
                                                        fontSize: '19px'
                                                    }}> Positive action for   <span style={{
                                                        color: '#5EB23F'
                                                    }}>people and planet </span></b>
                                                </h3>
                                            </div>


                                            <p className="mt-md-4  reducefirstcom" style={{
                                                color: '#000000',
                                                width: '100vw'
                                            }}>
                                                We all have a role to play in the fight against climate change. Your actions, however small, can have a profound impact when combined with thousands of others wanting to make a difference. By being conscious of the choices you make and their effect on the environment, you not only reduce your own carbon footprint but also build demand for more Climate+ policies, practices and products around the world.
                                                {" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>

                <div className="row reduce-left-img">
                    <img src="../assets/images/Reduce-right-img.png" style={{
                        width: '300px',
                    }} />
                </div>

                <div className="container reducecard">
                    <div className="row pl-5 text-center justify-content-center">
                        <h3 className="title-big">
                            <b style={{
                                fontSize: '19px'
                            }}> Reduce Your   <span style={{
                                color: '#5EB23F'
                            }}>Carbon Footprint </span></b>
                        </h3>
                    </div>
                </div>


                <div className="container">

                    <div className="row mt-5 mb-5">
                        <div className="col-md-6">
                            <div className="card" style={{
                                height: '100vh',
                                boxShadow: '0px 0px 6px 0px #00000040'
                            }}>
                                <div className="card-body">
                                    <div>
                                        <div class="content-reduce">
                                            <a href="#" target="_blank">
                                                <div class="content-overlay-reduce"></div>
                                                <img src="../assets/images/Reduce-card1.png" style={{
                                                    width: '100%',
                                                    height: '40vh',
                                                    borderRadius: '15px'
                                                }} />
                                                <div class="content-details-reduce fadeIn-bottom">
                                                    <img class="" height="30px" width="30px" src="../assets/images/Vector-house.png" />
                                                    <h3 class="content-title-reduce">HOME</h3>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="mt-5">
                                            <ol>
                                                <li>1. Turn off lights</li>
                                                <li>2. Turn down heating</li>
                                                <li>3. Properly insulate + draught proof homes</li>
                                                <li>4. Switch to energy efficient lightbulbs</li>
                                                <li>5. Unplug devices</li>
                                                <li>6. Line dry your clothes </li>
                                                <li>7. Switch to paperless billing</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card " style={{
                              height: '100vh',
                                boxShadow: '0px 0px 6px 0px #00000040'
                            }}>
                                <div className="card-body">
                                    <div>
                                        <div class="content-reduce">
                                            <a href="#" target="_blank">
                                                <div class="content-overlay-reduce"></div>
                                                <img src="../assets/images/Reduce-card2.png" style={{
                                                    width: '100%',
                                                    height: '40vh',
                                                    borderRadius: '15px'
                                                }} />
                                                <div class="content-details-reduce fadeIn-bottom">
                                                    <img class="" height="30px" width="30px" src="../assets/images/new-airplan.png" />
                                                    <h3 class="content-title-reduce" style={{
                                                        color: 'white'
                                                    }}>TRAVEL</h3>

                                                </div>
                                            </a>
                                        </div>

                                        <div className="mt-5">
                                            <ol>
                                                <li>1. Walk or cycle to work </li>
                                                <li>2. Switch to public transport </li>
                                                <li>3. Choose electric vehicles </li>
                                                <li>4. Reduce or eliminate airline travel</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5 mb-5">
                        <div className="col-md-6">
                            <div className="card" style={{
                                height: '100vh',
                                boxShadow: '0px 0px 6px 0px #00000040'
                            }}>
                                <div className="card-body">
                                    <div>
                                        <div class="content-reduce">
                                            <a href="#" target="_blank">
                                                <div class="content-overlay-reduce"></div>
                                                <img src="../assets/images/Reduce-card3.png" style={{
                                                    width: '100%',
                                                    height: '40vh',
                                                    borderRadius: '15px'
                                                }} />
                                                <div class="content-details-reduce fadeIn-bottom">
                                                    <img class="" height="30px" width="30px" src="../assets/images/new-shop-r.png" />
                                                    <h3 class="content-title-reduce" style={{
                                                        color: 'white'
                                                    }}>SHOPPING</h3>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="mt-5">
                                            <ol>

                                                <li>1.  Recycle + re-use wherever possible</li>
                                                <li>2. Consume less - buy fewer but better</li>
                                                <li>3.
                                                    Try to avoid “fast fashion”</li>
                                                <li>4. Buy sustainably-produced food + goods
                                                </li>
                                                <li>
                                                    Identify eco-friendly goods: The Ecolabel Index {'>> '}provides an extensive directory of environmental certifications for various products + services
                                                </li>

                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card " style={{
                                height: '100vh',
                                boxShadow: '0px 0px 6px 0px #00000040'
                            }}>
                                <div className="card-body">
                                    <div>
                                        <div class="content-reduce">
                                            <a href="#" target="_blank">
                                                <div class="content-overlay-reduce"></div>
                                                <img src="../assets/images/Reduce-card4.png" style={{
                                                    width: '100%',
                                                    height: '40vh',
                                                    borderRadius: '15px'
                                                }} />
                                                <div class="content-details-reduce fadeIn-bottom">
                                                    <img class="" height="30px" width="30px" src="../assets/images/Vector-food.png" />
                                                    <h3 class="content-title-reduce" style={{
                                                        color: 'white'
                                                    }}>FOOD</h3>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="mt-5">
                                            <ol>

                                                <li>1. Eat less meat in favour of more plant-based diets </li>
                                                <li>2. Buy locally-sourced, seasonal foods rather than food imported from overseas</li>
                                                <li>3. Plant a garden + grow your own veggies</li>
                                                <li>4. Reduce or eliminate your consumption of bottled water and other beverages</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5 mb-5">
                        <div className="col-md-6">
                            <div className="card" style={{
                                height: '100vh',
                                boxShadow: '0px 0px 6px 0px #00000040'
                            }}>
                                <div className="card-body">
                                    <div>
                                        <div class="content-reduce">
                                            <a href="#" target="_blank">
                                                <div class="content-overlay-reduce"></div>
                                                <img src="../assets/images/Reduce-card5.png" style={{
                                                    width: '100%',
                                                    height: '40vh',
                                                    borderRadius: '15px'
                                                }} />
                                                <div class="content-details-reduce fadeIn-bottom">
                                                    <img class="" height="30px" width="30px" src="../assets/images/new-eng-r.png" />
                                                    <h3 class="content-title-reduce" style={{
                                                        color: 'white'
                                                    }}>ENERGY</h3>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="mt-5">
                                            <ol>

                                                <li>1. Switch to an electricity tariff supplied by renewable energy sources</li>
                                                <li>2. Invest in your own sources of renewable energy like fit solar panels, where possible</li>
                                                <li>3. Support energy suppliers that are working to provide 100% clean energy</li>
                                                <li>4. Check out the RE100 list of global businesses committed to operating on 100% renewable electricity</li>

                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card " style={{
                                height: '100vh',
                                boxShadow: '0px 0px 6px 0px #00000040'
                            }}>
                                <div className="card-body">
                                    <div>
                                        <div class="content-reduce">
                                            <a href="#" target="_blank">
                                                <div class="content-overlay-reduce"></div>
                                                <img src="../assets/images/Reduce-card6.png" style={{
                                                    width: '100%',
                                                    height: '40vh',
                                                    borderRadius: '15px'
                                                }} />
                                                <div class="content-details-reduce fadeIn-bottom">
                                            <img class="" height="30px" width="30px" src="../assets/images/new-ado-r.png" />
                                            <h3 class="content-title-reduce" style={{
                                                color: 'white'
                                            }}>ADVOCATE</h3>
                                           
                                        </div>
                                            </a>
                                        </div>

                                        <div className="mt-5">
                                            <ol>
                                                <li>1. Vocally support clean energy with friends, family and colleagues </li>
                                                <li>2. Tell your representatives how you value renewables and climate-friendly policies</li>
                                                <li>3. Vote with your wallet! Support businesses that take climate action</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



                <Footer />

            </div>
        </>
    )
}

export default Reduce