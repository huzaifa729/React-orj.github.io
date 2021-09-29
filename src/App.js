
import './App.css';
import Header from './Header';
 import Navbar from './Navbar';
import Live from './Live';
import Live2 from './Live2';
import Footer from './Footer';
import Docs from './Docs';

import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";


function App() {
  return (
     
     <Router>
    <div className="App">
   
     {/* <p>hhh</p> */}
     <Header/>
     <Switch>
     <Route path="/docs" component={Docs} />
     </Switch>
     <Navbar/>
     <Live/>
     <Live2/>
     <Footer/>
    
      
  </div>
  </Router>
 
  
  );
}

export default App;
