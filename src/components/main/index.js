import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import video from '../../images/Night.mp4'
import PortfolioEntry from '../PortfolioEntry'
import portfolioInfo from './portfolioInfo.json'
import AboutMe from '../AboutMe'
import '../main/style.css'

function Main() {
    configureAnchors({ scrollDuration: 1800 })
    return (
        <>
            <div className="main">
                <ScrollableAnchor id={'home'}>
                    <div className="home">
                        <video className='videoTag' autoPlay loop muted>
                            <source src={video} type='video/mp4' />

                        </video>
                        <div className="overlayText" >
                            <div data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-out-quart" data-aos-duration="2000" data-aos-delay="800">
                                Hello, I am
                            <br />
                            </div>
                            <div className="myNameMain title" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-out-quart" data-aos-duration="2000" data-aos-delay="1200">Alex Bonner</div>
                            <br />
                            <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-out-quart" data-aos-duration="2000" data-aos-delay="1600">
                                I'm a <span style={{ color: "#c6180b" }}>Front End Web Developer</span>
                            </div>


                        </div>
                    </div>
                </ScrollableAnchor>
                <div className="buffer1"></div>
                <ScrollableAnchor id={'portfolio'}>
                    <div className="portfolio">
                        <div className="portfolioTitle" data-aos="slide-left" data-aos-offset="200" data-aos-easing="ease-in-out-quart" data-aos-duration="2000" data-aos-delay="200">
                            My Portfolio
                        </div>
                        <div data-aos="slide-right" data-aos-offset="-50" data-aos-easing="ease-in-out-quart" data-aos-anchor-placement="top-center" data-aos-duration="2000" data-aos-delay="200">
                            <PortfolioEntry
                                picture={portfolioInfo[0].picture}
                                name={portfolioInfo[0].name}
                                description={portfolioInfo[0].description}
                                siteLink={portfolioInfo[0].siteLink}
                                gitHubLink={portfolioInfo[0].gitHubLink}
                                presentationLink={portfolioInfo[0].presentationLink}
                            />
                        </div>
                        <div data-aos="slide-left" data-aos-offset="-100" data-aos-easing="ease-in-out-quart" data-aos-anchor-placement="top-center" data-aos-duration="2000" data-aos-delay="200">
                            <PortfolioEntry
                                picture={portfolioInfo[1].picture}
                                name={portfolioInfo[1].name}
                                description={portfolioInfo[1].description}
                                siteLink={portfolioInfo[1].siteLink}
                                gitHubLink={portfolioInfo[1].gitHubLink}
                                presentationLink={portfolioInfo[1].presentationLink} />
                        </div>
                        <div data-aos="slide-right" data-aos-offset="-250" data-aos-easing="ease-in-out-quart" data-aos-anchor-placement="top-center" data-aos-duration="2000" data-aos-delay="200">
                            <PortfolioEntry
                                picture={portfolioInfo[2].picture}
                                name={portfolioInfo[2].name}
                                description={portfolioInfo[2].description}
                                siteLink={portfolioInfo[2].siteLink}
                                gitHubLink={portfolioInfo[2].gitHubLink}
                                presentationLink={portfolioInfo[2].presentationLink} />
                        </div>

                    </div>
                </ScrollableAnchor>
                <div className="buffer2"></div>
                <ScrollableAnchor id={'about'}>
                    <div className="about">
                        <div className="aboutTitle" data-aos="slide-left" data-aos-offset="200" data-aos-easing="ease-in-out-quart" data-aos-duration="2000" data-aos-delay="200">
                            About Me
                        </div>
                        <AboutMe />
                    </div>
                </ScrollableAnchor>
                <div className="buffer3"></div>

            </div>
        </>
    )
}
export default Main;