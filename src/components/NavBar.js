import React, { Component } from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import styles from "../css/postlist.module.css"
import { Link } from "gatsby"


export default function NavBar() {
    return (
      <section className={styles.posts}>
      <h1>Our Stories.Us</h1>
      <h4>universal blog</h4>
       <Nav className={styles.nav} variant="pills" defaultActiveKey="/home">
         <Link to ="/subscribe">Subscribe</Link>
         <Link to ="/">Read</Link>
         <Link to ="/write">Post</Link>
    </Nav>
  </section>
    )
}


