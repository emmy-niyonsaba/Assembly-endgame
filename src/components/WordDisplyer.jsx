
import {useState} from 'react'

function WordDisplyer() {
    const [currentWord, setCurrentWord] = useState('Emmanuel');
  return (
    <div className='w-120 mx-auto flex justify-center gap-2 m-4'>
      {
        currentWord.split('').map((letter, index) => (
            <span key={index} className="text-2xl font-bold mx-1 border-2 border-gray-300 rounded-md p-2 bg-gray-500"> 
                {letter.toUpperCase()}
            </span>
        ))
      }
    </div>
  )
}

export default WordDisplyer
