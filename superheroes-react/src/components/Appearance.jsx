import React from "react";
import {Accordion} from "react-bootstrap";

const Appearance = (props) => {


    return (
        <>
            <Accordion className='fonts'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Appearance</Accordion.Header>
                    <Accordion.Body className='backgroundInfo'>
                        Gender: {props.appearance?.gender}<br/>
                        Race: {props.appearance?.race}<br/>
                        Height: {props.appearance?.height[1]}<br/>
                        Weight: {props.appearance?.weight[1]}<br/>
                        Eye color: {props.appearance?.["eye-color"]}<br/>
                        Hair color: {props.appearance?.["hair-color"]}<br/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default Appearance;