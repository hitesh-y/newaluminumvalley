import React from "react";

const Contact = () => {

    return (
        <>
            {/* Banner */}
            <section className="section-banner">
                <div className="row banner-image">
                    <div className="banner-overlay" />
                    <div className="banner-section">
                        <div className="lh-banner-contain">
                            <h2>Contact Us</h2>
                            <div className="lh-breadcrumb">
                                <h5>
                                    <span className="lh-inner-breadcrumb">
                                        <a href="/">Home</a>
                                    </span>
                                    <span> / </span>
                                    <span>
                                        <a href="javascript:void(0)">Contact Us</a>
                                    </span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="section-contact padding-tb-100">
                <div className="container">
                    <div className="row mb-24">
                        <div className="col-lg-4 rs-pb-24">
                            <div className="lh-contact" data-aos-duration={1000}>
                                <div className="lh-contact-image">
                                    <img src="/assets/img/contact/call.png" className="svg-img" alt="call" />
                                </div>
                                <div className="lh-contact-detalis">
                                    <h4 className="lh-contact-detalis-heading">Make A call</h4>
                                    <p>Take the initiative and make a call. Our lines are open to hear from you.</p>
                                    <div className="lh-contact-detalis-buttons">
                                        <a href="#">+91 7889672203</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 rs-pb-24">
                            <div className="lh-contact" data-aos-duration={1500}>
                                <div className="lh-contact-image">
                                    <img src="/assets/img/contact/email.png" className="svg-img" alt="contact" />
                                </div>
                                <div className="lh-contact-detalis">
                                    <h4 className="lh-contact-detalis-heading">Send A Email</h4>
                                    <p>Feel free to customize the text to align with the unique aspects and offerings of your luxury hotel.</p>
                                    <div className="lh-contact-detalis-buttons">
                                        <a href="#">info@luxurystudioskey.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 rs-pb-24">
                            <div className="lh-contact" data-aos-duration={2000}>
                                <div className="lh-contact-image">
                                    <img src="/assets/img/contact/address.png" className="svg-img" alt="contact" />
                                </div>
                                <div className="lh-contact-detalis">
                                    <h4 className="lh-contact-detalis-heading">Address</h4>
                                    <p>M3M One Key Resiments, Golf Course Extension Road,Sector 67,Gurugram</p>
                                    <div className="lh-contact-detalis-buttons">
                                        <p className="main"> Haryana, 122001</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lh-contact-touch" data-aos-duration={2000}>
                        <div className="row">
                            <div className="col-lg-6 rs-pb-24">
                                <div className="lh-contact-touch-inner">
                                    <div className="lh-contact-touch-contain">
                                        <h4 className="lh-contact-touch-contain-heading">Get In Touch With Us Fell Free To Write Us</h4>
                                        <p>Your thoughts matter; share freely. We welcome your messages and look forward to connecting with you.</p>
                                    </div>
                                    <div className="lh-contact-touch-inner-form">
                                        <form action="#">
                                            <div className="lh-contact-touch-inner-form-warp">
                                                <input type="text" name="firstname" placeholder="Your Name*" className="lh-form-control mr-30" required />
                                                <input type="email" name="email" placeholder="Your Email*" className="lh-form-control" required />
                                            </div>
                                            <div className="lh-contact-touch-inner-form-warp">
                                                <input type="text" name="firstname" placeholder="Your Subject*" className="lh-form-control" required />
                                            </div>
                                            <div className="lh-contact-touch-inner-form-warp">
                                                <textarea className="lh-form-control" placeholder="Message*" defaultValue={""} />
                                            </div>
                                            <div className="lh-contact-touch-inner-form-button">
                                                <button className="lh-buttons result-placeholder" type="submit">
                                                    Send Message
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 rs-pb-24">
                                <div className="lh-contact-touch-ifrem"> 
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.9860335560024!2d77.0670126!3d28.389489799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d234b01d6ed3d%3A0x11951cbc47cb91ce!2sM3M%20One%20Key%20Resiments!5e0!3m2!1sen!2sin!4v1702815664730!5m2!1sen!2sin" style={{ border: 0 }}></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact;