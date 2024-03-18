import React from 'react'
import { logo } from '../assets/images'

function Nav() {
  return (
    <header className='w-full'>
        <nav className='flex flex-row justify-between items-center '>
            <img src={logo} alt="logo" />
            <button className='bg-black text-white px-6 py-2 rounded-full'>
                Github
            </button>
        </nav>
    </header>
  )
}

export default Nav