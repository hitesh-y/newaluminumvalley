import React from "react";

const About = () => {
    return (
        <section className="section-about bg-gray padding-tb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 rs-pb-24" data-aos-duration={1500}>
                        <img src="/assets/img/about/about.png" alt="about" className="w-100" />
                    </div>
                    <div className="col-lg-6 rs-pb-24" data-aos-duration={2000}>
                        <div className="lh-about-detail">
                            <div className="banner t-left">
                                <h2>Find The Best City <span>Branches</span></h2>
                            </div>
                            <div className="lh-branches-paragraph">
                                <p>
                                    Discover unparalleled luxury at our exquisite city branches, where opulence meets urban
                                    sophistication. Our carefully curated deluxe rooms redefine the standard
                                    for upscale accommodations, ensuring a refined experience for the discerning traveler. </p>
                            </div>
                            <div className="lh-branches">
                                <div className="cols">
                                    <h4> <i className="ri-arrow-right-up-line" /> Trusted Partners</h4>
                                    <p>
                                        At Luxurystudioskey, we pride ourselves on cultivating strong relationships with trusted partners to enhance your overall experience. </p>
                                </div>
                                <div className="cols">
                                    <h4> <i className="ri-arrow-right-up-line" /> Laxury amenities</h4>
                                    <p>
                                        Indulge in a world of luxury with our meticulously curated array of amenities designed to elevate your stay to new heights of sophistication and comfort.</p>
                                </div>
                            </div>
                            <div className="lh-abouts-buttons">
                                <a className="lh-buttons result-placeholder" href="/">
                                    View More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About;