import React, {useEffect, useState} from "react";
import NavBar from "./NavBar";
import axios from "axios";
import {useStore} from "../store/StoreProvider";

const Home = () =>{

    const {token_api} = useStore()
    const limit = 731;
    const [size, setSize] = useState(6);
    const [page, setPage] = useState(0);
    const [heroList, setHeroList] = useState([]);

    const [movePage, setMovePage] = useState(true);


    useEffect(()=>{
            getHeroCard()
    },[page])

    const getHeroCard = () =>{

        if(movePage){
            for (let i = page; i < page+size; i++) {
                axios.get(`https://superheroapi.com/api.php/${token_api}/${i}`)
                    .then((response) => setHeroList(heroList.push(response.data)))
                    .catch((error) => console.log(error));
            }
        }else{
            for (let i = page; i < page-size; i++) {
                axios.get(`https://superheroapi.com/api.php/${token_api}/${i}`)
                    .then((response) => setHeroList(heroList.push(response.data)))
                    .catch((error) => console.log(error));
            }
        }


    }

    const nextPage = () =>{
        setHeroList([]);
        for (let i = 0; i < size && page<limit; i++) {
            setPage(page + size);
            setMovePage(true);
        }
    }

    const previousPage = () =>{
        setHeroList([]);
        for (let i = 0; i < size && page>0; i++) {
            setPage(page - size);
            setMovePage(false)
        }
    }

    return(
        <div>
            <NavBar/>
            <button onClick={previousPage}>previous</button>
            {console.log(heroList)}
            <button onClick={nextPage}>next</button>
        </div>
    )
}

export default Home;