import React from "react";
import ColorPal from "./ColorPal";


const Colors = ()=> {

    return (
        <div className = 'color'>
        <ColorPal color='red' translete ='Красный'/>
        <ColorPal color='blue'translete ='Синий'/>
        <ColorPal color='green'translete ='Зелёный'/>
        <ColorPal color='aquamarine'translete ='Аквамарин'/>
        <ColorPal color='rgb(115, 209, 60)'translete ='rgb(115, 209, 60)'/>
      </div>   
    );
};

 export default Colors;