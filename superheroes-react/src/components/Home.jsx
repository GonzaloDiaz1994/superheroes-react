import React, {useEffect, useState} from "react";
import NavBar from "./NavBar";
import axios from "axios";
import {useStore} from "../store/StoreProvider";
import {useHistory, useLocation} from "react-router-dom";
import {Row} from "react-bootstrap";
import SuperheroItem from "./SuperheroItem";
import '../css/Home.css'
import Pagination from "./Pagination";


const Home = () =>{

    const {token_api} = useStore();
    const lastId = 731;
    const location = useLocation()
    const query = new URLSearchParams(location.search);
    const size = parseInt(query.get('size')) || 1;
    const limit = parseInt(query.get('limit')) || 10;
    const history = useHistory()
    const [page,setPAge] = useState(1);

    const [heroList, setHeroList] = useState([]);

    useEffect(()=>{
        getHeroList();
    },[page])

    const getHeroList = () => {
            setHeroList([])
            for (let i = size; i < size + limit; i++) {
                axios.get(`https://superheroapi.com/api.php/${token_api}/${i}`)
                    .then((response) => setHeroList(heroList=>[...heroList,response.data]))
                    .catch((error) => console.log(error))
            }
    }

    const nextPage = () =>{
        if(size + limit > lastId){
            query.set('size', lastId - limit)
        }else {
            query.set('size', size + limit )
            setPAge(page + 1)
        }
        history.push(`/home?size=${query.get('size')}&limit=${query.get('limit')}`)
    }

    const previousPage = () =>{
        if(size - limit > 0 ){
            query.set('size', size - limit )
            setPAge(page - 1)
        }else{
            query.set('size', 1);
        }
        history.push(`/home?size=${query.get('size')}&limit=${query.get('limit')}`)
    }

    const allHeroes = () => {
        return(<Row xs={2} md={4} lg={5}>
            {heroList?.map((hero) => (
                <SuperheroItem hero={hero} key={hero.id}/>
            ))}
        </Row>)
    }

    return(
        <div>
            <NavBar/>
            <div className='container-fluid'>
                {allHeroes()}
                <Pagination page={page} previous={previousPage} next={nextPage}/>
            </div>
        </div>
    )
}

export default Home;