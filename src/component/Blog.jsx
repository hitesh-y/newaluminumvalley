import React from "react";

const Blog = () => {

    return (
        <section className="section-blog bg-gray padding-tb-100">
            <div className="container">
                <div className="banner"  >
                    <h2>Stay Update With <span>Us</span></h2>
                </div>
                <div className="slick-slider blog-slider">
                    <div className="blog-card">
                        <figure><img src="/assets/img/blog/2.png" alt="blog-img" className="blog-image-top" /></figure>
                        <div className="lh-blog">
                            <div className="lh-blog-date">
                                <span><code>Restaurant</code> - 09 Jan 2023 - 05 Comment</span>
                            </div>
                            <a className="top-heding" href="/">Offers Exclusive amenities &amp; Facilities To Guests
                                and free offers.</a>
                        </div>
                    </div>
                    <div className="blog-card">
                        <figure><img src="/assets/img/blog/3.png" alt="blog-img" className="blog-image-top" /></figure>
                        <div className="lh-blog">
                            <div className="lh-blog-date">
                                <span><code>Marketing</code> - 15 Feb 2023 - 22 Comment</span>
                            </div>
                            <a className="top-heding" href="/">Announces A Private Island Hotel In The Maldives
                                for couple.</a>
                        </div>
                    </div>
                    <div className="blog-card">
                        <figure><img src="/assets/img/blog/4.png" alt="blog-img" className="blog-image-top" /></figure>
                        <div className="lh-blog">
                            <div className="lh-blog-date">
                                <span><code>Hotel</code> - 22 Dec 2023 - 00 Comment</span>
                            </div>
                            <a className="top-heding" href="/">Exclusive amenities Facilities to Guests Offers
                                rooms free.</a>
                        </div>
                    </div>
                    <div className="blog-card">
                        <figure><img src="/assets/img/blog/5.png" alt="blog-img" className="blog-image-top" /></figure>
                        <div className="lh-blog">
                            <div className="lh-blog-date">
                                <span><code>Rooms</code> - 11 Nov 2023 - 01 Comment</span>
                            </div>
                            <a className="top-heding" href="/">Island Hotel In The Maldives Exclusive amenities
                                Facilities.</a>
                        </div>
                    </div>
                    <div className="blog-card">
                        <figure><img src="/assets/img/blog/6.png" alt="blog-img" className="blog-image-top" /></figure>
                        <div className="lh-blog">
                            <div className="lh-blog-date">
                                <span><code>Spa</code> - 02 Mar 2023 - 25 Comment</span>
                            </div>
                            <a className="top-heding" href="/">Amenities Facilities to Guests Offers rooms free
                                Exclusive.</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Blog;