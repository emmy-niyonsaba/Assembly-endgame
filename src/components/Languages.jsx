import { languages } from '/public/data/languages'
const Languages = ({wrongLetters}) => {

  return (
    <div className=" w-130 flex flex-wrap justify-center items-center mx-auto gap-4 p-5">
      {languages.map((language, index) => (
        <div
          key={index}
          className={`p-2 rounded-md flex items-center justify-center  font-bold`}
          style={{
            backgroundColor: wrongLetters.length >index?"#e5e7eb":language.backgroundColor,
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
