import React, { Component } from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import styles from "../css/postcard.module.css"

export default function NavBar() {
    return (
    <Nav className={styles.nav} variant="pills" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="https://newsletter-by-fjk.herokuapp.com/" target="_blank">Subscribe</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link href="https://our-stories-post.herokuapp.com/" target="_blank">Post </Nav.Link>
  </Nav.Item>
  {/* <Nav.Item>
  <Nav.Link href="/home">Our Story</Nav.Link>
  </Nav.Item> */}
</Nav>
    )
}


