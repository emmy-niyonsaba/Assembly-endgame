import React from "react"

function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-12 px-6 shadow-lg">
      
      <div className="max-w-4xl mx-auto text-center">
        
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
          Assembly: <span className="text-blue-500">Endgame</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Guess the word within 
          <span className="font-semibold text-white"> 8 attempts </span>
          to keep the programming world safe from 
          <span className="text-red-400 font-semibold"> Assembly</span>!
        </p>

        <div className="mt-8 w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>

      </div>
    </header>
  )
}

export default Header