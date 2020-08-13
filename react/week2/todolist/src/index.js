import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


function tick () { 
  const courentDate =  new Date().toLocaleTimeString();
    const dateNow =  'Time Now: ' + courentDate    
    const playdate = document.querySelector('.playDate')
    playdate.innerHTML = dateNow
}
setInterval(tick, 1000);

ReactDOM.render(
  <React.StrictMode>
    <>
    <header className="App-header">
       <h1>Hyf-React week1</h1>
       <p className="playDate" />
    </header>
    <App />
    <footer className="App-header">Malek Shafi'i</footer>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
