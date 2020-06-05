import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import video from '../../images/Chain.mp4'
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
                        <div className="overlayText" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-out-quart" data-aos-duration="2000" data-aos-delay="800">
                            Hello, I'm
                            <h1 style={{ color: "red" }}>Alex Bonner</h1>
                            <br />
                            I'm a Front End Web Developer

                        </div>
                    </div>
                </ScrollableAnchor>
                <div className="buffer1"></div>
                <ScrollableAnchor id={'portfolio'}>
                    <div className="portfolio">
                        <div className="portfolioTitle" data-aos="slide-left" data-aos-offset="200" data-aos-easing="ease-in-out-quart" data-aos-duration="2000" data-aos-delay="800">
                            My Portfolio
                            <div className="line">

                            </div>
                        </div>
                    </div>
                </ScrollableAnchor>
                <div className="buffer2"></div>
                <ScrollableAnchor id={'about'}>
                    <div className="about">
                        this is the about section <br />
                Nulla sodales vitae augue vel lacinia. In iaculis aliquam libero sed efficitur. Proin consectetur semper mauris, vitae vulputate diam tempor eu. Praesent luctus tellus sollicitudin velit tincidunt, sit amet pharetra elit vulputate. Fusce pulvinar lacus non eleifend pharetra. Aenean mollis volutpat lectus sed interdum. Mauris sagittis dignissim ante volutpat finibus. Praesent id ligula erat. Nunc tincidunt massa ut tempus gravida. Aliquam erat volutpat. Ut id felis orci. Suspendisse mollis, massa ac maximus efficitur, nulla elit sodales velit, vel volutpat tellus risus in nunc. Curabitur vestibulum lobortis diam, sed molestie eros maximus in. Suspendisse sit amet augue ultrices, dignissim orci sed, auctor ex. Vivamus accumsan est orci. Curabitur viverra vehicula consequat.
                </div>
                </ScrollableAnchor>
                <div className="buffer3"></div>
                <ScrollableAnchor id={'contact'}>
                    <div className="contact">
                        this is the contact section <br />
                    Mauris consectetur massa et mauris pellentesque elementum. Vestibulum rutrum molestie dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent vel urna enim. Sed vehicula mi tellus, vitae condimentum massa semper sit amet. Nam in sollicitudin enim. Fusce feugiat turpis at est maximus, vel viverra dui condimentum. Integer elit turpis, rutrum eget libero eget, iaculis placerat sem. Donec aliquam nisl a ex consequat consequat. Praesent auctor justo tellus, ac blandit augue faucibus quis. Curabitur blandit risus elementum est finibus fermentum. Phasellus turpis ex, congue id hendrerit at, sollicitudin quis ante. Etiam ac turpis efficitur, imperdiet tellus id, sagittis sapien. In vel luctus neque. Etiam mattis iaculis turpis tempor vehicula.

                </div>
                </ScrollableAnchor>












            </div>
        </>
    )
}
export default Main;