import React, {useState} from "react";
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap"
import {Link, useHistory} from "react-router-dom";
import '../css/NavBar.css'

const NavBar = () =>{

    const history = useHistory();
    const [input, setInput] = useState('');

    const handleInputChange = (event) =>{
        setInput(event.target.value);
    }

    return(
        <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Brand href="/" className='marginTitle'>wiki-hero</Navbar.Brand>
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
                <Form className="d-flex margins">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="form-control me-2"
                        onChange={handleInputChange}
                        value={input}
                        aria-label="Search"
                    />
                    <Link to={`/search/${input}`}>
                        <Button type='submit' variant="success" >Search</Button>
                    </Link>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;