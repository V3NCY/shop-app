import React from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Card,
  CardBody,
} from "reactstrap";


const FormInput = (props) => {
  return (
    <div>
      <Card bg="secondary">
        <CardBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">E-mail:</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter your e-mail here..."
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Message:</Label>
              <Input
                type="textarea"
                name="text"
                id="exampleText"
                placeholder="Write your message here..."
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">File:</Label>
              <Input type="file" name="file" id="exampleFile" />
              <FormText color="muted">Upload a photo...</FormText>
            </FormGroup>
            <FormGroup className="d-flex justify-content-end">
              <Button color="danger">Send</Button>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default FormInput;
