import React from 'react';
import './header.scss';
const Header = () => {
    return (
        <header>
            <div className="header--description">

                <h1><span>Hey</span>, I'm <span>Mardoek</span> <br></br>a <span>Fullstack Developer</span></h1>
                <p>I would like to borrow a minute of your time to introduce myself.</p>


            </div>
            
            <div className="header--picture">
                <img src="/img/me.png" alt="myself" />
                <ul className="header--contact">
                    <li>
                        <a href="tel:+32 493 03 37 37"><img src="portfolio-react\img\telephone-svgrepo-com.svg" alt="svg telephone icon" /></a>
                    </li>
                    <li>
                    {/* className="link-underline-primary" */}
                        <a href="mailto:mardoek.thienpondt@student.arteveldehs.be" ><img src="\img\mail-svgrepo-com.svg" alt="svg mail icon" /></a>
                    </li>
                    <li>
                        <a href="https://github.com/pgm-mardoekthienpondt"><img src="\img\github-svgrepo-com.svg" alt="svg mail icon" /></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/mardoek-thienpondt-516888266/"><img src="\img\linkedin-svgrepo-com.svg" alt="svg mail icon" /></a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;