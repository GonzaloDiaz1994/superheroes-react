import axios from "axios";

const token_id = 855471748696658;

const Api = {

    getSuperhero: (id) => {
        return axios.get(`https://superheroapi.com/api.php/${token_id}/${id}`)
    },
    searchHero: (name) => {
        return axios.get(`https://superheroapi.com/api.php/${token_id}/search/${name}`)
    }
}

export default Api;