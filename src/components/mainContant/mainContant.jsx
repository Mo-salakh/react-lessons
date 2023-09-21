import { useState } from 'react';
import Buttons from './buttons';
import Number from './number';

function MainContant() {

    const[counter, setCounter] = useState(0)
    
    return (

        <div className="Contant">
        <Number counter={counter} />
        <Buttons counter={counter} setCounter={setCounter}/>
        </div>
        
    );
  }
  
  export default MainContant;