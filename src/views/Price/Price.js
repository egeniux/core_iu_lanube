import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Card, 
  Row, 
  Col, 
  CardHeader, 
  CardBody, 
  ButtonDropdown, 
  DropdownItem, 
  DropdownToggle, 
  DropdownMenu} from 'reactstrap';

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
      searchItems: ['Operatives System', 'vCPUs', 'Memory'],
    };
  }

  toggle(i) {
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
                  <Form action="" method="post" className="form-horizontal">
                  <FormGroup row>
                    <Col md="12">
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <ButtonDropdown isOpen={this.state.first}
                                          toggle={() => { this.setState({ first: !this.state.first }); }}>
                            <DropdownToggle caret color="primary">
                              Search
                            </DropdownToggle>
                            <DropdownMenu className={this.state.first ? 'show' : ''}>
                              <DropdownItem>{this.state.searchItems[0] }</DropdownItem>
                              <DropdownItem>{this.state.searchItems[1]}</DropdownItem>
                              <DropdownItem>{this.state.searchItems[2]}</DropdownItem>
                            </DropdownMenu>
                          </ButtonDropdown>
                        </InputGroupAddon>
                        <Input type="text" id="input1-group3" name="input1-group3" />
                      </InputGroup>
                    </Col>
                  </FormGroup>
                  </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Price;
