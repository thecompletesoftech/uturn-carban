import React from "react";

const Shortlisted = () => {
   
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
                                        }}>Registration</p>
                                        <br />
                                        <form>
                                            <div className="form-group mb-3">
                                                <input type="text" id="test" name="test"
                                                    placeholder="Email"
                                                />
                                            </div>
                                            <div className="form-group mb-3">
                                                <input type="password" id="test" name="test"
                                                    placeholder="New Password" />
                                            </div>
                                            <div className="form-group mb-3">
                                                <input type="password" id="test" name="test"
                                                    placeholder="Confirm Password" />
                                            </div>

                                            <div class="custom-control custom-checkbox mb-3">
                                                <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                                <label class="custom-control-label" for="customCheck2" style={{ fontSize: '12px' }}>I agree for <span style={{ color:'#0D803B'}}>Terms & Conditions</span></label>
                                                <input type="checkbox" class="custom-control-input" id="customCheck3" />
                                                <label class="custom-control-label" for="customCheck3" style={{ fontSize: '12px' }}>I agree for <span style={{ color:'#0D803B'}}>Account Holder Agreement</span></label>
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
                                                <p style={{ fontSize: '12px' }}>Do not have an account? <a href="#Login" style={{
                                                    color: 'black'
                                                }}><b>Register</b></a></p>
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

export default Shortlisted