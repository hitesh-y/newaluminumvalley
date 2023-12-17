import React from "react";

const Rooms = () => {
    return (
        <section className="section-room padding-tb-100"  >
            <div className="container">
                <div className="banner">
                    <h2>Choose Your Luxurious <span>Room</span></h2>
                </div>
                <nav>
                    <div className="nav nav-tabs rooms lh-room" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-Deluxe-tab" data-bs-toggle="tab" data-bs-target="#nav-Deluxe" type="button" role="tab" aria-controls="nav-Deluxe" aria-selected="true">
                            <img src="/assets/img/room/1.png" alt={1} />
                            Deluxe Room
                        </button>
                        <button className="nav-link" id="nav-Single-tab" data-bs-toggle="tab" data-bs-target="#nav-Single" type="button" role="tab" aria-controls="nav-Single" aria-selected="false">
                            <img src="/assets/img/room/2.png" alt={2} />
                            Standard
                        </button>
                        {/* <button className="nav-link" id="nav-Super-tab" data-bs-toggle="tab" data-bs-target="#nav-Super" type="button" role="tab" aria-controls="nav-Super" aria-selected="false">
                            <img src="/assets/img/room/3.png" alt={3} />
                            Super Room
                        </button> */}
                        <button className="nav-link" id="nav-Presidential-tab" data-bs-toggle="tab" data-bs-target="#nav-Presidential" type="button" role="tab" aria-controls="nav-Presidential" aria-selected="false">
                            <img src="/assets/img/room/4.png" alt={4} />
                            Premium suite
                        </button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade active show" id="nav-Deluxe" role="tabpanel" aria-labelledby="nav-Deluxe-tab">
                        <div className="container">
                            <div className="row p-0 lh-d-block">
                                <div className="col-xl-6 col-lg-12">
                                    <div className="lh-room-contain">
                                        <div className="lh-contain-heading">
                                            <h4>Deluxe Room</h4>
                                            <div className="lh-room-price">
                                                <h4>₹ 3500  /<span>Per night</span></h4>
                                            </div>
                                        </div>
                                        <div className="lh-room-size d-flex">
                                            <p>1100 sq.ft <span>|</span></p>
                                            <p>1 king Bed <span>|</span></p>
                                            <p>Up to 4 Guest</p>
                                        </div>
                                        <p>
                                            Indulge in the epitome of refinement with our Deluxe Rooms, where sophistication seamlessly merges with comfort.
                                            Thoughtfully designed to exceed expectations,these meticulously curated spaces offer a sanctuary of elegance and
                                            tranquility.</p>
                                        <div className="lh-main-features">
                                            <div className="lh-contain-heading">
                                                <h4>Room Features</h4>
                                            </div>
                                            <div className="lh-room-features">
                                                <div className="lh-cols-room">
                                                    <ul>
                                                        <li>42 Inch flat screen TV</li>
                                                        <li>In-room Safe</li>
                                                        <li>Mini-refrigerator</li>
                                                        <li> Bathroom</li>
                                                        <li> Bathtub</li>
                                                        <li> Cleaning products</li>
                                                        <li> Shampoo</li>
                                                        <li> Conditioner</li> 
                                                    </ul>
                                                </div>
                                                <div className="lh-cols-room">
                                                    <ul>
                                                        <li>Mini-refrigerator</li>
                                                        <li>Breakfast</li>
                                                        <li>complimeatary bottled water</li>
                                                        <li> Body soap</li>
                                                        <li> Bidet</li>
                                                        <li> Hot water</li>
                                                        <li> Shower gel</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12 p-0">
                                    <div className="room-img">
                                        <img src="/assets/img/room/room-1.png" alt="room-img" className="room-image" />
                                        <a href="room-details.html" className="link"><i className="ri-arrow-right-line" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-Single" role="tabpanel" aria-labelledby="nav-Single-tab">
                        <div className="container">
                            <div className="row p-0 lh-d-block">
                                <div className="col-xl-6 col-lg-12">
                                    <div className="lh-room-contain">
                                        <div className="lh-contain-heading">
                                            <h4>Standard</h4>
                                            <div className="lh-room-price">
                                                <h4>₹ 3000 /<span>Per night</span></h4>
                                            </div>
                                        </div>
                                        <div className="lh-room-size d-flex">
                                            <p>1200 sq.ft <span>|</span></p>
                                            <p>1 king Bed <span>|</span></p>
                                            <p>Up to 6 Guest</p>
                                        </div>
                                        <p>This is the dolor sit amet consectetur adipisicing elit. Culpa necessitatibus
                                            consequatur nostrum iure? Similique voluptatibus totam nobis exercitationem
                                            perferendis id, cupiditate at et praesentium quas? Quae amet, magni suscipit
                                            sequi.</p>
                                        <div className="lh-main-features">
                                            <div className="lh-contain-heading">
                                                <h4>Room Features</h4>
                                            </div>
                                            <div className="lh-room-features">
                                                <div className="lh-cols-room">
                                                    <ul>
                                                        <li>42 Inch flat screen TV</li>
                                                        <li>In-room Safe</li>
                                                        <li>Mini-refrigerator</li>
                                                        <li> Bathroom</li>
                                                        <li> Bathtub</li>
                                                        <li> Cleaning products</li>
                                                        <li> Shampoo</li>
                                                        <li> Conditioner</li> 
                                                    </ul>
                                                </div>
                                                <div className="lh-cols-room">
                                                    <ul>
                                                        <li>Mini-refrigerator</li>
                                                        <li>Breakfast</li>
                                                        <li>complimeatary bottled water</li>
                                                        <li> Body soap</li>
                                                        <li> Bidet</li>
                                                        <li> Hot water</li>
                                                        <li> Shower gel</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12 p-0">
                                    <div className="room-img">
                                        <img src="/assets/img/room/room-2.png" alt="room-img" className="room-image" />
                                        <a href="room-details.html" className="link"><i className="ri-arrow-right-line" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="tab-pane fade" id="nav-Super" role="tabpanel" aria-labelledby="nav-Super-tab">
                        <div className="container">
                            <div className="row p-0 lh-d-block">
                                <div className="col-xl-6 col-lg-12">
                                    <div className="lh-room-contain">
                                        <div className="lh-contain-heading">
                                            <h4>Super Room</h4>
                                            <div className="lh-room-price">
                                                <h4>₹50 /<span>Per night</span></h4>
                                            </div>
                                        </div>
                                        <div className="lh-room-size d-flex">
                                            <p>1350 sq.ft <span>|</span></p>
                                            <p>2 king Bed <span>|</span></p>
                                            <p>Up to 8 Guest</p>
                                        </div>
                                        <p>This is the dolor sit amet consectetur adipisicing elit. Culpa necessitatibus
                                            consequatur nostrum iure? Similique voluptatibus totam nobis exercitationem
                                            perferendis id, cupiditate at et praesentium quas? Quae amet, magni suscipit
                                            sequi.</p>
                                        <div className="lh-main-features">
                                            <div className="lh-contain-heading">
                                                <h4>Room Features</h4>
                                            </div>
                                            <div className="lh-room-features">
                                                <div className="lh-cols-room">
                                                    <ul>
                                                        <li>42 Inch flat screen TV</li>
                                                        <li>In-room Safe</li>
                                                        <li>Mini-refrigerator</li>
                                                    </ul>
                                                </div>
                                                <div className="lh-cols-room">
                                                    <ul>
                                                        <li>Mini-refrigerator</li>
                                                        <li>Breakfast</li>
                                                        <li>complimeatary bottled water</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12 p-0">
                                    <div className="room-img">
                                        <img src="/assets/img/room/room-3.png" alt="room-img" className="room-image" />
                                        <a href="room-details.html" className="link"><i className="ri-arrow-right-line" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="tab-pane fade" id="nav-Presidential" role="tabpanel" aria-labelledby="nav-Presidential-tab">
                        <div className="container">
                            <div className="row p-0 lh-d-block">
                                <div className="col-xl-6 col-lg-12">
                                    <div className="lh-room-contain">
                                        <div className="lh-contain-heading">
                                            <h4>Premium suite</h4>
                                            <div className="lh-room-price">
                                                <h4>6000 /<span>Per night</span></h4>
                                            </div>
                                        </div>
                                        <div className="lh-room-size d-flex">
                                            <p>1500 sq.ft <span>|</span></p>
                                            <p>2 king Bed <span>|</span></p>
                                            <p>Up to 8 Guest</p>
                                        </div>
                                        <p>This is the dolor sit amet consectetur adipisicing elit. Culpa necessitatibus
                                            consequatur nostrum iure? Similique voluptatibus totam nobis exercitationem
                                            perferendis id, cupiditate at et praesentium quas? Quae amet, magni suscipit
                                            sequi.</p>
                                        <div className="lh-main-features">
                                            <div className="lh-contain-heading">
                                                <h4>Room Features</h4>
                                            </div>
                                            <div className="lh-room-features">
                                                <div className="lh-cols-room">
                                                    <ul>
                                                        <li>42 Inch flat screen TV</li>
                                                        <li>In-room Safe</li>
                                                        <li>Mini-refrigerator</li>
                                                        <li> Bathroom</li>
                                                        <li> Bathtub</li>
                                                        <li> Cleaning products</li>
                                                        <li> Shampoo</li>
                                                        <li> Conditioner</li> 
                                                    </ul>
                                                </div>
                                                <div className="lh-cols-room">
                                                    <ul>
                                                        <li>Mini-refrigerator</li>
                                                        <li>Breakfast</li>
                                                        <li>complimeatary bottled water</li>
                                                        <li> Body soap</li>
                                                        <li> Bidet</li>
                                                        <li> Hot water</li>
                                                        <li> Shower gel</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12 p-0">
                                    <div className="room-img">
                                        <img src="/assets/img/room/room-4.png" alt="room-img" className="room-image" />
                                        <a href="room-details.html" className="link"><i className="ri-arrow-right-line" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Rooms;