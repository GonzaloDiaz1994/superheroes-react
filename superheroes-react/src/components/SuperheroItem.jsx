import React from "react";
import {Card, Col} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import '../css/SuperheroItem.css'

const SuperheroItem = (props) => {

    const history = useHistory();

    const goToSuperHero = () => {
        history.push(`/superhero/${props.hero?.id}`)
    }

    return (
        // <Card class='cardHero'>
        //     <Col class='itemCol'>
        //         <Card.Img class='itemCard' onClick={goToSuperHero} src={props.hero?.image?.url}/>
        //         <Card.Body>
        //             <Card.Title class='itemTitle'>{props.hero?.name}</Card.Title>
        //         </Card.Body>
        //     </Col>
        // </Card>

            <card class='cardHero '>
                <img className='itemCard img-fluid' src={props.hero?.image?.url} onClick={goToSuperHero} alt={props.hero?.name}/>
                <p/>
                <div className='itemTitle'>
                    {props.hero?.name}
                </div>
            </card>


    )
}

export default SuperheroItem;