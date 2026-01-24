import React from 'react'
import { Rnd } from 'react-rnd'
import './Window.scss'

const MacWindow = ({ children, onClose }) => {
    return (
        <Rnd

            default={{
                width: "40vw",
                height: "60vh",
                x: 50,
                y: 50
            }}>
            <div className="window">
                <div className="nav">
                    <div className="dots">
                        <div className="dot red" onClick={onClose}></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>

                    <div className="title">
                        <p>akshatgupta -zsh</p>
                    </div>
                </div>

                <div className="main-content">
                    {children}
                </div>
            </div>
        </Rnd>
    )
}

export default MacWindow