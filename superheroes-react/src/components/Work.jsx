import React from "react";
import {Accordion} from "react-bootstrap";

const Work = (props) => {
    return (
        <>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Work</Accordion.Header>
                    <Accordion.Body>
                        Occupation: {props.work?.occupation}<br/>
                        Base: {props.work?.base}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default Work;