import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container } from 'reactstrap';
  import './works.css';
//This is an example page. Each page should have its own folder.
class Works extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  getCards(){

  }
  render(){
    return (
      <Container>
      <div className="title">
        PICTURES
        <hr style={{backgroundColor: "white"}}/>
      </div>
      <div className="sizer">
        <Card >
          <CardImg className="card-img" top width="100%" src="https://66.media.tumblr.com/060aba1ec27f6b41ebaf085b476e4c70/tumblr_pix8atCOz11xiw0rto1_1280.jpg" alt="Card image cap" />
          <CardBody>
            <CardText>I took a trip out to Vail, Colorado! Great palce to visit!</CardText>
          </CardBody>
        </Card>
      </div>
      <div className="sizer">
        <Card >
          <CardImg className="card-img" top width="100%" src="https://66.media.tumblr.com/b9436c1f34270d1b7f189dc2f00ffa74/tumblr_pix8atCOz11xiw0rto2_1280.jpg" alt="Card image cap" />
          <CardBody>
            <CardText>Crystal River, Florida is a great place to go scuba diving!</CardText>
          </CardBody>
        </Card>
      </div>
      <div className="sizer">
        <Card >
          <CardImg className="card-img" top width="100%" src="https://66.media.tumblr.com/c4932d353e0fdac31cccf046e722baa6/tumblr_pix942DrIQ1xiw0rto1_1280.jpg" alt="Card image cap" />
          <CardBody>
            <CardText>Mount Rainier is a great mountain to go hiking around. Great views!</CardText>
          </CardBody>
        </Card>
      </div>
      <div className="sizer">
        <Card >
          <CardImg className="card-img" top width="100%" src="https://66.media.tumblr.com/496c58577d4a2429a47673cc8f72308f/tumblr_pix9ytCmGF1xiw0rto2_1280.jpg" alt="Card image cap" />
          <CardBody>
            <CardText>White Water Rafting at NOC in North Carolina!</CardText>
          </CardBody>
        </Card>
      </div>
      <div className="card-img" className="sizer">
        <Card >
          <CardImg top width="100%" src="https://66.media.tumblr.com/913adca306fb9667e91822a0819f1c20/tumblr_pix9ytCmGF1xiw0rto1_1280.jpg" alt="Card image cap" />
          <CardBody>
            <CardText>View from my apartment while I was living in Seattle, WA!</CardText>
          </CardBody>
        </Card>
      </div>
      <div className="title">
        MEDIA
        <hr style={{backgroundColor: "white"}}/>
      </div>
      <div className="media-box">
        <Card className="card-media">
        <iframe className="media" 
            src="https://www.youtube.com/embed/k4BkYF6SfzA">
            </iframe>
          <CardBody>
            <CardText>My trip to Crystal River, FL. We went to Devils Den, and Rainbow River.</CardText>
          </CardBody>
        </Card>
      </div>
      <div className="media-box">
        <Card className="card-media">
        <iframe className="media"
            src="https://www.youtube.com/embed/JNRRq3nWQ8E">
            </iframe>
          <CardBody>
            <CardText>Part of my Media Arts 210 assignment.</CardText>
          </CardBody>
        </Card>
      </div>
      <div className="media-box">
        <Card className="card-media">
        <iframe className="media"
            src="https://www.youtube.com/embed/LYis2b5dArc">
            </iframe>
          <CardBody>
            <CardText>Back in 2004 (don't judge) I created my first GoPro movie! It was filmed at Lake Martin, AL.</CardText>
          </CardBody>
        </Card>
      </div>

      </Container>
    );
  }
}
export default Works;
