import React, {useState} from "react";
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap"
import {Link, useHistory} from "react-router-dom";

const NavBar = () =>{

    const history = useHistory();
    const [input, setInput] = useState('');

    const handleInputChange = (event) =>{
        setInput(event.target.value);
    }

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
                        onChange={handleInputChange}
                        value={input}
                        aria-label="Search"
                    />
                    <Link to={`/search/${input}`}>
                        <Button variant="outline-success" >Search</Button>
                    </Link>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;