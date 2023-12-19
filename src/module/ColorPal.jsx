import React from "react";

// const divStyle ={}

const ColorPal = (props) => {

    return(
      <div>
         <div style ={{backgroundColor:props.color}} className= {'color_pall'} >Заданный цвет {props.translete}</div>
      </div>
    );
  };


  export default  ColorPal ;