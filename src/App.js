import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Route,
  NavLink,
  Routes
} from "react-router-dom";
import Home from "./components/Home";
import Stuff from "./components/Stuff";
import Contact from "./components/Contact";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class App extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={NavLink} to="/">
              <img
                alt=""
                src="/favicon.ico"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Home
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/stuff">Features</Nav.Link>
              <Nav.Link as={NavLink} to="/contact">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stuff" element={<Stuff />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    );
  }
}

export default App;
