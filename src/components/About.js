import React from 'react';
import "../styles/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCalendarDays, faPeopleRobbery, faNotesMedical, faComment, faEye} from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from 'react-player/youtube'

function About() {
    return (
        <>
        <div id='about' className="AboutContainer">
            <div className="AboutSpecial">
            <div className="AboutCard">
                    <div className="AboutText">
                        <div className="AboutHeading">Anand Shakti</div>
                        <div className="AboutPara">
                            <b><em>Anand Shakti</em></b> is a holistic program addressing  <b><em>hormonal disorders</em></b> at their root,
                            going beyond just yogasanas.
                            <br /> <br />
                            Participants perform <b><em>kriyas</em></b> and practice <b><em> guided
                            meditation</em></b> targeting the core issues.
                            <br /> <br />
                            This unique course covers <b><em>physical</em></b>,
                            <b><em> medical</em></b>, and  <b><em>psychological</em></b> aspects of each disorder.
                        </div>
                        <div className="AboutStats">
                            <div className="StatsCards">
                                <FontAwesomeIcon className="fa" icon={faCalendarDays} />
                                <b><em>Duration: 3 months</em></b>
                            </div>
                            <div className="StatsCards">
                                <FontAwesomeIcon className="fa" icon={faPeopleRobbery} />
                                <b><em>Abundance of yogic techniques</em></b>
                            </div>
                            <div className="StatsCards">
                                <FontAwesomeIcon className="fa" icon={faNotesMedical} />
                                <b><em>Helps with improved endocrine function, mental clarity, weight management, digestion, reproductive health</em></b>
                            </div>
                            <div className="StatsCards">
                                <FontAwesomeIcon className="fa" icon={faComment} />
                                <b><em>QnA Sessions with professionals!</em></b>
                            </div>
                            <div className="StatsCards">
                                <FontAwesomeIcon className="fa" icon={faEye} />
                                <b><em>Visble results in health!</em></b>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="AboutCard">
                    <div className="AboutText">
                        <div className="AboutHeading">Pryogic Healing</div>
                        <div className="AboutPara">
                        <b><em>Pryogic Healing</em></b> is a wellness center where mind unites with body.
                        <br/> <br/>
                         We combine both <b><em>yogic</em></b> and <b><em>psychological</em></b>  principles to curate classes
                          that focus on both <b><em>physical</em></b> and <b><em>mental</em></b> wellness.
                        </div>
                        </div>
                    <div className="Aboutvid">
                        <ReactPlayer className="vid" url='https://www.youtube.com/watch?v=neXkbh1BZ-k'
                        playing='true'
                        type="video/mp4"
                        loop
                        height={270}
                        />
                    </div>
                </div>
                </div>
                <div className="Instructor">The Host</div>

                <div className="Instructors">
                    <div className="InstructorCard">
                        <div className="Instructorimg">
                        <img className="InstructorImage" src="https://github.com/PryogicHealing/Pryogic_Healing/blob/main/public/Image/Dr.jpg?raw=true" alt="bg"/>
                        </div>
                        <div className="InstructorHeading">Dr. Kshama A Kulkarni </div>
                        <div className="AboutInstructor">Dr. Kshama A Kulkarni, our Ayurvedic expert, specializes in women's health,
                            including PCOS, pregnancy, and hormonal issues. She's available to address medical concerns
                            throughout the program.</div>
                    </div>
                    <div className="InstructorCard0">
                        <div className="Instructorimg0">
                        <img className="InstructorImage0" src="https://github.com/PryogicHealing/Pryogic_Healing/blob/main/public/Image/Priyal.png?raw=true" alt="bg"/>
                        </div>
                        <div className="InstructorHeading0">Priyal Awasthi</div>
                        <div className="AboutInstructor">Priyal, a psychologist and yogini, instructs at Anand Shakti,
                            offering meditation and asana classes. Her dual expertise provides a holistic approach,
                            nurturing both mind and body in your practice.</div>
                    </div>
                    <div className="InstructorCard">
                        <div className="Instructorimg">
                        <img className="InstructorImage" src="https://github.com/PryogicHealing/Pryogic_Healing/blob/main/public/Image/Neha.jpeg.jpg?raw=true" alt="bg"/>
                        </div>
                        <div className="InstructorHeading">Neha</div>
                        <div className="AboutInstructor">Neha, with 10 years of yogic training, teaches Ashtanga,
                            Vinyasa, and Hatha yoga at Anand Shakti. She mentors asana classes and guides pranayama
                            practices, offering a rich, transformative experience.</div>
                    </div>
                </div>

                <div className="Instructorss">
                <div className="InstructorCard0">
                        <div className="Instructorimg0">
                        <img className="InstructorImage0" src="https://github.com/PryogicHealing/Pryogic_Healing/blob/main/public/Image/Priyal.png?raw=true" alt="bg"/>
                        </div>
                        <div className="InstructorHeading0">Priyal Awasthi</div>
                        <div className="AboutInstructor">Priyal, a psychologist and yogini, instructs at Anand Shakti,
                            offering meditation and asana classes. Her dual expertise provides a holistic approach,
                            nurturing both mind and body in your practice.</div>
                    </div>
                    <div className="InstructorCard">
                        <div className="Instructorimg">
                        <img className="InstructorImage" src="https://github.com/PryogicHealing/Pryogic_Healing/blob/main/public/Image/Dr.jpg?raw=true" alt="bg"/>
                        </div>
                        <div className="InstructorHeading">Dr. Kshama A Kulkarni </div>
                        <div className="AboutInstructor">Dr. Kshama A Kulkarni, our Ayurvedic expert, specializes in women's health,
                            including PCOS, pregnancy, and hormonal issues. She's available to address medical concerns
                            throughout the program.</div>
                    </div>

                    <div className="InstructorCard">
                        <div className="Instructorimg">
                        <img className="InstructorImage" src="https://github.com/PryogicHealing/Pryogic_Healing/blob/main/public/Image/Neha.jpeg.jpg?raw=true" alt="bg"/>
                        </div>
                        <div className="InstructorHeading">Neha</div>
                        <div className="AboutInstructor">Neha, with 10 years of yogic training, teaches Ashtanga,
                            Vinyasa, and Hatha yoga at Anand Shakti. She mentors asana classes and guides pranayama
                            practices, offering a rich, transformative experience.</div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default About;



