import "../styles/App.css";

import React, { Component } from "react";
import Board from "./Board";
import Navbar from "./Navbar";
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardEditor from "./CardEditor";
import EditButtons from "./EditButtons";
import Card from "./Card";

class App extends React.Component {
  
  render() {
    return (
     
      <div className="App">
       
       <Router>
         <Navbar/>
         <Switch>
           <Route path='/' exact component={Home} />
           <Route path='/taskmanager' component={Board} />

         </Switch>
       </Router>
       
       
       
      </div>
      
    );
  }
}

export default App;
