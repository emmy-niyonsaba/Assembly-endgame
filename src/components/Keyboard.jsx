import { useState } from "react";
import Languages from "./Languages";

function Keyboard() {


    const [currentWord, setCurrentWord] = useState('Emmanuel');
    const [guessedLetters, setGuessedLetters] = useState([]);

    const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");

    const wrongLetters = guessedLetters.filter(letter => !currentWord.toLowerCase().includes(letter)).length;

    const addGessedLetter = (letter) => {
        if (!guessedLetters.includes(letter)) {
            setGuessedLetters((currentLetters) => [...currentLetters, letter]);
        } else {
            alert("You have already guessed this letter!");
        }
    }
    console.log(wrongLetters);
    return (
        <>
            <Languages wrongLetters={wrongLetters}/>

            <div className='w-120 mx-auto flex justify-center gap-2 m-4'>
                {
                    currentWord.split('').map((letter, index) => (
                        <span key={index} className="text-2xl font-bold mx-1 border-2 border-gray-300 rounded-md p-2 bg-gray-500">
                            {guessedLetters.includes(letter.toLowerCase()) ? letter.toUpperCase() : ""}
                        </span>
                    ))
                }
            </div>
            <div className=" flex flex-wrap justify-center gap-2 w-130 mx-auto ">
                {alphabets.map((alphabet) => {
                    const isGuessed = guessedLetters.includes(alphabet);
                    const isCorrect = isGuessed && currentWord.toLowerCase().includes(alphabet);
                    const isIncorrect = isGuessed && !currentWord.toLowerCase().includes(alphabet);
                    return (
                        <button
                            onClick={() => addGessedLetter(alphabet)}
                            key={alphabet}
                            className={` w-10 h-10 border-2 border-be-black cursor-pointer text-lg font-bold rounded-md ${isCorrect ? "bg-green-500" : isIncorrect ? "bg-red-500" : "bg-amber-300"
                                }`}>
                            {alphabet.toUpperCase()}

                        </button>
                    )
                })}

            </div>
            <button className=" bg-blue-400 p-2 rounded-md flex m-5 mx-auto  items-center">New Game</button>
        </>

    )
}

export default Keyboard