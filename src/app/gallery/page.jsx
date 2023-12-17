import Link from "next/link";
import React from "react";

const Gallery = () => {
    return (
        <div>
            {/* Banner */}
            <section className="section-banner">
                <div className="row banner-image">
                    <div className="banner-overlay" />
                    <div className="banner-section">
                        <div className="lh-banner-contain">
                            <h2>Gallery</h2>
                            <div className="lh-breadcrumb">
                                <h5>
                                    <span className="lh-inner-breadcrumb">
                                        <Link href="/">Home</Link>
                                    </span>
                                    <span> / </span>
                                    <span>
                                        <Link href="/gallery">Gallery</Link>
                                    </span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Gallery */}
            <section className="section-gallery padding-tb-100">
                <div className="container">
                    <div className="row mb-m-24"  >
                        <div className="banner">
                            <h2>Latest <span>Gallery</span></h2>
                        </div>
                        <div className="card-columns">
                        <figure className="magnific-img">
                                <a className="gallery-img" href="/assets/img/1.jpg" title1="Mobile App">
                                    <img className="example-image" src="/assets/img/1.jpg" alt="portfolio img" />
                                </a>
                            </figure>
                            <figure className="magnific-img">
                                <a className="gallery-img" href="/assets/img/2.jpg" title1="Mobile App">
                                    <img className="example-image" src="/assets/img/2.jpg" alt="portfolio img" />
                                </a>
                            </figure>
                            <figure>
                                <a className="gallery-img" href="/assets/img/3.jpg" title1="Template Project">
                                    <img className="example-image" src="/assets/img/3.jpg" alt="portfolio img" />
                                </a>
                            </figure>
                            <figure>
                                <a className="gallery-img" href="/assets/img/4.jpg" title1="Wordpress Development">
                                    <img src="/assets/img/4.jpg" alt="portfolio img" />
                                </a>
                            </figure>
                            <figure>
                                <a className="gallery-img" href="/assets/img/5.jpg" title1="Magento Project">
                                    <img src="/assets/img/5.jpg" alt="portfolio img" />
                                </a>
                            </figure>
                            <figure>
                                <a className="gallery-img" href="/assets/img/6.jpg" title1="Mobile App">
                                    <img src="/assets/img/6.jpg" alt="portfolio img" />
                                </a>
                            </figure>
                            <figure>
                                <a className="gallery-img" href="/assets/img/7.jpg" title1="Template Project">
                                    <img src="/assets/img/7.jpg" alt="portfolio img" />
                                </a>
                            </figure>
                            <figure>
                                <a className="gallery-img" href="/assets/img/8.jpg" title1="Web Development">
                                    <img src="/assets/img/8.jpg" alt="portfolio img" />
                                </a>
                            </figure>
                            <figure>
                                <a className="gallery-img" href="/assets/img/9.jpg" title1="Shopify Project">
                                    <img src="/assets/img/9.jpg" alt="portfolio img" />
                                </a>
                            </figure>
                            <figure>
                                <a className="gallery-img" href="/assets/img/10.jpg" title1="Prestashop site">
                                    <img src="/assets/img/10.jpg" alt="portfolio img" />
                                </a>
                            </figure>
                            <figure>
                                <a className="gallery-img" href="/assets/img/11.jpg" title1="Python Development">
                                    <img src="/assets/img/11.jpg" alt="portfolio img" />
                                </a>
                            </figure>
                            <figure>
                                <a className="gallery-img" href="/assets/img/12.jpg" title1="HTML Project">
                                    <img src="/assets/img/12.jpg" alt="portfolio img" />
                                </a>
                            </figure>
                            <figure>
                                <a className="gallery-img" href="/assets/img/13.jpg" title1="Web Development">
                                    <img src="/assets/img/13.jpg" alt="portfolio img" />
                                </a>
                            </figure>
                            <figure>
                                <a className="gallery-img" href="/assets/img/14.jpg" title1="Python Development">
                                    <img src="/assets/img/14.jpg" alt="portfolio img" />
                                </a>
                            </figure>
                            <figure>
                                <a className="gallery-img" href="/assets/img/15.jpg" title1="HTML Project">
                                    <img src="/assets/img/15.jpg" alt="portfolio img" />
                                </a>
                            </figure>
                            <figure>
                                <a className="gallery-img" href="/assets/img/16.jpg" title1="Web Development">
                                    <img src="/assets/img/16.jpg" alt="portfolio img" />
                                </a>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}


export default Gallery;