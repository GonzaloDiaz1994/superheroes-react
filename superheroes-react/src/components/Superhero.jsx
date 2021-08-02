import React, {useEffect, useState} from "react";
import NavBar from "./NavBar";
import {Col, Container, Row} from "react-bootstrap";
import Description from "./Description";
import Image from "./Image";
import {useParams} from "react-router-dom";
import '../css/Superhero.css'
import Api from "../api/Api";

const Superhero = () => {

    const {id} = useParams()
    const [hero, setHero] = useState({});

    useEffect(() => {
        getHero();
    }, [])

    const getHero = () => {
        Api.getSuperhero(id)
            .then((response) => {
                setHero(response.data)
                console.log(hero)
            })
            .catch((error) => console.log(error));
    }

    return (
        <>
            <NavBar/>
            <Container fluid>
                <Row>
                    <Col md="auto" style={{paddingTop: '0.5%'}}>
                        <Image image={hero.image}/>
                    </Col>
                    <Col>
                        <Description hero={hero}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Superhero;