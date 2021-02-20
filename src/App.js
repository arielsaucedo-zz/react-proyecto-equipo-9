import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';


function App() {
  return (
    <Router>
        <div>
          <Switch>

            <Route exact path="/">           
              <Home />
            </Route>
            
          </Switch>
      </div>
    </Router>
  )
}

export default App;
