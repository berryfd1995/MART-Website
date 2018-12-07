import React, { Component } from 'react';
import {
 Button, Row, Col, Container
} from 'reactstrap';
import './contact.css';
//This is an example page. Each page should have its own folder.
class Contact extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return (
      <Container>
        <div className="title">
          Contact
          <hr style={{backgroundColor: "white"}}/>
        </div>
        <div className="shadow-over format">
            <a href="https://github.com/berryfd1995">
              <div className="title-2">
                Github
              </div>
              https://github.com/berryfd1995
            </a>
        </div>
        <div className="shadow-over format">
          <a href="https://www.tumblr.com/blog/l2envy">
            <div className="title-2">
              Tumblr
            </div>
            https://www.tumblr.com/blog/l2envy
          </a>
        </div>
        <div className="shadow-over format">
          <a href="https://github.com/berryfd1995">
            <div className="title-2">
              Instagram
            </div>
            https://www.instagram.com/martprojectinsta/
          </a>
        </div>
        <div className="shadow-over format">
          <a href="https://www.facebook.com/daniel.berry.3781">
            <div className="title-2">
              Facebook
            </div>
            https://www.facebook.com/daniel.berry.3781
          </a>
        </div>
        <div className="shadow-over format">
            <div className="title-2">
              Email
            </div>
            <div className="body">
              dfberry@email.sc.edu
            </div>
        </div>
      </Container>
    );
  }
}
export default Contact;
