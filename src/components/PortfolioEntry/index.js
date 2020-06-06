import React from 'react'
import { FaChrome } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFilePowerpoint } from "react-icons/fa";
import '../PortfolioEntry/style.css'

function PortfolioEntry(props) {
    const picture = props.picture;
    const name = props.name
    const description = props.description;
    const siteLink = props.siteLink;
    const gitHubLink = props.gitHubLink;
    const presentationLink = props.presentationLink;

    return (
        <>
            <div class="flip-box">
                <div class="flip-box-inner">
                    <div class="flip-box-front">
                        <img className="picture" src={picture} alt="portfolio-pic" />
                    </div>
                    <div class="flip-box-back">
                        <p className="name">{name}</p>
                        <p className="description">{description}</p>
                        <div className="portLinks">
                            <a className="project-icon" href={siteLink}>
                                <FaChrome />
                            </a>
                            <a className="project-icon" href={gitHubLink}>
                                <FaGithub />
                            </a>
                            <a className="project-icon" href={presentationLink}>
                                <FaFilePowerpoint />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="portContainer">
                <img className="picture" src={picture} alt="portfolio-pic" />
                <p className="description">{description}</p>
                <div className="portLinks">
                    <a className="project-icon" href={siteLink}>
                        <FaChrome />
                    </a>
                    <a className="project-icon" href={gitHubLink}>
                        <FaGithub />
                    </a>
                    <a className="project-icon" href={presentationLink}>
                        <FaFilePowerpoint />
                    </a>
                </div>

            </div> */}
        </>
    )
}
export default PortfolioEntry;