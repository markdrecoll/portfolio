import React from "react";
import "./style.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Container,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

function Footer() {
  return (
    <div className="fixed-bottom">
      <Navbar color="light" light>
        <Container className="justify-content-center">
          <Nav>
            Mark Drecoll | mark@markdrecoll.com
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;