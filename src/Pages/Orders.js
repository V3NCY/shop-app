import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Navbar from "../Navbar/Navbar";

const Orders = (props) => {
  return (
      <div>
          <Navbar/>
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Email:</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Your e-mail..." />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Password:</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="Your password..." />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleAddress">Address:</Label>
        <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St..."/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress2">Address 2:</Label>
        <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor..."/>
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">City:</Label>
            <Input type="text" name="city" id="exampleCity" placeholder="Los Angeles..."/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">State:</Label>
            <Input type="text" name="state" id="exampleState" placeholder="California..."/>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Zip:</Label>
            <Input type="text" name="zip" id="exampleZip" placeholder="Your zip code..."/>
          </FormGroup>  
        </Col>
      </Row>
      <FormGroup check>
        <Input type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" check>Subscribe</Label>
      </FormGroup>
      <Button color="danger">Send</Button>
    </Form>
    </div>
  );
}

export default Orders;