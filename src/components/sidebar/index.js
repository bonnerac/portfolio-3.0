import React from 'react'
import '../sidebar/style.css'


function Sidebar() {
    return (
        <>
            <div className="sidebar" >
                <div className="myName">
                    Alex C. Bonner
                </div>
                <div className="links">
                    <a href='#home'> Home </a>
                    <a href='#portfolio'> Portfolio </a>
                    <a href='#about'> About </a>
                    <a href='#contact'> Contact </a>
                </div>

            </div>
        </>
    )
}
export default Sidebar