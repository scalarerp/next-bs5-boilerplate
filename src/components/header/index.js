import React from 'react'

const Header = () => {
    return (
        <header id="header" className="fixed-top d-flex align-items-center">
            <div className="container d-flex justify-content-between">
                <div className="logo">
                    <h1>
                        <a href="index.html">Maxim</a>
                    </h1>

                    <a href="index.html">
                        <img
                            src="assets/img/logo.png"
                            alt=""
                            className="img-fluid"
                        />
                    </a>
                </div>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li>
                            <a
                                className="nav-link scrollto active"
                                href="#hero"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="#about">
                                About
                            </a>
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="#services">
                                Services
                            </a>
                        </li>
                        <li>
                            <a className="nav-link scrollto " href="#portfolio">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="#team">
                                Team
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
