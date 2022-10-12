import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Governance = () => {
    return (
        <>
            <div style={{
                overflow: 'hidden',
            }}>


                <Navbar />

                <section className="w3l-main-slider" id="home " style={{
                    backgroundImage: "url('../assets/images/Governance.png')",
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
                    <div className="row">
                        <div className="col-md-4" style={{
                            padding: 0
                        }}>
                            <div className="position-relative">
                                <img
                                    src="../assets/images/governance-hammer.png"
                                    alt=""
                                    style={{
                                        width: '100%'
                                    }}
                                />

                            </div>
                        </div>
                        <div className="col-md-8 mb-lg-0 mb-md-5 mb-5 align-self goverfirstcom">

                            <div className="row">
                                <p style={{
                                    color: '#000000',
                                  
                                    fontSize: '20px',
                                    marginTop: '50px'
                                }}><b>Governance</b></p>
                            </div>

                            <div className="row" >

                                <span className="mt-md-4" style={{
                                    color: '#000000',
                                  
                                }}>
                                    There are two documents that set out the overall governance of the organization. The Articles of Incorporation contain basic structural information, organizational objectives and a statement of our tax-exempt purpose. The Articles of Incorporation also establish that the organization shall be governed by a Board of Directors that is to be appointed/elected under the rules provided by the Bylaws.


                                </span>

                            </div>

                            <div className="row">

                                <span className="mt-md-4" style={{
                                    color: '#000000',
                                }}>
                                    The Bylaws serve as U-Turn’s operating manual. They set out the specific ways in which the organization is governed, including the selection of members of the board, the actions requiring board approval, the threshold needed for board approval of actions (e.g., two-thirds majority for major actions), the establishment of board committees and outside advisory and steering committees, the titles, roles and terms of all officers, and financial reporting requirements.
                                </span>

                            </div>



                        </div>
                    </div>
                </div>



                <div className="container">

                    <div className="row">
                        <div className="col-md-12 mt-3">
                            <span className="" style={{
                                color: '#000000',
                            }}>
                                There are a number of important policies that govern various aspects of the operation of U-Turn, as follows:

                            </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mt-3">
                            <span className="" style={{
                                color: '#000000',
                            }}>
                                Conflicts of Interest. U-Turn requires all board members and employees to abide by strict conflict of interest policies and to declare on an annual basis that they have not engaged in any conduct that violates U-Turn’s Conflict of Interest Policy. In addition, board members are required to report any potential conflicts of interest at each meeting of the board and to recuse themselves where any conflicts exist. Finally, employees are required to annually disclose any gifts (regardless of value) they have received over the prior year from anyone who is doing business, has done business, or is seeking to do business with U-Turn.
                            </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mt-3">
                            <span className="" style={{
                                color: '#000000',
                            }}>
                                Complaints and Appeals Policy. U-Turn provides a Complaints and Appeals Policy that applies to all standards and programs managed by U-Turn.
                            </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mt-3">
                            <span className="" style={{
                                color: '#000000',
                            }}>
                                Whistleblower Policy. U-Turn has a Whistleblower Policy intended to encourage and enable employees and others to raise any concerns about any violations of misconduct or unethical behavior by any U-Turn employee, director or officer by reporting such behavior to a supervisor, the Chief Operating and Financial Officer, or the Chief Executive Officer.
                            </span>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 mt-3">
                            <span className="" style={{
                                color: '#000000',
                            }}>
                                Document Retention. As part of its accounting policies and procedures, U-Turn has a records retention policy that identifies the types of documents that must be retained and for how long.
                            </span>
                        </div>
                    </div>

                    <br />
                    <br />



                </div>




                <Footer />

            </div>
        </>
    )
}
export default Governance