import React from 'react';
import "./Nabvar.css"

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <a class="navbar-brand" href="#">POWER <span>X</span></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa-solid fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Services</a>
                        </li>
                        <li class='nav-item'>
                            <a class="nav-link" href="/">Our Classes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;