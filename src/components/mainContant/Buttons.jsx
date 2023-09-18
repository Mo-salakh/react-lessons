import Refresh from '../assets/refresh 1.png'



function Buttons() {
    return (
        
        <div className="Buttons">
            <div className="btnPlus">
                <button>+</button>
            </div>
            
            <div className="btnRefresh">
                <button><img src={Refresh} alt="" /></button>
            </div>

            <div className="btnMinus">
                <button>-</button>
            </div>
            
        </div>
        
    )
  }
  
  export default Buttons;