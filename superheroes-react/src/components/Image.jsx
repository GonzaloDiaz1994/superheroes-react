import React from "react";
import {Card} from "react-bootstrap";

const Image = (props) =>{

    return(
            <Card style={{ width: '18rem' }} class="col-md-6 float-md-end mb-3 ms-md-3">
                <Card.Img variant="top" src={props.image?.url} />
            </Card>
    )
}

export default Image;