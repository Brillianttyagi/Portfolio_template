import React, { Component } from 'react'
import './css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav } from 'react-bootstrap'
import Logo from './images/logo.png'

class Navb extends Component {

    render() { 
        return (
            <Navbar className="Navbar" bg="light" expand="lg" sticky="top">
                <Navbar.Brand href="/"><img width="50px" src={ Logo } alt="brand"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/project">Project</Nav.Link>
                    <Nav.Link href="#link">Resume</Nav.Link>
                    <Nav.Link href="/contact">Contact Me</Nav.Link>
                    <Nav.Link href="/about">About Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
 
export default Navb;