import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import '../sidebar/style.css'


function Sidebar() {
    return (
        <>
            <div className="sidebar" >
                <div className="myName">
                    Alex Bonner
                </div>
                <div className="links">
                    <div>
                        <a href='#home'> Home </a>
                    </div>
                    <div>
                        <a href='#portfolio'> Portfolio </a>
                    </div>
                    <div>
                        <a href='#about'> About </a>
                    </div>
                </div>
                <div className="contact">
                    <div className="contactTitle">
                        Contact
                    </div>
                    <div className="contactLinks">
                        <a href="https://github.com/bonnerac">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/alexbonner/">
                            <FaLinkedin />
                        </a>
                        <a href="https://docs.google.com/document/d/1eGtjoGfXdGk00iiEWivzXKpOt-24r7HaGVv7rRbK6Mk/edit?usp=sharing">
                            <FiFileText />
                        </a>
                        <a href="mailto:alex.c.bonner@gmail.com">
                            <MdEmail />
                        </a>

                    </div>

                </div>

            </div>
        </>
    )
}
export default Sidebar