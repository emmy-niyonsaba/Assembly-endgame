
import {useState} from 'react'

function WordDisplyer() {
    const [currentWord, setCurrentWord] = useState('react');
  return (
    <div className='w-120 mx-auto flex justify-center gap-2'>
      {
        currentWord.split('').map((letter, index) => (
            <span key={index} className="text-2xl font-bold mx-1"> 
                {letter.toUpperCase()}
            </span>
        ))
      }
    </div>
  )
}

export default WordDisplyer
