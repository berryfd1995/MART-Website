import React, { Component } from 'react';
import {Button, Row, Col, Container} from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import './enterbutton.css';
//This is an example page. Each page should have its own folder.
class EnterButton extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
        <div style={this.props.style}>
          <Link to={this.props.link}>
            <div className="button">
              Enter
            </div>
          </Link>
        </div>
    );
  }
}
export default EnterButton;
