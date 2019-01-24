import React, { Component } from 'react';
import {
  Collapse,
  Card, 
  Row, 
  Col, 
  CardHeader, 
  CardBody, 
  Fade} from 'reactstrap';

class Price extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      dropdownOpen: new Array(19).fill(false),
    };
  }

  toggle(i) {
    this.setState({ collapse: !this.state.collapse });
    const newArray = this.state.dropdownOpen.map((element, index) => { return (index === i ? !element : false); });
    this.setState({
      dropdownOpen: newArray,
    });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }


  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify "></i><strong>Price Evaluation</strong>
              </CardHeader>
              <CardBody>
                <Row>
                 <Col xs="12" sm="6" md="4">
                    <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
                      <Card>
                        <CardHeader>
                          Amazon EC2 Instances
                          <div className="card-header-actions">
                            {/*eslint-disable-next-line*/}
                            <a className="card-header-action btn btn-minimize" data-target="#EC2" onClick={this.toggle}>
                            <img src="assets/img/aws/AmazonEC2.png" alt="EC2 Instance" height="25" width="25"/>
                            </a>
                          </div>
                        </CardHeader>
                        <Collapse isOpen={this.state.collapse} id="EC2">
                          <CardBody>
                          Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, resizable compute capacity in the cloud. 
                          </CardBody>
                        </Collapse>
                      </Card>
                    </Fade>
                </Col>
                <Col xs="12" sm="6" md="4">
                    <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
                      <Card>
                        <CardHeader>
                          Amazon Redshift
                          <div className="card-header-actions">
                            {/*eslint-disable-next-line*/}
                            <a className="card-header-action btn btn-minimize" data-target="#Redshift" onClick={this.toggle}>
                            <img src="assets/img/aws/AmazonRedshift.png" alt="EC2 Instance" height="25" width="25"/>
                            </a>
                          </div>
                        </CardHeader>
                        <Collapse isOpen={this.state.collapse} id="Redshift">
                          <CardBody>
                          Amazon Redshift is a fast, scalable data warehouse that makes it simple and cost-effective to analyze all your data across your data warehouse and data lake. 
                          </CardBody>
                        </Collapse>
                      </Card>
                    </Fade>
                </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Price;
