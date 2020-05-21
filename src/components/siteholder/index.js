import React from 'react'
import Sidebar from '../sidebar'
import Main from '../main'
import '../siteholder/style.css'

function Siteholder() {
    return (
        <>
            <div className="container">
                <Sidebar />
                <Main />
            </div>

        </>
    )
}
export default Siteholder