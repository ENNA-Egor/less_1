import React, { useContext } from "react";
import {CustomContext}  from '../hooks/Context'

import Book from "./Book";

const Books = () => {
  
  const { books= [] } = useContext (CustomContext);

    return(
    <div className='books'>
          {
                books.map(book => {
                  <Book key={book.name} {...book}/>
                })
          }

        {/* <div className='two'>
          <Book name="React for beginners" year="2019" price="1200" rezume ="Здорово" />
        </div> 
        <div className='tree'>
          <Book name="Vue for beginners" year="2021" price="1500" rezume ="Ещё не понял"/>
        </div> 
        <div className='four'>
          <Book name="React Reduse" year="2023" price="800" rezume ="Надо изучить"/>
        </div>  */}
    </div> 
      
    );
  };


  export default  Books;