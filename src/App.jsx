import React from 'react';
import './App.css';
import Book from './Book';
import ColorPal from './ColorPal';
// import Clicker from './Clicker';


function App() {
  return (
    <div className="App">
     
      <div className='book'>
        <div className='one'>
          <Book name="JS for beginners" year="2018" price="1000"/>
        </div>
        <div className='two'>
          <Book name="React for beginners" year="2019" price="1200" />
        </div> 
        <div className='tree'>
          <Book name="Vue for beginners" year="2021" price="1500" />
        </div> 
        <div className = 'color'>
          <ColorPal color='red' translete ='Красный'/>
          <ColorPal color='blue'translete ='Синий'/>
          <ColorPal color='green'translete ='Зелёный'/>
        </div>   
      </div>
       {/* < Clicker />  */}
    </div>

  );
}

export default App;
