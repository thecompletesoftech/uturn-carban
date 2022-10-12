import React from "react";
import Navbar from "./Navbar";
import Footer from './Footer'


const Account = () => {
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

                <div className="container">
                    <div className="row">

                      

                        <p style={{
                            marginTop:'50px',
                            color: 'black',
                            fontSize: '25px',
                            fontFamily: 'Inter',
                            fontWeight: '700'
                        }}>U-Turn</p>

                        <br />

                        <br />

                        <div>
                            <br />
                        </div>
                        <div style={{
                             color: 'black',
                             fontSize: '18px',
                             fontFamily: 'Inter',
                             fontWeight: '700' 
                        }}>
                            PARTICIPANT ACCOUNT HOLDER AGREEMENT
                        </div>
                        <div>
                            <br />
                        </div>
                        <div style={{
                            fontSize:'13px'
                        }}>
                            Entities expecting to open an account with U-Turn must comply with the
                            following steps:
                        </div>
                        <div style={{
                            fontSize:'13px'
                        }}>
                            Select the account type for which you wish to open an account.
                        </div>
                        
                        <div>
                            <br />
                        </div>
                        <div style={{
                            fontSize:'13px'
                        }}>
                            <a style={{
                                fontSize:'25px'
                            }}>&bull;</a> Read and agree to the U-Turn Terms of Use.
                        </div>
                        <div>
                            <br />
                        </div>
                        
                        <div style={{
                            fontSize:'13px'
                        }}>
                            <a style={{
                                fontSize:'25px'
                            }}>&bull;</a> Upon accepting the U-Turn Terms of Use, the next screen will show the new
                            account application form. Complete all required fields in this form and
                            click the "Submit" button.
                        </div>
                        <div>
                            <br />
                        </div>
                        
                        <div style={{
                            fontSize:'13px'
                        }}>
                            <a style={{
                                fontSize:'25px'
                            }}>&bull;</a> Upon completing the new account application form, the Account Manager
                            identified in the form will receive an account activation email. This email
                            will explain how to activate your U-Turn account.
                        </div>
                        <div>
                            <br />
                        </div>
                        <div style={{
                            fontSize:'13px'
                        }}>
                            <a style={{
                                fontSize:'25px'
                            }}>&bull;</a> The U-Turn onboarding team will review your account application. Where the
                            account application is complete and approved, an email notification
                            describing account approval will be sent to the designated Account Manager.
                            Where materials are incomplete or additional information is required, the
                            onboarding team will contact the Account Manager.
                        </div>
                        <div>
                            <br />
                        </div>
                      
                        <div style={{
                            fontSize:'13px'
                        }}>
                            <a style={{
                                fontSize:'25px'
                            }}>&bull;</a> Approved accounts may begin using all functions in the Verra Registry
                            available to the account type selected in step 1 above.
                        </div>
                        <div>
                            <br />
                        </div>
                        <div style={{
                            fontSize:'13px'
                        }}>
                            Accounts will be billed for the Account Subscription Fee when the account
                            is approved. Once the invoice is created, the U-Turn accounts team sends
                            the Account Manager an email notification with the invoice and payment
                            details. The invoice is also made available via the "My Invoices" report
                            within the Verra Registry for downloading and printing. Failure to pay the
                            Account Subscription Fee will result in account inactivation.
                        </div>
                        <div>
                            <br />
                        </div>
                        <div style={{
                            fontSize:'13px'
                        }}>
                            If you have any questions about the U-Turn account application process,
                            please contact our expert team:
                        </div>
                        <div style={{
                            fontSize:'13px'
                        }}>
                            Email: care@u-turn.eco
                        </div>
                        <div>
                            <br />
                        </div>

                    </div>
                </div>

                <div className="row">
                    <img src="../assets/images/bottom-img.png" style={{
                        width: '100%',
                    }} />
                </div>

                <Footer />

            </div></>
    )
}

export default Account