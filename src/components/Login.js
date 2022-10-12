import React from "react";
import './Login.css'
import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row no-gutter">
                    <div className="col-md-6 bg-light">
                        <div className="login d-flex align-items-center py-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-10 col-xl-7 mx-auto">
                                        <p className="text-center" style={{
                                            color: '#000000',
                                            fontSize: '17px',
                                            fontWeight: '700',
                                        }}>Login</p>
                                        <br />
                                        <form>
                                            <div className="form-group mb-3">
                                                <input type="text" id="test" name="test"
                                                    placeholder="Email"
                                                />
                                            </div>
                                            <div className="form-group mb-3">
                                                <input type="password" id="test" name="test"
                                                    placeholder="Password" />
                                            </div>
                                            <div className="custom-control mb-3">
                                                <label style={{
                                                    color: 'gray',
                                                    float: 'right',
                                                    fontSize: '12px',
                                                    lineHeight:'1%'
                                                }}><a href="#" style={{
                                                    color: '#7B7B7B',
                                                }}>Forgot Password</a></label>
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 shadow-sm">
                                                <b style={{
                                                    fontSize: '12px',
                                                    fontWeight: '700',
                                                }}>Submit</b>
                                            </button>

                                            <div className="row mt-3">
                                                <div className="col-md-5">
                                                    <hr style={{
                                                        color: '#7B7B7B',
                                                    }} />
                                                </div>
                                                <div className="col-md-2">
                                                    <p style={{
                                                        fontSize: '12px'
                                                    }}>OR</p>
                                                </div>
                                                <div className="col-md-5">
                                                    <hr style={{
                                                        color: '#7B7B7B'
                                                    }} />
                                                </div>
                                            </div>

                                            <div className="row mt-3">
                                                <div className="col-md-6">
                                                    <div className="card">
                                                        <div className="card-body p-2">
                                                            <div className="justify-content-center text-center">
                                                                <div style={{
                                                                    justifyContent: 'space-evenly',
                                                                    display: 'flex'
                                                                }}>

                                                                    <img src="../assets/images/Gmail.png" style={{
                                                                        height: '15px',
                                                                        width: '15px'
                                                                    }} />
                                                                    <p style={{
                                                                        lineHeight: '15px',
                                                                        fontSize: '13px'
                                                                    }}><b>Gmail</b></p>

                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="card">
                                                        <div className="card-body p-2">
                                                            <div className="justify-content-center text-center">
                                                                <div style={{
                                                                    justifyContent: 'space-evenly',
                                                                    display: 'flex'
                                                                }}>

                                                                    <img src="../assets/images/Linkedin.png" style={{
                                                                        height: '15px',
                                                                        width: '15px'
                                                                    }} />
                                                                    <p style={{
                                                                        lineHeight: '15px',
                                                                        fontSize: '13px'

                                                                    }}><b>Linkedin</b></p>

                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mt-5 justify-content-center text-center">
                                                <p style={{ fontSize: '12px' }}>Do not have an account? <NavLink to="/Registration" style={{
                                                    color: 'black'
                                                }}><b>Register</b></NavLink></p>
                                            </div>

                                            <div className="row mt-3 justify-content-center text-center">
                                                <a href="#cancel" style={{
                                                    fontSize: '12px',
                                                    color: 'black',

                                                }}><u>Cancel</u></a>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 d-none d-md-flex bg-image"></div>

                </div>
            </div>
        </>
    )
}

export default Login