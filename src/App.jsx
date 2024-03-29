import React, { useState } from 'react';
import './App.css';
import Books from './module/Books/Books';
import Colors from './module/Colors/Colors';
import Clicker from './module/Clicker/Clicker';
import Timer from './module/Timer/Timer';
import TimerHook from './module/Timer/TimerHook';
import AppRemove from './module/removePost/AppRemove';
import AppRemoveCard from './module/removeCard/AppRemoveCard';
import FormApp from './module/Form/FormApp';
import ClickerHook from './module/Clicker/ClickerHook';
import Cards from './module/Cards/Cards';
import PostCards from './module/PostCard/PostCards';
import { Context } from './module/hooks/Context';

function App() {
    const [isClickerHook, setClicerHook] = useState(false);

    return (
        <div className="App">
            <div className="book">
                <Context>
                    <Books />
                </Context>
                <br />
                <Colors />
            </div>
            <br />
            <Clicker />
            <br />
            <div>
                <button onClick={() => setClicerHook(!isClickerHook)}>
                    Toggle ckicerHook
                </button>
                {isClickerHook && <ClickerHook />}
            </div>
            <br />
            <Timer />
            <br />
            <TimerHook />
            <br />
            <AppRemove />
            <br />
            <AppRemoveCard />
            <br />
            <FormApp />
            <br />
            <Cards />
            <br />
            <PostCards />
        </div>
    );
}

export default App;
