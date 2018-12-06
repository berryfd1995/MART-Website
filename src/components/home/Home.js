import React, { Component } from 'react';
import {Button, Row, Col, Container} from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import './home.css';
import EnterButton from '../common/EnterButton';
//This is an example page. Each page should have its own folder.
class Home extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }


  render(){
    return (
      <Container className="center">
        <div className="title">
          WELCOME
        </div>
        <div className="content">
          <p>This website was created by Daniel Berry</p>
        </div>
        <EnterButton link="/Works" style={{width: "100px" ,margin: "auto"}}/>
      </Container>
    );
  }
}
export default Home;
