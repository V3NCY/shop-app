import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const ContactForm = (props) => {
  return (
    <div className="col">
        <Form>
            <FormGroup className="mt-3">
                <Label for="exampleEmail">Email:</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="Your e-mail here..." />
            </FormGroup>
            <FormGroup>
                <Label for="exampleSelect">Select:</Label>
                <Input type="select" name="select" id="exampleSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="exampleText">Your message:</Label>
                <Input type="textarea" name="text" id="exampleText" placeholder="Your message here..."/>
            </FormGroup>
            <Button color="danger">Submit</Button>
        </Form>
    </div>
  );
}

export default ContactForm;