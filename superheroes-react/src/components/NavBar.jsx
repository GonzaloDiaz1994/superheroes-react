import React from "react";
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap"

const NavBar = () =>{

    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">wiki-hero</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>

                </Nav>
                <Form className="d-flex ">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-1"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;