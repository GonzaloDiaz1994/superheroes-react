import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";

const Superhero = () => {

    const {id} = useParams();
    const [hero, setHero] = useState({});

    useEffect(() =>{
        getHero();
    },[])

    const getHero =()=>{
        axios.get(`https://superheroapi.com/api.php/855471748696658/${id}`)
            .then((response) => {setHero(response.data)
            console.log(hero)})
            .catch((error) => console.log(error));
    }

    return(
        <div>
            <NavBar/>
            {hero.id}
            {hero.name}
            <img src={hero.image.url} alt='batman'/>
        </div>
    )
}

export default Superhero;