import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import SuperheroItem from "./SuperheroItem";
import NavBar from "./NavBar";
import {Row} from "react-bootstrap";
import Api from "../api/Api";
import '../css/Results.css'

const Results = () => {

    const {name} = useParams()
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        getHeroes();
    }, [name])

    const getHeroes = () => {

        Api.searchHero(name)
            .then((response) => {
                setHeroes(response.data.results)
            })
            .catch((error) => console.log(error));
    }

    const results = () =>{
        return(
            heroes ?
                <div className='container-fluid'>
                    <Row xs={2} md={4} lg={5}>
                        {heroes?.map((hero) => (
                            <SuperheroItem hero={hero}/>
                        ))}
                    </Row>
                </div> : <h2 className='notFound'> Sorry, {name} was not found </h2>
        )

    }

    return (
        <>
            <NavBar/>
            {results()}
        </>
    )
}

export default Results;