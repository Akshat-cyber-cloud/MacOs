import React from 'react'
import MacWindow from './MacWindow'
import "./resume.scss"

const Resume = ({ onClose }) => {
  return (
    <MacWindow onClose={onClose}>
        <div className='resume-window'>
            <embed src="/CVFinal.pdf" frameborder="0"></embed>
        </div>
    </MacWindow>
  )
}

export default Resume