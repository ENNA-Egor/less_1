import React from "react";

const Book = (props) => {
    return(
      <div className="book">
      <h2>{props.name}</h2>
      <p>{props.year}</p>
      <p>{props.price}</p>
      <h3>{props.rezume}</h3>
      </div>
    );
  };


  export default  Book;