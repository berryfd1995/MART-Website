import React, { Component } from 'react';
import {Button, Row, Col, Container} from 'reactstrap';
import './home.css';
//This is an example page. Each page should have its own folder.
class Home extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return (
      <div >
        home
      </div>
    );
  }
}
export default Home;
