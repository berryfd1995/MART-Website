import React, { Component } from 'react';
import {Button, Row, Col, Container} from 'reactstrap';
import './about.css';
//This is an example page. Each page should have its own folder.
class About extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return (
      <div className="body">
        This is an example
      </div>
    );
  }
}
export default About;
