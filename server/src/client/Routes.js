import React from 'react';
import { Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';

export default() => {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    );
}