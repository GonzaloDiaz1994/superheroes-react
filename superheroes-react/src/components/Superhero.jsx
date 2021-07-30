import React, {useEffect, useState} from "react";
import axios from "axios";
import NavBar from "./NavBar";
import {Col, Container, Row} from "react-bootstrap";
import Description from "./Description";
import Image from "./Image";
import {useStore} from "../store/StoreProvider";
import {useParams} from "react-router-dom";

const Superhero = () => {

    const {token_api} = useStore();
    const {id} = useParams()
    const [hero, setHero] = useState({});

    useEffect(() =>{
        getHero();
    },[])

    const getHero =()=>{
        axios.get(`https://superheroapi.com/api.php/${token_api}/${id}`)
            .then((response) => {setHero(response.data)
            console.log(hero)})
            .catch((error) => console.log(error));
    }


    return(
        <div>
            <NavBar/>
            <Container>
                <Row>
                    <Col md="auto">
                        <Image image={hero.image}/>
                    </Col>
                    <Col>
                        <Description hero={hero}/>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Superhero;