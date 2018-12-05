import React, { Component } from 'react';
import { Button, Row, Col, Container} from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Route, Link } from 'react-router-dom';

import './nav.css';

//This is an example page. Each page should have its own folder.
class Navbar extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Works">Works</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </div>
    );
  }
}
export default Navbar;
