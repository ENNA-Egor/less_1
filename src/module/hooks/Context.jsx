import React, { createContext, useState } from "react";

export const CustomContext = createContext();

export const Context = (props) => {
   const [books, setBooks] = useState([
      { id: 1, name :"JS for beginners", year :"2018", price :"1000", rezume :"Круто" },
      { id: 2, name:"React for beginners", year:"2019", price:"1200", rezume: "Здорово"  },
      { id: 3, name:"Vue for beginners", year:"2021", price:"1500", rezume: "Ещё не понял" },
      { id: 4, name:"React Reduse", year:"2023", price:"800", rezume: "Надо изучить" },
      { id: 5, name:" Bolt CEP", year:"2022", price:"1800", rezume: "Надо изучить TypeScript" },
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