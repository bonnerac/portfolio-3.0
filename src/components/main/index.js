import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import '../main/style.css'

function Main() {
    configureAnchors({ scrollDuration: 1800 })
    return (
        <>
            <div className="main">
                <ScrollableAnchor id={'home'}>
                    <div className="home">
                        this is the home section <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at sapien augue. Donec sit amet quam lacus. Phasellus ac sapien vel ante tempus aliquam. Aliquam quis libero id purus tempor tincidunt ac et diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque tempus, leo a convallis laoreet, nunc risus fringilla nulla, vel posuere nisi justo accumsan massa. Suspendisse ac magna augue. Proin eget euismod ex, eu placerat ante. Nullam finibus, ipsum ut tristique maximus, est orci blandit mi, non scelerisque lectus mi ut turpis. Morbi nisi ipsum, convallis eget massa eget, viverra rhoncus purus.
                    </div>
                </ScrollableAnchor>
                <div className="buffer1"></div>
                <ScrollableAnchor id={'portfolio'}>
                    <div className="portfolio">
                        this is the portfolio section <br />
                    Morbi sit amet magna suscipit, rhoncus est ac, ultricies nisi. Nam et leo eu mi feugiat tincidunt. Ut ut ornare mi, quis faucibus tellus. Fusce cursus, sem vitae venenatis sollicitudin, sapien metus facilisis justo, nec maximus arcu erat quis diam. Suspendisse potenti. Duis vitae mollis magna. Aliquam pretium tortor vel urna tincidunt, at pharetra magna hendrerit. Nam felis erat, imperdiet eu facilisis quis, dignissim eget mauris.
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