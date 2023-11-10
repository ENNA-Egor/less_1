import logo from './logo.svg';
import './App.css';

const Book = (props) => {
  return(
    <div>
    <h2>{props.name}</h2>
    <p>{props.year}</p>
    <p>{props.price}</p>
    </div>
  );
}


function App() {
  return (
    <div className="App">
     
      <div>
        <Book name="JS for beginners" year="2018" price="1000" />
        <Book name="React for beginners" year="2019" price="1200" />
        <Book name="Vue for beginners" year="2021" price="1500" />
      </div>

    </div>

  );
}

export default App;
