import React, { Component } from 'react';
import {
 Button, Row, Col, Container
} from 'reactstrap';
//This is an example page. Each page should have its own folder.
class Works extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return (
      <Container>
        Works
      </Container>
    );
  }
}
export default Works;
