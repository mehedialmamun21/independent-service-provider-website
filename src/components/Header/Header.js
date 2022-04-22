import React from "react";
import {Link} from "react-router-dom";
import "./Header.css";
import {useAuthState} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import {signOut} from "firebase/auth";
import { Container, Nav, Navbar} from "react-bootstrap";
const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>

      <Navbar  collapseOnSelect  expand="lg" sticky="top" bg="primary" variant="dark">
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/checkout">Checkout</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="/blogs">Blogs</Nav.Link>
      <Nav.Link eventKey={2} href="/about">
        About
      </Nav.Link>
    </Nav>
    {user ? (
          <button className="sign-out" onClick={handleSignOut}>
            Sign Out
          </button>
        ) : (
          <div className="log-in">
            <Link to="/login">Login</Link>
          </div>
        )}
  </Navbar.Collapse>
  </Container>
  
</Navbar>
    </div>
  );
};

export default Header;
