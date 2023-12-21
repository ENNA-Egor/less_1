import React from "react";
import Card from "./Card";


const Cards =() => {

    return (
    <div className="cards">
        <div>
            <Card name = 'Proba ' color = 'red' text = 'Первая карточка'/>
        </div> 
        <div>
            <Card name = 'Hello ' color = 'green' text = 'Вторая карточка'/>
        </div> 
        <div>
            <Card name = 'Привет ' color = {'rgb(50, 50, 209)'} text = 'Третья карточка'/>
        </div> 
        <div>
            <Card name = 'Привет React' color = {'rgb(100, 150, 20)'} text = 'Четвёртая карточка'/>
        </div> 
    </div>
    );
};

export default Cards;