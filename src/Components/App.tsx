import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../Routes/Home';
import Selection from '../Routes/Selection';

function App(): JSX.Element {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/:level" component={Selection} />
    </Router>
  );
}

export default App;
