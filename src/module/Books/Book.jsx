import { CustomContext } from "../hooks/Context";

import React, {useContext} from "react";

const Book = (props) => {
  const {removeBook} = useContext(CustomContext)
    return(
      <div className="book" onClick={() => removeBook(props.id)} >
      <h2 >{props.name}</h2>
      <p>{props.year}</p>
      <p>{props.price}</p>
      <h3>{props.rezume}</h3>
      </div>
    );
  };


  export default  Book;