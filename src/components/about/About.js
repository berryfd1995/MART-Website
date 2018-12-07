import React, { Component } from 'react';
import {Button, Row, Col, Container} from 'reactstrap';
import './about.css';
//This is an example page. Each page should have its own folder.
/*
<div className="body">
  This is an example
</div>
*/
class About extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (

      <Container>
        <div className="title">
          About Me
          <hr style={{backgroundColor: "white"}}/>
        </div>
        <div className="body">
        Hello, my name is Daniel, I am a senior at USC studying Computer Science. I love being outdoors, I am always looking for something fun to do. I enjoy wakeboarding, snowboarding, white water rafting, backpacking, scuba diving and other various activities! I have been in software development for around 9 years now, I started around 8-9th grade. I currently work for a company called Boeing doing system integrations.
        </div>
      </Container>
    );
  }
}
export default About;
