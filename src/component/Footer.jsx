import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <div>
            {/* Footer */}
            <footer>
                <div className="container">
                    <div className="footer-top-section">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 rs-pb-24 p-991 order-lg-1 order-md-2 order-2">
                                <div className="lh-footer-cols-contain">
                                    <div className="lh-footer-heading">
                                        <h4>Explore</h4>
                                    </div>
                                    <ul>
                                        <li>
                                            <code>*</code>
                                            <a href="/">Home</a>
                                        </li>
                                        <li>
                                            <code>*</code>
                                            <Link href="/about">About</Link>
                                        </li>
                                        <li>
                                            <code>*</code>
                                            <Link href="/rooms">Rooms &amp; suites</Link>
                                        </li> 
                                        <li>
                                            <code>*</code>
                                            <a href="/blogs">Blogs</a>
                                        </li>
                                        <li>
                                            <code>*</code>
                                            <Link href="/gallery">Gallery</Link>
                                        </li>
                                        <li>
                                            <code>*</code>
                                            <Link href="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 rs-pb-24 order-lg-2 order-md-1 order-1">
                                <div className="lh-social-media">
                                    <div className="footer-logos">
                                        <img src="/assets/img/logo/logo.jpg" alt="logo" />
                                    </div>
                                    <div className="lh-footer-social">
                                        <p>Welcome to Luxury Studios Key, where opulence meets innovation. Elevate your experience with our premium studio spaces tailored for unparalleled comfort and style. </p>
                                        <form className="lh-control-footer" role="search">
                                            <div className="lh-control-inner-icons">
                                                <i className="ri-send-plane-line" />
                                            </div>
                                            <input className="form-control shadow-none me-4" type="search" placeholder="Subscribe..." aria-label="Search" />
                                        </form>
                                    </div>
                                    <div className="lh-follow-social">
                                        <h4 className="heading">Follow On Social</h4>
                                        <div className="footer-logo-image" style={{ display: 'flex', justifyContent: 'center' }}>
                                            <a href="#"><img src="/assets/img/logo/facebook.png" alt="facebook" /></a>
                                            <a href="#"><img src="/assets/img/logo/twitter.png" alt="twitter" /></a>
                                            <a href="#"><img src="/assets/img/logo/instagram.png" alt="instagram" /></a>
                                            <a href="#"><img src="/assets/img/logo/linkedin.png" alt="linkedin" /></a>
                                            <a href="#"><img src="/assets/img/logo/dribbble.png" alt="dribbble" /></a>
                                            <a href="#"><img src="/assets/img/logo/pinterest.png" alt="pinterest" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 rs-pb-24 order-lg-3 order-md-3 order-3">
                                <div className="lh-footer-cols-contain ">
                                    <div className="lh-footer-heading">
                                        <h4>Contact Information</h4>
                                    </div>
                                    <div className="lh-footer-contact-infoemation">
                                        <ul>
                                            <li className="lh-information">
                                                <h5 className="heading">Location</h5>
                                                <span>M3M One Key Resiments, Golf Course Extension Road,Sector 67,Gurugram, Haryana, 122001</span>
                                            </li>
                                            <li className="lh-information">
                                                <h5 className="heading">Email</h5>
                                                <span>info@luxurystudioskey.com</span>
                                            </li>
                                            <li className="lh-information">
                                                <h5 className="heading">Phone No</h5>
                                                <span>+91 7889672203</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-copy">
                        <span>Copyright @ 2023 <a href="/">Luxurystudioskey</a> All Rights Reserved</span>
                    </div>
                </div>
            </footer>
            {/* Tap to top */}
            <a href="#" className="back-to-top result-placeholder">
                <i className="ri-arrow-up-double-line" />
            </a>
        </div>

    )
}

export default Footer;