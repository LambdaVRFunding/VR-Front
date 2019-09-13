import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Dreamers from './pages/Dreamers';
import Login from './pages//Login';
import Register from './pages/Register';
import Investors from './pages/Investors';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/dreamers" component={Dreamers} />
      <Route path="/investors" component={Investors} />
    </Router>
  );
}

export default App;
