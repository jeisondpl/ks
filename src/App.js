import React, { useEffect } from 'react'

import logo from './logo.svg'
import './App.css'

function App() {
  const URL_RICK = process.env.REACT_APP_API_RICK

  console.log(URL_RICK)

  useEffect(() => {
    fetch(URL_RICK)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results)
      })
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reloady.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
