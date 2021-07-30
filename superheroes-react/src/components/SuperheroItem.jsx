import React from "react";
import {Card, Col} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const SuperheroItem = (props) =>{

    const history = useHistory();

    const goToSuperHero = () =>{
        history.push(`/superhero/${props.hero?.id}`)
    }

    return(
            <Card >
                <Col>
                    <Card.Img style={{ width: '10rem' }} onClick={goToSuperHero} src={props.hero?.image?.url}/>
                    <Card.Body>
                        <Card.Title>{props.hero?.name}</Card.Title>
                    </Card.Body>
                </Col>
            </Card>
    )
}

export default SuperheroItem;