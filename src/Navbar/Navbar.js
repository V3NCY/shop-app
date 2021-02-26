import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../home-solid.svg";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md">
      <div className="container">
        <NavbarBrand tag={Link} to="/">
          <Logo width="30" />
          Movies
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/movies">
                Movies
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/tvseries">
                TV Series
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/products">
                Products
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/tickets">
                Tickets
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/orders">
                Orders
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contacts">
                Contacts
              </NavLink>
            </NavItem>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search..."
              className="mr-sm-2"
            />
            <Button variant="light">Search</Button>
          </Form>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Example;
