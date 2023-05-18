import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Spandan</h1>

                <div className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#playground" className="footer__link">Playground</a>
                    </li>

                </div>

                <div className="footer__social">
                    <a href="https://www.instagram.com" className="footer__social-link" target='_blank'>
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a href="https://www.linkedin.com" className="footer__social-link" target='_blank'>
                        <i className="bx bxl-linkedin"></i>
                    </a>

                    <a href="https://www.github.com/spandan11" className="footer__social-link" target='_blank'>
                        <i className="bx bxl-github"></i>
                    </a>

                </div>

                <span className="footer__copy">
                    &#169; Spandan. All rights reserved
                </span>
            </div>
        </footer>
    );
};

export default Footer;