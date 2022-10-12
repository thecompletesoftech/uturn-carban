import React from "react";
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter, BsYoutube } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa'
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <section class="w3l-footer-29-main" style={{ background: '#232323', }}>
                <div class="footer-29 py-5">
                    <div class="container py-lg-4">
                        <div class="row footer-top-29">
                            <div class="col-lg-5 col-md-6 col-sm-7 footer-list-29 footer-1 pr-lg-5">
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-7 footer-list-29 footer-1 pr-lg-5">
                                <div class="main-social-footer-29 mt-4">
                                    <a href="#facebook" style={{ background: '#fff', color: '#000' }} class="facebook"><FaFacebookF /></a>
                                    <a href="#twitter" style={{ background: '#fff', color: '#000' }} class="twitter"><BsTwitter /></a>
                                    <a href="#instagram" style={{ background: '#fff', color: '#000' }} class="instagram"><AiOutlineInstagram /></a>
                                    <a href="#linkedin" style={{ background: '#fff', color: '#000' }} class="linkedin"><FaLinkedinIn /></a>
                                    <a href="#linkedin" style={{ background: '#fff', color: '#000' }} class="linkedin"><BsYoutube /></a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <section class="row w3l-copyright text-center justify-content-center" >

                    <p class="copy-footer-28" >
                        <NavLink to="" style={{ fontSize: '12px',textDecoration:'none' }}>© COPYRIGHT 2022 UTURN </NavLink>
                        <NavLink to="/Terms" style={{ fontSize: '12px',textDecoration:'none' }}>| TERMS AND CONDITIONS </NavLink>
                        <NavLink to="/Privacy" style={{ fontSize: '12px',textDecoration:'none' }}>| PRIVACY POLICY</NavLink>
                    </p>

                </section>

            </section>
        </>
    )
}
export default Footer