import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/App.css'
import '../styles/index.css';
import LogIn from './LogIn';
import Cards from './Cards';

class App extends Component {
  
  render() {
    return (      
      <BrowserRouter>          
           <Switch>            
            <Route path="/" component={LogIn} exact/>
            <Route path="/cards" component={Cards}/>           
          </Switch>    
      </BrowserRouter>
   );
 }
}
 
export default App;









