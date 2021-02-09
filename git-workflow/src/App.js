import React from 'react';
import './App.css';
import Start from './views/Start';
import End from './views/End';
import Container from './Container';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Start />
        </Route>
        <Route path={`/chapter1/:number`} container={<Container />}>
          <Container />
        </Route>
        <Route exact path="/end">
          <End />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
