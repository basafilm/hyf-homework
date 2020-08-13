import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


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


