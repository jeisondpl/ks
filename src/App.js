import React, { useEffect, useState } from 'react'

import logo from './logo.svg'
import './App.css'

function App() {
  const URL_RICK = process.env.REACT_APP_API_RICK

  const [data, setdata] = useState([])
  console.log(URL_RICK)

  useEffect(() => {
    fetch(URL_RICK)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results)
        setdata(response.results)
      })
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reloady.
        </p>
        <p>
          {data.map((item) => (
            <li>{item.name}</li>
          ))}
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
