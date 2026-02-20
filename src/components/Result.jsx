const Result = ({isGameLost, isGameWon}) => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center p-5'>
        {isGameWon ? <h1 className='text-3xl font-bold text-white bg-green-500 rounded-lg  flex justify-center p-5 '>Congratulations! You saved the programming world from Assembly!</h1> : 
        isGameLost?<h1 className='text-3xl font-bold text-white bg-red-500 rounded-lg p-5'>Game Over! Assembly has taken over the programming world!</h1>:null}
        
    </div>
  )
}

export default Result
