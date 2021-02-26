import React from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const ContactForm = (props) => {
  return (
    <div className="container d-flex justify-content-center p-3 ml-3 mt-4">
     <Card bg="secondary" className="mb-4" style={{ width: '35rem'}}>
        <CardBody>
          <CardTitle tag="h5">Movie House</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Contacts</CardSubtitle>
        </CardBody>
        <img width="100%" src="https://images.squarespace-cdn.com/content/v1/53202c8ee4b0a7434b8e8dbd/1545319940792-XTVUTE7JFJKOD36MC0G5/ke17ZwdGBToddI8pDm48kO2lQNvb5DUfAetBD163myl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0g9xiYCO_4ze-uEG5pWlE5NJ9puxctilllzHfrdn4bnHE3VGTbxBBXtKJDu0cXp1vw/MOVIE+HOUSE+HEADER.jpg?format=2500w" alt="Card image cap" />
        <CardBody>
          <CardText>Address:
                    Plovdiv, Bulgaria,
                    4000,
                    Tsar Boris III Obedinitel Blvd </CardText>
          <CardText>E-mail: contacts@moviehouse.com</CardText>
          <CardText>Telephone: 0898577777</CardText>
        </CardBody>
      </Card>

      <div className="container d-flex justify-content-center ml-5 mt-5">
      <Form bg="secondary" className="mb-3" style={{ width: '30rem'}}>
      <FormGroup row>
        <Label for="exampleEmail" sm={3}>E-mail:</Label>
        <Col sm={10}>
          <Input type="email" name="email" id="exampleEmail" placeholder="Enter your e-mail here..." />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleText" sm={3}>Message:</Label>
        <Col sm={10}>
          <Input type="textarea" name="text" id="exampleText" placeholder="Write your message here..."/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleFile" sm={2}>File:</Label>
        <Col sm={10}>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            Upload your photo here...
          </FormText>
        </Col>
      </FormGroup>
    
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button color="danger">Send</Button>
        </Col>
      </FormGroup>
    </Form>
    </div>
    </div>
  );
};

export default ContactForm;