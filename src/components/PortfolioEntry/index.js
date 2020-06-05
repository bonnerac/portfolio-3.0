import React from 'react'
import '../PortfolioEntry/style.css'

function PortfolioEntry(props) {
    const picture = props.picture;
    const description = props.description;
    const links = props.links;

    return (
        <>
            <div className="portContainer">
                <img className="picture" src={picture} alt="portfolio-pic" />
                <p className="description">{description}</p>
                <div className="portLinks">{links}</div>

            </div>
        </>
    )
}
export default PortfolioEntry;