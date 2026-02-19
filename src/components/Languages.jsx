
import React from 'react'
import { languages } from '/public/data/languages'
const Languages = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-5">
      {languages.map((language, index) => (
        <div
          key={index}
          className="w-24 h-24 rounded-lg flex items-center justify-center text-lg font-bold"
          style={{
            backgroundColor: language.backgroundColor,
            color: language.color,
          }}
        >
          {language.name}
        </div>
      ))}
    </div>
  )
}

export default Languages
