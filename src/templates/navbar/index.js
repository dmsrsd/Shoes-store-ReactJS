import React, { Component } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { BiShoppingBag, BiUserCircle } from "react-icons/bi";
import "./navbar.css";

class MyNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar className="wrapper">
          <Container className="navCategory">
            <Image
              className="Logo"
              src={require("../../assets/logo/Logo.png").default}
            />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="menuNavbar">
                <Navbar.Collapse>
                  <Nav.Link className="hoverUnderline" href="#link1">
                    New Releases
                  </Nav.Link>
                  <Nav.Link className="hoverUnderline" href="#link2">
                    Men
                  </Nav.Link>
                  <Nav.Link className="hoverUnderline" href="#link3">
                    Women
                  </Nav.Link>
                  <Nav.Link className="hoverUnderline" href="#link4">
                    Customize
                  </Nav.Link>
                </Navbar.Collapse>
              </Nav>
            </Navbar.Collapse>
          </Container>

          <div className="iconKeranjang">
            <div className="icon">
              <BiShoppingBag size={22} />
            </div>
            <div className="icon">
              <BiUserCircle size={22} />
            </div>
          </div>
        </Navbar>
        <div className="notifikasi">
          <div className="icon-notif">l</div>
        </div>
      </div>
    );
  }
}

export default MyNavbar;
