import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "../styles/Footer.css"

function Footer() {
    return (
        <>
        <footer className="footer">
            <div className="contactUs">
            <a href="https://www.instagram.com/pryogichealing/" ><FontAwesomeIcon className="fas" icon={faInstagram} /></a>
            <a href="https://www.youtube.com/@PryogicHealing/featured" ><FontAwesomeIcon className="fas" icon={faYoutube} /></a>
            <a href="https://www.facebook.com/people/Pryogic-Healing/61553625461546/" ><FontAwesomeIcon className="fas" icon={faFacebook} /></a>
            <a href="mailto:pryogichealing@gmail.com" ><FontAwesomeIcon className="fas" icon={faEnvelope} /></a>
            </div>
            <div className="footerLinks">
                <a href="#home"><div className='Footerlinks'>Home</div></a>
                <a href="#about"><div className='Footerlinks'>About</div></a>
                <a href="https://docs.google.com/forms/d/1SF_C40shQ_PTPvsYqGiXJYwnlqs1juJm2Ili5v8eh6M/edit?ts=6677f5fb"><div className='Footerlinks'>Register</div></a>
            </div>
        </footer>
        <a href="https://github.com/BoltAtlas">
        <div className="Madeby">
                Webpage by Trishal Pandey
                <FontAwesomeIcon className="fa1" icon={faGithub} />
            </div>
            </a>
        </>

    );
}

export default Footer;