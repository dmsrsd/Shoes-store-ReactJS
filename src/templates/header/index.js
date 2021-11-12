import React, { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container className="navbarContainer">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navbarWrap">
                <NavDropdown
                  title="English"
                  id="basic-nav-dropdown"
                  className="dropText"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                </NavDropdown>

                <Navbar.Collapse className="delivery">
                  <Nav.Link href="#link0">
                    <img
                      className="car"
                      src={
                        require(`../../assets/icons/` +
                          `free-delivery` +
                          `.png`).default
                      }
                    />
                    FREE SHIPPING OVER $100 PURCHASE
                  </Nav.Link>
                </Navbar.Collapse>

                <Navbar.Collapse className="shipping">
                  <Nav.Link href="#link1">Shipping</Nav.Link>
                  <Nav.Link href="#link2">FAQ</Nav.Link>
                  <Nav.Link href="#link3">Contact</Nav.Link>
                </Navbar.Collapse>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
