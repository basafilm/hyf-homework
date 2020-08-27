import React from 'react';
import { BrowserRouter , Switch, Route , Link} from "react-router-dom";

import './App.css';
import GitUser from './GitUser';
import Home from './Home';


export default function App() {

function notFund () {
      return(
            <p>Page not fund!</p>
      )
}
  return (
  <div>

   <BrowserRouter>
         <nav className={'navBar'}>
               <ul>
                     <li>
                        <Link to='/'> Home </Link>
                     </li>
               </ul>
            
        </nav>
        <div className={'mainSection'}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path='/:id' component={GitUser} />
              <Route path='*' exact={true} component={notFund} />
            </Switch>
        </div>
        <footer className={'navBar'}>
            <ul>
                  <li>Hyf-CPH/ Week-5 React Homework</li>
            </ul>
        </footer>
         
   </BrowserRouter>
  </div>
  );
  }

