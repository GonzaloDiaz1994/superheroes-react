import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {useStore} from "../store/StoreProvider";
import SuperheroItem from "./SuperheroItem";
import NavBar from "./NavBar";
import {Row} from "react-bootstrap";

const Results = () => {

    const {name} = useParams()
    const {token_api} = useStore()
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        getHeroes();
    }, [name])

    const getHeroes = () => {

        axios.get(`https://superheroapi.com/api.php/${token_api}/search/${name}`)
            .then((response) => {
                setHeroes(response.data.results)
                console.log(response.data.results)
            })
            .catch((error) => console.log(error));
    }

    return (
        <>
            <NavBar/>
            <div className='container-fluid'>
                <Row xs={2} md={4} lg={5}>
                    {heroes?.map((hero) => (
                        <SuperheroItem hero={hero}/>
                    ))}
                </Row>
            </div>

        </>
    )
}

export default Results;