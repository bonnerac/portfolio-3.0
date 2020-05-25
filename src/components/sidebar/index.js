import React from 'react'
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
                    <div>
                        <a href='#contact'> Contact </a>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Sidebar