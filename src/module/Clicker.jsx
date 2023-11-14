import { render } from "@testing-library/react";
import React from "react";

class Clicker extends React.Component{
    state ={
        count : 0
    };

    handleClickPlus =()=>{
        this.setState({count : this.state.count +1});
    }
    handleClickMinus =()=>{
        this.setState({count : this.state.count -1});
    }

    render() {
        return(
            <div className="clicker">
                <div>
                Hello React Clicker
                </div>
                <button className="btn" onClick={this.handleClickPlus}>+</button>
                <input className="inp" type="text" value={this.state.count} />
                <button className="btn" onClick={this.handleClickMinus}>-</button>
            </div>
        );
    }
}

export default  Clicker;

