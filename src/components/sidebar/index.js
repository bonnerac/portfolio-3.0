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
                    <div>
                        Home
                    </div>
                    <div>
                        Portfolio
                    </div>
                    <div>
                        About Me
                    </div>
                    <div>
                        Contact
                    </div>
                </div>

            </div>
        </>
    )
}
export default Sidebar