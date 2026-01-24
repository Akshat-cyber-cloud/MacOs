import React, { useState } from 'react'
import './App.scss'
import Dock from './Components/Dock'
import Nav from './Components/Nav'
import Github from './Components/windows/Github'
import Note from './Components/windows/Note'
import Resume from './Components/windows/Resume'
import Spotify from './Components/windows/Spotify'
import Cli from './Components/windows/Cli'
import Mail from './Components/windows/Mail'

const App = () => {
  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
    mail: false
  })

  return (
    <main>
      <Nav />
      <Dock windowsState={windowsState} setWindowsState={setWindowsState} />
      {windowsState.github && <Github onClose={() => setWindowsState(state => ({ ...state, github: false }))} />}
      {windowsState.note && <Note onClose={() => setWindowsState(state => ({ ...state, note: false }))} />}
      {windowsState.resume && <Resume onClose={() => setWindowsState(state => ({ ...state, resume: false }))} />}
      {windowsState.spotify && <Spotify onClose={() => setWindowsState(state => ({ ...state, spotify: false }))} />}
      {windowsState.cli && <Cli onClose={() => setWindowsState(state => ({ ...state, cli: false }))} />}
      {windowsState.mail && <Mail onClose={() => setWindowsState(state => ({ ...state, mail: false }))} />}
    </main>
  )
}

export default App