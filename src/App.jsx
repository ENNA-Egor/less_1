import React from 'react';
import logo from './logo.svg';
import './App.css';
import Book from './Book';
import ColorPal from './ColorPal';


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
          <ColorPal color='red'/>
          <ColorPal color='blue'/>
          <ColorPal color='green'/>
        </div>     
      </div>

    </div>

  );
}

export default App;
