import React from "react";
import Book from "./Book";

const Books = () => {
  
    return(
    <div className='book'>
        <div className='one'>
          <Book name="JS for beginners" year="2018" price="1000" rezume ="Круто"/>
        </div>
        <div className='two'>
          <Book name="React for beginners" year="2019" price="1200" rezume ="Здорово" />
        </div> 
        <div className='tree'>
          <Book name="Vue for beginners" year="2021" price="1500" rezume ="Ещё не понял"/>
        </div> 
        <div className='tree'>
          <Book name="React Reduse" year="2023" price="800" rezume ="Надо изучить"/>
        </div> 
    </div> 
      
    );
  };


  export default  Books;