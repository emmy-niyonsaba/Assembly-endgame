
import React from 'react'
import { languages } from '/public/data/languages'
const Languages = () => {
  return (
    <div className=" w-130 flex flex-wrap justify-center items-center mx-auto gap-4 p-5">
      {languages.map((language, index) => (
        <div
          key={index}
          className=" p-2 rounded-lg flex items-center justify-center  font-bold"
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
