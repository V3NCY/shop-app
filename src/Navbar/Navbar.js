import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarText,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import {Form,
  FormControl,
  Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../home-solid.svg';



const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  

 return (
    
    
    <div className="container" >
        <Navbar color="dark" light fixed="top" dark expand="md" className="shadow p-2 mb-5 bg-dark square">
            <NavbarBrand tag={Link} to="/"><Logo/>Movies</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar >
                  <NavItem >
                    <NavLink tag={Link} to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/movies">Movies</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/tvseries">TV Series</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/products">Products</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/contacts">Contacts</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/tickets">Tickets</NavLink>
                </NavItem> 
                <NavItem>
                    <NavLink tag={Link} to="/orders">Orders</NavLink>
                </NavItem>
                              
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search..." className="mr-sm-2" />
                <Button variant="light">Search</Button>
                </Form>

            </Collapse>
    </Navbar>
        </div>
  );
}

export default Example;