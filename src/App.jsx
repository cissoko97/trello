import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//pages
import LoginAndRegister from "./pages/loginAndRegister/LoginAndRegister.component";
import Home from "./pages/home/home.component";
import Projet from "./pages/projet/projet.component"
class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <Router>
          <Switch>
            <Route exact path="/" component={LoginAndRegister} />
            <Route exact path="/projet" component={Projet} />
            <Route exact path="/projet/:id" component={Home} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
