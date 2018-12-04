import React, { Component } from 'react';
import { Button, Row, Col, Container} from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
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
          <li><a href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a class="active" href="#about">About</a></li>
        </ul>
      </div>
    );
  }
}
export default Navbar;
