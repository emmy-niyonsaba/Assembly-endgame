import { languages } from "/public/data/languages"

const Languages = ({ wrongLetters }) => {
  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      
      <div className="bg-white shadow-lg rounded-2xl p-6">
        
        <h2 className="text-xl font-semibold text-gray-700 text-center mb-6">
          Programming Languages Status
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {languages.map((language, index) => {
            const isEliminated = wrongLetters.length > index

            return (
              <div
                key={index}
                className={`
                  px-4 py-2 rounded-xl font-semibold text-sm 
                  transition-all duration-300 shadow-md
                  ${isEliminated ? "opacity-40 scale-95 line-through" : "hover:scale-105"}
                `}
                style={{
                  backgroundColor: language.backgroundColor,
                  color: language.color,
                }}
              >
                {language.name}
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default Languages