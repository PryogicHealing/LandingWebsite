import React from 'react';
import "../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCalendarDays,faClock,faGlobe,faLocationDot,faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";


function Home() {
    return (
        <>
        <div id="home" className="home">
            <div className="HomeText">
                <div className="title">ANAND SHAKTI</div>
                <div className="description">The Hormonal Yoga Program! </div>
               <a href="https://docs.google.com/forms/d/1SF_C40shQ_PTPvsYqGiXJYwnlqs1juJm2Ili5v8eh6M/edit?ts=6677f5fb">
               <div className="button"><b><em>Register Now!!</em></b></div></a>
            </div>
            <img  className="bgimage" src="https://github.com/PryogicHealing/Pryogic_Healing/blob/main/public/Image/BgImage.jpeg?raw=true" alt="bg"/>

            <div className="ExtraDetes">
                <div className="ExtraDetesU">
                <em><b>Registration</b></em> opens only till <em><b>27th July</b></em> for just: <FontAwesomeIcon icon={faIndianRupeeSign} />
                    <em><del>3500/month</del></em> <br/>
                    <div className="ExtraDetesP"><em> <FontAwesomeIcon icon={faIndianRupeeSign} />1980 /month!</em></div>
                     <em><b>Limited Seats available!!</b></em>
                </div>
                <div className="ExtraDetesL">
                    <div className="ExtraDetesI">
                        <FontAwesomeIcon icon={faCalendarDays} /> <div className="ExtraDetesT">: Starts from 30rd July! <br></br>(Tuesday - Friday)</div>
                    </div>
                    <div className="ExtraDetesI">
                        <FontAwesomeIcon icon={faClock} /><div className="ExtraDetesT">: 6:30 - 7:30 <em><b>PM</b></em></div>
                    </div>
                    <div className="ExtraDetesI">
                    <FontAwesomeIcon icon={faLocationDot} /> <div className="ExtraDetesT">: Google Meet! (Live Classes)</div>
                    </div>
                    <div className="ExtraDetesI">
                        <FontAwesomeIcon icon={faGlobe} /> <div className="ExtraDetesT">: English and Hindi</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;