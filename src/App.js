import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Respuesta from './components/Respuesta'
import NotFound from './components/NotFound'


function App() {
  return (
    <Router>
        <div>
          <Switch>
            <Route exact path="/">           
              <Home />
            </Route>

            <Route path="/api/products/:id" component={Respuesta}>
            </Route>

            <Route component={NotFound}>
            </Route>

          </Switch>
      </div>
    </Router>
  )
}

export default App;
