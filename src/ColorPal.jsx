import React from "react";

const ColorPal = (props) => {
    return(
      <div>
         {/* <div>{bacgroundColor = props.color}</div> */}

         <div className= {'color_'+props.color} >Заданный цвет {props.color}</div>
      </div>
    );
  };


  export default  ColorPal ;