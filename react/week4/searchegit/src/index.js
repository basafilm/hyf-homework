import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hyf from './Hyf'



ReactDOM.render(
  <React.StrictMode>
     <h1>Github User Searcher: </h1>
    <div className={'mainSection'}>
    <App  />
    <Hyf  />
    </div>

  </React.StrictMode>,
  document.getElementById('root')
);

