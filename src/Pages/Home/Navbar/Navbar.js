import React from 'react';
import { Link } from 'react-router-dom';
import "./Nabvar.css"

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <Link class="navbar-brand" to="/">POWER <span>X</span></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa-solid fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Services</Link>
                        </li>
                        <li class='nav-item'>
                            <Link class="nav-link" to="/classes">Our Classes</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/">About Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Blog</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/pricing">Pricing</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;