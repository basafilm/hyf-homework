import React from 'react';
import { BrowserRouter , Switch, Route , Link} from "react-router-dom";

import './Css/App.css';
import GitUser from './Pages/GitUser';
import Home from './Pages/Home';
import About from './Pages/About';


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
                     <li>
                        <Link to='/About'> About </Link>
                     </li>
               </ul>
            
        </nav>
        <div className={'mainSection'}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route  path="/About" component={About} />
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

