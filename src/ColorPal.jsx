import React from "react";

// const divStyle ={}

const ColorPal = (props) => {
  //  divStyle = {
  //     bacgroundColor: 'props.color',
  //  };
    return(
      <div>
         {/* <div>{bacgroundColor = props.color}</div> */}

         {/* <div style ={'bacgroundColor:'+props.color} className= {'color_'+props.color} >Заданный цвет {props.color}</div> */}
         <div className= {'color_'+props.color} >Заданный цвет {props.translete}</div>
      </div>
    );
  };


  export default  ColorPal ;