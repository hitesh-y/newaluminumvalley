import React from "react";

const Amenities = () => {

  return (
    <section className="section-amenities padding-tb-100">
      <div className="container">
        <div className="banner" >
          <h2>Amenities At <span>Hotel</span></h2>
        </div>
        <div className="row mtb-m-12">
          <div className="col-md-6 col-sm-12 m-tb-12">
            <div className="lh-amenities" data-aos-duration={1500}>
              <div className="amenities-detail">
                <div className="amenities-box">
                  <img src="/assets/img/amenities/1.png" alt="amenities_1" className="amenities-left-image" />
                </div>
                <div className="amenities-box">
                  <div className="lh-amenities-in">
                    <h4 className="side-number">01</h4>
                    <div className="lh-top-dish">
                      {/* <img src="/assets/img/amenities/amenities-dish-1.svg" className="svg-img" alt="amenities-dish-1" /> */}
                    </div>
                    <div className="amenities-contain">
                      <h4 className="amenities-heading">Our Restaurant</h4>
                      <p>
                        Welcome to a culinary sanctuary where exquisite flavors and refined ambiance converge  welcome to Luxurystudioskey. Our restaurant is a celebration of gastronomic delight, where every dish is a masterpiece crafted with passion and precision.</p>
                      <a href="facilities.html">Read more <i className="ri-arrow-right-line" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 m-tb-12">
            <div className="lh-amenities" data-aos-duration={2000}>
              <div className="amenities-detail">
                <div className="amenities-box">
                  <img src="/assets/img/amenities/2.png" alt="amenities_2" className="amenities-left-image" />
                </div>
                <div className="amenities-box">
                  <div className="lh-amenities-in">
                    <h4 className="side-number">02</h4>
                    <div className="lh-top-dish">
                      {/* <img src="/assets/img/amenities/amenities-dish-2.svg" className="svg-img" alt="amenities-dish-2" /> */}
                    </div>
                    <div className="amenities-contain">
                      <h4 className="amenities-heading">Spa &amp; Beauty</h4>
                      <p>
                        Embark on a journey of relaxation and rejuvenation at our Spa & Beauty haven, where tranquility meets indulgence. Our spa is a sanctuary designed to soothe your senses and elevate your well being.</p>
                      <a href="facilities.html">Read more <i className="ri-arrow-right-line" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 m-tb-12">
            <div className="lh-amenities" data-aos-duration={1500}>
              <div className="amenities-detail">
                <div className="amenities-box">
                  <div className="lh-amenities-in lh-amenities-right">
                    <h4 className="side-number">03</h4>
                    <div className="lh-top-dish">
                      {/* <img src="/assets/img/amenities/amenities-dish-4.svg" className="svg-img" alt="amenities-dish-3" /> */}
                    </div>
                    <div className="amenities-contain">
                      <h4 className="amenities-heading">Golf &amp; Garden</h4>
                      <p>Experience the perfect fusion of leisure and nature at our Golf & Garden oasis. Immerse yourself in the lush greenery of our meticulously landscaped gardens, providing a tranquil backdrop for relaxation and contemplation.</p>
                      <a href="facilities.html">Read more <i className="ri-arrow-right-line" /></a>
                    </div>
                  </div>
                </div>
                <div className="amenities-box">
                  {/* <img src="/assets/img/amenities/3.png" alt="amenities_3" className="amenities-right-image" /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 m-tb-12">
            <div className="lh-amenities" data-aos-duration={2000}>
              <div className="amenities-detail">
                <div className="amenities-box">
                  <div className="lh-amenities-in lh-amenities-right">
                    <h4 className="side-number">04</h4>
                    <div className="lh-top-dish">
                      {/* <img src="/assets/img/amenities/amenities-dish-3.svg" className="svg-img" alt="amenities-dish-4" /> */}
                    </div>
                    <div className="amenities-contain">
                      <h4 className="amenities-heading">Fitness &amp; Gym</h4>
                      <p>
                        Elevate your well-being at our state-of-the-art Fitness & Gym facility, where health meets luxury. Our fitness center is more than just a place to exercise - its a wellness haven designed to inspire and invigorate.</p>
                      <a href="facilities.html">Read more <i className="ri-arrow-right-line" /></a>
                    </div>
                  </div>
                </div>
                <div className="amenities-box">
                  {/* <img src="/assets/img/amenities/4.png" alt="amenities_4" className="amenities-right-image" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Amenities;