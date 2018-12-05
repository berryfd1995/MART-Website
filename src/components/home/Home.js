import React, { Component } from 'react';
import {Button, Row, Col, Container} from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import './home.css';
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
        <div classNmae="content">
          <p>This website was created by Daniel Berry</p>
        </div>
        <Link to="/Works">
          <div className="button">
          Enter
          </div>
        </Link>
      </Container>
    );
  }
}
export default Home;
