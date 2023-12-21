import React from "react";

const Card = (props) =>
{
    return(
        <div className="newcard">
            <h2 style={{color: props.color}}>{props.name}</h2>
            <p>{props.text}</p>
        </div>
    )
}

export default Card;