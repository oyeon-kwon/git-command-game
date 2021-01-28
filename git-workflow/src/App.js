import React, { useState } from 'react';
import './App.css';
import Nav from './views/Nav';
import Visual from './views/Visual';
import Terminal from './views/Terminal';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  //! 의문 : 여기서 라우팅을 문제별로 하나씩 다 해주는 것이 최선인가..

  const [Score, setScore] = useState(0)
  // 요 state를 Nav의 props로 내려줄 것

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Link to="/chapter1/1">start</Link>
        </Route>
        <Route exact path={`/chapter1/${1}`}>
          <Nav />
          <Visual />
          <Terminal />
        </Route>
        <Route exact path={`/chapter1/${2}`}>
          <Nav />
          <Visual />
          <Terminal />
        </Route>
        <Route exact path={`/chapter1/${3}`}>
          <Nav />
          <Visual />
          <Terminal />
        </Route>
        <Route exact path={`/chapter1/${4}`}>
          <Nav />
          <Visual />
          <Terminal />
        </Route>
        <Route exact path={`/chapter1/${5}`}>
          <Nav />
          <Visual />
          <Terminal />
        </Route>
        <Route exact path={`/chapter1/${6}`}>
          <Nav />
          <Visual />
          <Terminal />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
