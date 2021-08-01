import React from "react";
import {Accordion} from "react-bootstrap";

const Work = (props) => {
    return (
        <>
            <Accordion className='fonts'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Work</Accordion.Header>
                    <Accordion.Body className='backgroundInfo'>
                        Occupation: {props.work?.occupation}<br/>
                        Base: {props.work?.base}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default Work;