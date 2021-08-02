import React from "react";
import {Card, Col, Container} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import '../css/SuperheroItem.css'

const SuperheroItem = (props) => {

    const history = useHistory();

    const goToSuperHero = () => {
        history.push(`/superhero/${props.hero?.id}`)
    }

    return (
        <Container>
            <Card border="success" className='cardHero'>
                <Col className='itemCol'>
                    <Card.Img className='itemImg' onClick={goToSuperHero} src={props.hero?.image?.url}/>
                    <Card.Body>
                        <Card.Title className='itemTitle'>{props.hero?.name}</Card.Title>
                    </Card.Body>
                </Col>
            </Card>
        </Container>
    )
}

export default SuperheroItem;