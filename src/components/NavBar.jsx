import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const AppNavbar = () => (
  <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
    <Navbar.Brand as={Link} to="/">Movie Recommendations App</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto" style={{ maxHeight: '100px' }}>
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/recommendations">Recommendations</Nav.Link>
        <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default AppNavbar;
