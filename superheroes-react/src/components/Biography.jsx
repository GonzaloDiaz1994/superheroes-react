import React from "react";
import {Accordion} from "react-bootstrap";

const Biography = (props) => {

    return (
        < >
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Biography</Accordion.Header>
                    <Accordion.Body>
                        Full name: {props.bio?.["full-name"]}<br/>
                        Alter egos: {props.bio?.["alter-egos"]}<br/>
                        Aliases: {props.bio?.aliases.map((a) => (
                        <ul><li>{a}</li></ul>))}
                        Place of birth: {props.bio?.["place-of-birth"]}<br/>
                        First appearance: {props.bio?.["first-appearance"]}<br/>
                        Publisher: {props.bio?.publisher}<br/>
                        Alignment: {props.bio?.alignment}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default Biography;