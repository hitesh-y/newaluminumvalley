import React from "react";

const Hero = () => {
    return (
        <section className="section-hero">
            <div className="container-fulid">
                <div className="row hero-image">
                    <div className="hero-section">
                        <div className="particles-bg" id="particles-js" />
                        <div className="lh-hero-contain container">
                            <h4  data-aos-duration={1000}>Luxury Hotel &amp; Best Resort</h4>
                            <h1  data-aos-duration={1500}>A Symphony of Comfort &amp; Convenience.</h1>
                            <a className="lh-buttons result-placeholder" href="#rooms">
                                Room &amp; suites
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero;