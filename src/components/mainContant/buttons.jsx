import Refresh from '../assets/refresh 1.png'


function Buttons({counter, setCounter}) {

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
    );
}
export default Buttons;