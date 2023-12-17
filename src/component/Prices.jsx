import React from "react";

const Prices = () => {
    return (
        <section className="section-prices bg-gray padding-tb-100">
            <div className="container">
                <div className="row">
                    <div className="banner" >
                        <h2>The Best <span>Prices</span></h2>
                    </div>
                    <div className="col-lg-4 rs-pb-24">
                        <div className="lh-prices" >
                            <img src="/assets/img/prices/1.png" alt="prices_1" className="prices-image" />
                            <div className="lh-prices-out">
                                <div className="lh-prices-in">
                                    <h4 className="lh-price-dollar"><span>₹</span>3000<code> / Per night</code></h4>
                                    <h4 className="lh-prices-heading">Standard Room</h4>
                                </div>
                                <div className="lh-prices-viwe">
                                    <ul>
                                        <li>
                                            <span>Bed &amp; Breakfast</span>
                                            <i className="ri-arrow-right-line" />
                                        </li>
                                        <li>
                                            <span>Home Made Food</span>
                                            <i className="ri-arrow-right-line" />
                                        </li>
                                        <li>
                                            <span>Tour Guide</span>
                                            <i className="ri-arrow-right-line" />
                                        </li>
                                        <li>
                                            <span>Safety &amp; security</span>
                                            <i className="ri-arrow-right-line" />
                                        </li>
                                        <li>
                                            <span>Local Heritage</span>
                                            <i className="ri-arrow-right-line" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="price-buttons">
                                    <a href="room-details.html" className="lh-buttons result-placeholder">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 rs-pb-24">
                        <div className="lh-prices"  data-aos-duration={2000}>
                            <img src="/assets/img/prices/2.png" alt="prices_2" className="prices-image active" />
                            <div className="lh-prices-out">
                                <div className="lh-prices-in">
                                    <h4 className="lh-price-dollar"><span>₹</span>3500<code> / Per night</code></h4>
                                    <h4 className="lh-prices-heading">Deluxe Room</h4>
                                </div>
                                <div className="lh-prices-viwe">
                                    <ul>
                                        <li>
                                            <span>Bed &amp; Breakfast</span>
                                            <i className="ri-arrow-right-line" />
                                        </li>
                                        <li>
                                            <span>Home Made Food</span>
                                            <i className="ri-arrow-right-line" />
                                        </li>
                                        <li>
                                            <span>Tour Guide</span>
                                            <i className="ri-arrow-right-line" />
                                        </li>
                                        <li>
                                            <span>Safety &amp; security</span>
                                            <i className="ri-arrow-right-line" />
                                        </li>
                                        <li>
                                            <span>Local Heritage</span>
                                            <i className="ri-arrow-right-line" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="price-buttons">
                                    <a href="room-details.html" className="lh-buttons-invers result-placeholder">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 rs-pb-24">
                        <div className="lh-prices"  data-aos-duration={3000}>
                            <img src="/assets/img/prices/3.png" alt="prices_3" className="prices-image" />
                            <div className="lh-prices-out">
                                <div className="lh-prices-in">
                                    <h4 className="lh-price-dollar"><span>₹</span>6000<code> / Per night</code></h4>
                                    <h4 className="lh-prices-heading">Premium Suite</h4>
                                </div>
                                <div className="lh-prices-viwe">
                                    <ul>
                                        <li>
                                            <span>Bed &amp; Breakfast</span>
                                            <i className="ri-arrow-right-line" />
                                        </li>
                                        <li>
                                            <span>Home Made Food</span>
                                            <i className="ri-arrow-right-line" />
                                        </li>
                                        <li>
                                            <span>Tour Guide</span>
                                            <i className="ri-arrow-right-line" />
                                        </li>
                                        <li>
                                            <span>Safety &amp; security</span>
                                            <i className="ri-arrow-right-line" />
                                        </li>
                                        <li>
                                            <span>Local Heritage</span>
                                            <i className="ri-arrow-right-line" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="price-buttons">
                                    <a href="room-details.html" className="lh-buttons result-placeholder">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Prices;