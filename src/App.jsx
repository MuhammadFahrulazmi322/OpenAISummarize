import React from 'react'
import Nav from './sections/Nav'
import Hero from './sections/Hero'
import Demo from './sections/Demo'

function App() {
  return (
    <main>
      <div className='main'>
        <div className='gradient'></div>
      </div>
      <div className='app'>
      <Nav/>
      <Hero/>
      <Demo/>

      </div>
    </main>
  )
}

export default App