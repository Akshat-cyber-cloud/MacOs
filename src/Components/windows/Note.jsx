import React, { useEffect,useState } from 'react'
import Markdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter';
import MacWindow from './MacWindow'
import "./note.scss"
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Note = ({ onClose }) => {

    const [ markdown, setMarkdown ] = useState(null)

    useEffect(() => {
        fetch("/note.txt")
            .then(res => res.text())
            .then(text => setMarkdown(text))
    }, [])

    return (
        <MacWindow onClose={onClose} >
            <div className="note-window">
                { markdown ? <SyntaxHighlighter language='typescript' style={atelierDuneDark} >{markdown}</SyntaxHighlighter> : <p>Loading...</p> }
            </div>
        </MacWindow>
    )
}

export default Note