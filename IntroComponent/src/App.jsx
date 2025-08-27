import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    
      <main>
        <div className='left-part'>
          <h1>Learn to code by watching others</h1>
          <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable</p>
        </div>
        <div className='right-part'>
          <button>
            <span>Try it free 7 days </span> 
            than $20/mo. thereafter
          </button>
          <form>
            <input type='text' id='firstname' name='firstname' placeholder='First Name' /> 
            <input type='text' id='lastname' name='lastname' placeholder='Last Name'/>
            <input type='email' id='email' name='email' placeholder='Email Adress' />
            <input type='password' id='password' name='password' placeholder='Password' />
            <button>CLAIM YOUR FREE TRIAL</button>
            <p>By clicking the Button you are agreeing our <a href=''>Terms and Services</a></p>
          </form>
        </div>
      </main>
    
  )
}

export default App
