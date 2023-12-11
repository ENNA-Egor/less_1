import React, {useState} from "react";

function ClickerHook (){
  
    const [count, setCount] = useState(0);

    const  handleClickPlus =()=>{
        setCount(count +1)
     }
    const  handleClickMinus =()=>{
        setCount(count -1)
     }


        return(
            <div className="clicker-hook">
                <div>
                Hello React ClickerHook
                </div>
                <button className="btn" onClick={handleClickMinus}>-</button>
                <span> {count}</span>
                <button className="btn" onClick={handleClickPlus}>+</button>
            </div>
        );
}

export default  ClickerHook;

