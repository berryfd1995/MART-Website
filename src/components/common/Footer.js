import React, { Component } from 'react';
import {
 Button, Row, Col, Container
} from 'reactstrap';
//This is an example page. Each page should have its own folder.
class Footer extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return (
      <Container>
        footer
      </Container>
    );
  }
}
export default Footer;
