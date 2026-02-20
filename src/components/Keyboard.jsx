function Keyboard (){
    const alphabets="abcdefghijklmnopqrstuvwxyz".split("");
    return (
        <div  className=" flex flex-wrap justify-center gap-2 w-130 mx-auto ">
            {alphabets.map((alphabet) => (
                <button key={alphabet} className=" w-10 h-10 border-2 border-be-black cursor-pointer bg-amber-300 text-lg font-bold">
                    {alphabet.toUpperCase()}
                </button>
            ))}

        </div>

      )              
}

export default Keyboard