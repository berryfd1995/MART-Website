import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Home from './home/Home';
import Contact from './contact/Contact';
import About from './about/About';
import Works from './works/Works';
import Footer from './common/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route path="/" exact render={(props) => (<Home {...props}/>)} />
          <Route path="/About" exact render={(props) => (<About {...props}/>)} />
          <Route path="/Contact" exact render={(props) => (<Contact {...props}/>)} />
          <Route path="/Works" exact render={(props) => (<Works {...props}/>)} />
          <Footer/>
      </div>
    );
  }
}

export default App;
