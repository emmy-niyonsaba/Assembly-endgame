import { useState } from "react"
import Languages from "./Languages"
import { languages } from "../../public/data/languages"
import Result from "./Result"
import { words } from "/public/data/words"

function Keyboard() {

    const [currentWord, setCurrentWord] = useState(
        words[Math.floor(Math.random() * words.length)]
    )
    const [guessedLetters, setGuessedLetters] = useState([])

    const alphabets = "abcdefghijklmnopqrstuvwxyz".split("")

    const wrongLetters = guessedLetters.filter(
        letter => !currentWord.toLowerCase().includes(letter)
    )

    const isGameLost = wrongLetters.length >= languages.length - 1
    const isGameWon = currentWord
        .split("")
        .every(letter => guessedLetters.includes(letter.toLowerCase()))

    const isGameOver = isGameLost || isGameWon

    function addGuessedLetter(letter) {
        if (isGameOver) return

        if (!guessedLetters.includes(letter)) {
            setGuessedLetters(prev => [...prev, letter])
        }
    }

    function resetGame() {
        setGuessedLetters([])
        const randomWord = words[Math.floor(Math.random() * words.length)]
        setCurrentWord(randomWord)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col items-center justify-center p-6">

            {/* Game Card */}
            <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-3xl">

                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Word Guessing Game
                </h1>

                <Result isGameLost={isGameLost} isGameWon={isGameWon} />

                <Languages wrongLetters={wrongLetters} />

                {/* Word Display */}
                <div className="flex justify-center gap-3 my-8 flex-wrap">
                    {currentWord.split("").map((letter, index) => (
                        <div
                            key={index}
                            className="w-14 h-14 flex items-center justify-center text-2xl font-bold border-b-4 border-gray-400 bg-gray-100 rounded-md shadow-inner"
                        >
                            {guessedLetters.includes(letter.toLowerCase())
                                ? letter.toUpperCase()
                                : ""}
                        </div>
                    ))}
                </div>

                {/* Keyboard */}
                <div className="flex flex-wrap justify-center gap-3">
                    {alphabets.map((alphabet) => {
                        const isGuessed = guessedLetters.includes(alphabet)
                        const isCorrect =
                            isGuessed &&
                            currentWord.toLowerCase().includes(alphabet)
                        const isIncorrect =
                            isGuessed &&
                            !currentWord.toLowerCase().includes(alphabet)

                        return (
                            <button
                                key={alphabet}
                                disabled={isGameOver}
                                onClick={() => addGuessedLetter(alphabet)}
                                className={`
                                    w-11 h-11 rounded-xl font-semibold text-white transition-all duration-200
                                    ${isCorrect && "bg-green-500 scale-105"}
                                    ${isIncorrect && "bg-red-500"}
                                    ${!isGuessed && "bg-slate-700 hover:bg-slate-600"}
                                    ${isGameOver && "opacity-60 cursor-not-allowed"}
                                `}
                            >
                                {alphabet.toUpperCase()}
                            </button>
                        )
                    })}
                </div>

                {/* New Game Button */}
                {isGameOver && (
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={resetGame}
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-200"
                        >
                            Start New Game
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Keyboard