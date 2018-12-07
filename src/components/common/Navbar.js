import React, { Component } from 'react';
import { Button, Row, Col, Container} from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import LogoWhite from './Logo-white.png';
import './nav.css';

//This is an example page. Each page should have its own folder.
class Navbar extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return (
      <div className="sticky">

        <ul>
          <li className="logo"><img src={LogoWhite} alt="test"/></li>
          <li><Link className="link-style" to="/Contact">Contact</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Works">Works</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul>
      </div>
    );
  }
}
export default Navbar;
