import React, { createContext, useState } from "react";

export const CustomContext = createContext();

export const Context = (props) => {
   const [books, setBooks] = useState([
      { name :"JS for beginners", year :"2018", price :"1000", rezume :"Круто" },
      { name:"React for beginners", year:"2019", price:"1200", rezume: "Здорово"  },
      { name:"Vue for beginners", year:"2021", price:"1500", rezume: "Ещё не понял" },
      { name:"React Reduse", year:"2023", price:"800", rezume: "Надо изучить" },
   ]);

   const addBook = (book) =>{
      setBooks([book, ...books])
   }

   const removeBook = (id) => {
      setBooks(books.filter(book =>  book.id !== id))
   }

   const value ={
      books,
      addBook,
      removeBook,
   }

   return <CustomContext.Provider value={value}>
      {props.children}
   </CustomContext.Provider>
}