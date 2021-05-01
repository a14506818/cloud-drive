import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HeaderNav() {
  return (
    <Navbar bg="light" expand="">
      <Navbar.Brand as={Link} to="/">
        AppleSheep Drive
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/user">
          Profile
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
