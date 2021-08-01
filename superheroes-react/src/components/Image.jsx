import React from "react";
import {Card} from "react-bootstrap";
import '../css/Image.css'

const Image = (props) =>{

    return(
            <Card class="imageCard col-md-6 float-md-end mb-3 ms-md-3">
                <Card.Img class='imageConfig' variant="top" src={props.image?.url} />
            </Card>
    )
}

export default Image;