import React from "react";
import {Accordion} from "react-bootstrap";

const Connections = (props) => {

    return (
        <>
            <Accordion className='fonts'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Connections</Accordion.Header>
                    <Accordion.Body className='backgroundInfo'>
                        Group affiliation: {props.connections?.["group-affiliation"]}<br/>
                        Relatives: {props.connections?.relatives}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default Connections;