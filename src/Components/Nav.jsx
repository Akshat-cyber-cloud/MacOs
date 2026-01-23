import React from 'react'
import './Nav.scss'
import DateTime from './DateTime'

const Nav = () => {
  return (
    <div>
        <nav>
            <div className="left">
                <div className="apple-icon">
                    <img src="./nav-icons/apple.svg" alt="" />
                </div>

                <div className="nav-items">
                    <p>Akshat Gupta</p>
                </div>

                <div className="nav-items">
                    <p>File</p>
                </div>

                <div className="nav-items">
                    <p>Window</p>
                </div>

                <div className="nav-items">
                    <p>Terminal</p>
                </div>


            </div>
            <div className="right">
                <div className="nav-icons">
                    <img src="./nav-icons/wifi.svg" alt="" />
                </div>
                <div className="nav-items">
                    <DateTime />
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Nav