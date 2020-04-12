import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Pages
import Home from "./Pages/Home";
import SafetyPrecautions from "./Pages/SafetyPrecautions";
import Helpline from "./Pages/Helpline";
import LatestUpdates from "./Pages/LatestUpdates";
import DeepDive from "./Pages/DeepDive";
import World from "./Pages/World";

//Components
import Navbar from "./Components/Navbar";

//MUI

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/LatestUpdates">
              <LatestUpdates />
            </Route>
            <Route path="/DeepDive">
              <DeepDive />
            </Route>
            <Route path="/Helplines">
              <Helpline />
            </Route>
            <Route path="/SafetyPrecautions">
              <SafetyPrecautions />
            </Route>
            <Route path="/World">
              <World />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
