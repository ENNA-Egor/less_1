import React from "react";


const PostCard =(props) => {

    return(
        <div className="newcard">
            <h3 style={{color: props.color}}>{props.name}</h3>
            <p>{props.age}</p>
            <p>{props.city}</p>
            <p>{props.year}</p>
        </div>

    )
}

export default PostCard;