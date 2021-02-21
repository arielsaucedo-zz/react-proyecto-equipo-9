import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import TablesToShow from './components/TablesToShow';

function App() {
  return (
    <Router>
        <div>
          <Switch>

            <Route exact path="/">           
              <Home />
            </Route>

            <Route exact path='/tables'>
              <TablesToShow />
            </Route>
            <default>
              <Home />
            </default>

          </Switch>
      </div>
    </Router>
  )
}

export default App;
