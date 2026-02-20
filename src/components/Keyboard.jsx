function Keyboard (){
    const alphabets="abcdefghijklmnopqrstuvwxyz".split("");
    return (
        <>
        <div  className=" flex flex-wrap justify-center gap-2 w-130 mx-auto ">
            {alphabets.map((alphabet) => (
                <button key={alphabet} className=" w-10 h-10 border-2 border-be-black cursor-pointer bg-amber-300 text-lg font-bold rounded-md">
                    {alphabet.toUpperCase()}
                </button>
            ))}

        </div>
        <button className=" bg-blue-400 p-2 rounded-md flex m-5 mx-auto  items-center">New Game</button>
            </>

      )              
}

export default Keyboard