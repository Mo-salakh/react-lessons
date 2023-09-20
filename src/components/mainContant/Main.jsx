import { useState } from 'react';
import Refresh from '../assets/refresh 1.png'






function Main() {


    

    const[counter, setCounter] = useState(0);

    function plus() {
        return (setCounter(counter + 1))
    }

    function minus() {
        setCounter(counter - 1)
           if((counter <= 0)) {setCounter(0)}
        
    }

    function reset() {
        return setCounter(0)
    }




    return (
        <div>

            <div className="Number">
                <p>{counter}</p>
            </div>

            <div className="Buttons">

                <div className="btnPlus">
                    <button onClick={plus}>+</button>
                </div>

                <div className="btnRefresh">
                    <button onClick={reset}><img src={Refresh} alt="" /></button>
                </div>

                <div className="btnMinus" onClick={minus}>
                    <button>-</button>
                </div>

            </div>

            </div>

        

        
    )
  }
  
  export default Main;