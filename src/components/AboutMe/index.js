import React from 'react'
import aboutImage from '../../images/picture.png'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiJqueryLogo } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { FaNode } from "react-icons/fa";
import { DiHeroku } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { DiMaterializecss } from "react-icons/di";
import { DiVisualstudio } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import '../AboutMe/style.css'

function AboutMe() {
    return (
        <>
            <div className="aboutMeContainer">
                <div className="aboutImage">
                    <img className="myPicture" src={aboutImage} alt="my-pic" />
                </div>
                <div className="aboutText">
                    After graduating from the University of Dayton with a Bachelor's Degree in Music, I became the Director of Music Ministry at my local church.
                            <br />
                    <br />
                            When my family moved to Chicago, I became a stay-at-home dad to my energetic daughter, but after two years of reading board books and playing pretend, I wanted to jump-start my next career move.
                            <br />
                    <br />
                            I decided to attend a Coding Bootcamp at Northwestern University and began my web development journey. Having completed the program, I'm excited to bring my creative skills and unique background to your next project.
                </div>
                <div className="aboutLanguages">
                    <div className="languageTitle">
                        Languages/Technologies
                    </div>
                    <div className="languageIcons">
                        <div>
                            <FaHtml5 /> <FaCss3Alt /> <IoLogoJavascript /> <DiJqueryLogo /> <DiMysql /> <DiMongodb />
                        </div>
                        <div>
                            <FaNode /> <DiHeroku /> <FaReact /> <DiMaterializecss /> <DiVisualstudio /> <FaGithub />
                        </div>

                    </div>
                    <div className="languageList">
                        HTML5, CSS3, Javascript, JQuery, Sequelize, Express, Handlebars, MySQL, MongoDB, Node.JS, Heroku, React.JS, CSS Grid, Materialize, Visual Studio Code, GitHub, GitBash, Microsoft Office, G Suite, Google Drawings.
                    </div>

                </div>

            </div>
        </>
    )
}

export default AboutMe;