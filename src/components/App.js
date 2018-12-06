import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


import Home from './home/Home';
import Contact from './contact/Contact';
import About from './about/About';
import Works from './works/Works';
import Footer from './common/Footer';
import Navbar from './common/Navbar';
import HomeBG from './common/background2.jpg';
import OtherBG from './common/mainbackground.gif';

import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {bgImg: HomeBG};
  }
  changeBackground(bgImg){
    //Apply transitions?
    this.setState({bgImg: bgImg})
  }
  getBackground(){
    return(<div className="background" style={{backgroundImage: `url(${this.state.bgImg})`}}/>);
  }
  render() {
    return (
      <div>
        {this.getBackground()}
        <div className="App">
            <Navbar/>
            <Route path="/" exact render={(props) => (<Home {...props}/>)} />
            <Route path="/About" exact render={(props) => (<About {...props}/>)} />
            <Route path="/Contact" exact render={(props) => (<Contact {...props}/>)} />
            <Route path="/Works" exact render={(props) => (<Works {...props}/>)} />
            <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
