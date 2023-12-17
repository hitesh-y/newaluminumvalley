import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <header>
            <div className="lh-top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12  lh-top-social">
                            <div className="lh-mail">
                                <i className="ri-mail-line" />
                                info@luxurystudioskey.com
                            </div>
                            <div className="lh-location">
                                <div className="custom-select">
                                    <i className="ri-map-pin-line" />
                                    <select>
                                        <option value="option1">Gurgaon</option>
                                        <option value="option2">Delhi</option>
                                        <option value="option3">Rajkot</option>
                                        <option value="option4">Udaipur</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 lh-top-social">
                            <div className="lh-phone">
                                <i className="ri-phone-line" />
                                +91 7889672203
                            </div>
                            <div className="lh-header-icons">
                                <a href="javascript:void(0)"><i className="ri-facebook-box-line facebook" /></a>
                                <a href="javascript:void(0)"><i className="ri-twitter-x-line twitter" /></a>
                                <a href="javascript:void(0)"><i className="ri-linkedin-box-line linkedin" /></a>
                                <a href="https://www.instagram.com/new_aluminium_valley_and_steel/"><i className="ri-instagram-line instagram" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --------------------Navbar --------------------- */}
            <div className="lh-header">
                <div className="container">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand" href="/">
                                <img src="/assets/img/logo/logo.jpg" alt="logo" className="lh-logo" />
                            </a>
                            <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="ri-menu-2-line" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/" role="button" >
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" href="/rooms" role="button"  >
                                            Rooms & suites
                                        </Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" href="/gallery" role="button" >
                                            Gallery
                                        </Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" href="/about" role="button">
                                            About
                                        </Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/blogs" role="button">
                                            Blogs
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link" href="/contact">
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>


            {/*-------------------- Mobile-menu------------------ */}
            <div className="lh-sidebar-overlay" />
            <div id="lh_mobile_menu" className="lh-side-cart lh-mobile-menu">
                <div className="lh-menu-title">
                    <span className="menu-title">My Menu</span>
                    <button className="lh-close">×</button>
                </div>
                <div className="lh-menu-inner">
                    <input type="text" placeholder="Search" className="lh-menu-box" />
                    <div className="lh-menu-content">
                        <ul>
                            <li className="drop-list dropdown">
                                <a className="dropdown-list" href="/" role="button" >
                                    Home
                                </a>
                            </li>
                            <li className="drop-list dropdown">
                                <Link className="dropdown-list" href="/rooms" role="button"  >
                                    Rooms & suites
                                </Link>
                            </li>
                            <li className="drop-list dropdown">
                                <Link className="dropdown-list" href="/gallery" role="button" >
                                    Gallery
                                </Link>
                            </li>
                            <li className="drop-list dropdown">
                                <Link className="dropdown-list" href="/about" role="button">
                                    About
                                </Link>
                            </li>
                            <li className="drop-list dropdown">
                                <a className="dropdown-list" href="/blogs" role="button">
                                    Blogs
                                </a>
                            </li>
                            <li className="drop-list dropdown">
                                <Link className="dropdown-list" href="/contact">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </header>

    )
}

export default Header;