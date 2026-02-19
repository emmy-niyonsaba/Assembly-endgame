import React from 'react'

function Header() {
  return (
    <div>
         <header className='  flex flex-col gap-3  justify-center items-center  p-5 '>
                <h1 className=' text-3xl font-bold '>Assembly: Endgame</h1>
                <p className='text-2xl text-center'>Guess the word within 8 attempts to keep the 
                programming world safe from Assembly!</p>
            </header>
      
    </div>
  )
}

export default Header
