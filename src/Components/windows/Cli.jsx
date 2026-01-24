import React from 'react'
import MacWindow from './MacWindow'
import ReactTerminal from 'react-console-emulator'
import './cli.scss'

const Cli = ({ onClose }) => {
  const commands = {
    whoami: {
      description: 'Returns the current user.',
      usage: 'whoami',
      fn: () => 'akshatgupta'
    },
    about: {
      description: 'Display information about me.',
      usage: 'about',
      fn: () => 'Full Stack Developer | React | Node.js | UI/UX Enthusiast | Based in India'
    },
    skills: {
      description: 'Display my technical skills.',
      usage: 'skills',
      fn: () => 'JavaScript, React, Node.js, MongoDB, PostgreSQL, HTML/CSS, SCSS, Vite, Git, REST APIs, Redux'
    },
    contact: {
      description: 'Display contact information.',
      usage: 'contact',
      fn: () => 'Email: akshat@gmail.com | GitHub: github.com/akshatgupta | LinkedIn: linkedin.com/in/akshatgupta'
    },
    experience: {
      description: 'Show work experience.',
      usage: 'experience',
      fn: () => 'Senior Developer @ TechCorp (2022-Present) | Junior Developer @ StartUp Inc (2020-2022) | Intern @ WebAgency (2019-2020)'
    },
    social: {
      description: 'Display my social media profiles.',
      usage: 'social',
      fn: () => 'GitHub | Twitter | LinkedIn | Instagram | CodePen'
    },
    echo: {
      description: 'Echo a passed string.',
      usage: 'echo <string>',
      fn: (...args) => args.join(' ') || 'echo: missing argument'
    },
    date: {
      description: 'Display current date and time.',
      usage: 'date',
      fn: () => new Date().toString()
    }
  }

  const welcomeMsg = `
╔════════════════════════════════════════════════════════════════╗
║          Welcome to Akshat's Portfolio Terminal v1.0           ║
╚════════════════════════════════════════════════════════════════╝

Available Commands:
  whoami      - Display current user
  about       - Learn more about me
  projects    - View my projects
  skills      - See my technical skills
  contact     - Get my contact information
  experience  - View my work experience
  resume      - Download my resume
  social      - Find me on social media
  echo        - Echo text back to you
  date        - Display current date/time
  help        - Show all commands
  clear       - Clear the terminal

Type 'help' for more details or try any command above!
`

  const Terminal = ReactTerminal.default || ReactTerminal

  return (
    <MacWindow onClose={onClose}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMsg}
          promptLabel="me@portfolio:~$"
          style={{ height: '100%', minHeight: '100%' }}
        />
      </div>
    </MacWindow>
  )
}

export default Cli
