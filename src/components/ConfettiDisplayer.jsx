
 import {useWindowSize} from 'react-use'
import Confetti from 'react-confetti'

function ConfettiDisplayer() {
    const { width, height } = useWindowSize()
  return (
    <div>
        <Confetti
            width={width}
            height={height}
        />
      
    </div>
  )
}

export default ConfettiDisplayer
    