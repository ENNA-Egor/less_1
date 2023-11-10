import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// tip: чтобы встроить переменную в JSX используйте фигурные скобки {name}
//  const Book = (props) => {
//   return(
//     <div>
//     // React.createElement("h2", {}, props.name),
//     <h2>{props.name}</h2>
//     <p>{props.year}</p>
//     <p>{props.price}</p>
//     // React.createElement("p", {}, props.year),
//     // React.createElement("p", {}, props.price)
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <Book name="JS for beginners" year="2018" price="1000" />
//       <Book name="React for beginners" year="2019" price="1200" />
//       <Book name="Vue for beginners" year="2021" price="1500" />
//     </div>
//   );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
