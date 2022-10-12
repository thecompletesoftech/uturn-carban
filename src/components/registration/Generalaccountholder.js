import React, { useState } from "react";
import './registration.css'

const Generalaccount = () => {

    const [index, setindex] = useState(0)


    return (
        <>
            {
                index == 0 ? (<>
                    <div className="container-fluid">
                        <div className="row no-gutter">
                            <div className="col-md-6 bg-light">
                                <div className="login d-flex align-items-center py-5">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-10 col-xl-7 mx-auto">
                                                <p className="text-left" style={{
                                                    color: '#000000',
                                                    fontSize: '17px',
                                                    fontWeight: '700',
                                                }}>Account Details</p>

                                                <form>


                                                    <div class="selectdiv">
                                                        <select>
                                                            <option selected className="changeselect">Account Type</option>
                                                            <option className="changeselect">Option 1</option>
                                                            <option className="changeselect">Option 2</option>
                                                            <option className="changeselect">Last long option</option>
                                                        </select>
                                                    </div>

                                                    <br />
                                                    <br />
                                                    <br />
                                                    <br />


                                                    <input type="text" id="test" name="test" placeholder="Privacy" />



                                                    <div class="selectdiv">
                                                        <select>
                                                            <option selected className="changeselect">Omnibus Holdings</option>
                                                            <option className="changeselect">Option 1</option>
                                                            <option className="changeselect">Option 2</option>
                                                            <option className="changeselect">Last long option</option>
                                                        </select>
                                                    </div>


                                                    <div class="selectdiv">
                                                        <select>
                                                            <option selected className="changeselect">Omnibus Retirements</option>
                                                            <option className="changeselect">Option 1</option>
                                                            <option className="changeselect">Option 2</option>
                                                            <option className="changeselect">Last long option</option>
                                                        </select>
                                                    </div>

                                                    <div class="selectdiv">
                                                        <select>
                                                            <option selected className="changeselect">Is Your Organization Regulated? </option>
                                                            <option className="changeselect">Option 1</option>
                                                            <option className="changeselect">Option 2</option>
                                                            <option className="changeselect">Last long option</option>
                                                        </select>
                                                    </div>




                                                    <button type="submit" className="btn btn-primary text-uppercase mb-2 mt-3 shadow-sm float-right"
                                                        onClick={() => setindex(1)}
                                                    >
                                                        <b style={{
                                                            fontSize: '12px',
                                                            fontWeight: '700',
                                                            padding: '15px'
                                                        }}>Next {'>'}</b>
                                                    </button>


                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 d-none d-md-flex bg-image"></div>

                        </div>
                    </div>
                </>) : (

                    index == 1 ? (<>

                        <div className="container-fluid">
                            <div className="row no-gutter">
                                <div className="col-md-6 bg-light">
                                    <div className="login d-flex align-items-center py-5">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-10 col-xl-7 mx-auto">
                                                    <p className="text-left" style={{
                                                        color: '#000000',
                                                        fontSize: '17px',
                                                        fontWeight: '700',
                                                    }}>Account Details</p>
                                                    <span style={{
                                                        fontSize: '13px',
                                                        color: '#000000'
                                                    }}>
                                                        Account Manager information
                                                    </span>
                                                    <form>

                                                        <br/>

                                                        <div className="form-group" style={{
                                                            marginTop: '-5px'
                                                        }}>
                                                            <input type="text" id="test" name="test" placeholder="Accpunt Manager Job Title" />
                                                        </div>

                                                        <div className="form-group" style={{
                                                            marginTop: '-10px'
                                                        }}>
                                                            <input type="text" id="test" name="test" placeholder="Name" />
                                                        </div>
                                                        <div className="form-group" style={{
                                                            marginTop: '-10px'
                                                        }}>
                                                            <input type="text" id="test" name="test" placeholder="Contact Address 1" />
                                                        </div>
                                                        <div className="form-group" style={{
                                                            marginTop: '-10px'
                                                        }}>
                                                            <input type="text" id="test" name="test" placeholder="Contact Addres 2" />
                                                        </div>

                                                        <div className="form-row">
                                                            <div className="col-md-6">
                                                                <div className="form-group" style={{
                                                                    marginTop: '-10px'
                                                                }}>
                                                                    <input type="text" id="test" name="test" placeholder="City" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group" style={{
                                                                    marginTop: '-10px'
                                                                }}>
                                                                    <input type="text" id="test" name="test" placeholder="State" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="form-row">
                                                            <div className="col-md-6">
                                                                <div className="form-group" style={{
                                                                    marginTop: '-10px'
                                                                }}>
                                                                    <input type="text" id="test" name="test" placeholder="Country" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group" style={{
                                                                    marginTop: '-10px'
                                                                }}>
                                                                    <input type="text" id="test" name="test" placeholder="Zip/Postal" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="form-row">
                                                            <div className="col-md-6">
                                                                <div className="form-group" style={{
                                                                    marginTop: '-10px'
                                                                }}>
                                                                    <input type="text" id="test" name="test" placeholder="Telephone" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group" style={{
                                                                    marginTop: '-10px'
                                                                }}>
                                                                    <input type="text" id="test" name="test" placeholder="Email" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <button type="submit" className="btn btn-primary text-uppercase mb-2 mt-3 shadow-sm " 
                                                        style={{
                                                            marginLeft: '130px',
                                                            background:'white',
                                                            borderColor:'#000000'
                                                        }}>
                                                            <b style={{
                                                                fontSize: '12px',
                                                                fontWeight: '700',
                                                                padding: '15px'
                                                            }}>Cancel</b>
                                                        </button>


                                                        <button type="submit" className="btn btn-primary text-uppercase mb-2 mt-3 shadow-sm float-right">
                                                            <b style={{
                                                                fontSize: '12px',
                                                                fontWeight: '700',
                                                                padding: '15px'
                                                            }}>submit</b>
                                                        </button>

                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 d-none d-md-flex bg-image"></div>

                            </div>
                        </div>

                    </>) : (<></>)
                )
            }


        </>
    )
}

export default Generalaccount