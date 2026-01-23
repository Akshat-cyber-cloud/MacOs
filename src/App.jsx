import React from 'react'
import './App.scss'
import Dock from './Components/Dock'
import Nav from './Components/Nav'
import Github from './Components/windows/Github'
import Note from './Components/windows/Note'
import Resume from './Components/windows/Resume'

const App = () => {
  return (
    <main>
      <Nav />
      <Dock />

      <Github />
      <Note />
      <Resume />
    </main>
  )
}

export default App