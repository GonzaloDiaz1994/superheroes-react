import React from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const NotFound = () => {

    return (
        <div className='container-fluid'>
            <h1>
                404 Not Found
            </h1>
            <Link to='/home'>
                <Button>Back to home</Button>
            </Link>
        </div>
    )
}

export default NotFound;