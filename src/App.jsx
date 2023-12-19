import React, { useState } from 'react';
import './App.css';
import Books from './module/Books';
import Colors from './module/Colors';
import Clicker from './module/Clicker';
import Timer from './module/Timer';
import TimerHook from './module/TimerHook';
import AppRemove from './module/removePost/AppRemove';
import AppRemoveCard from './module/removeCard/AppRemoveCard';
import FormApp from './module/Form/FormApp';
import ClickerHook from './module/ClickerHook';


function App() {

   const [isClickerHook, setClicerHook] = useState(false);

  return (
    <div className="App">
     
      <div className='book'>
        < Books />
        <br />
        < Colors />
      </div>
        <br />
       < Clicker />
       <br /> 
       <div>
        <button onClick={() =>setClicerHook(!isClickerHook)}>Toggle ckicer</button>
       {isClickerHook && < ClickerHook />}
       </div>
       <br /> 
       < Timer />
       <br /> 
       < TimerHook />
       <br />
       <AppRemove />
       <br />
       <AppRemoveCard />
       <br />
       <FormApp />
    </div>

  );
}

export default App;
