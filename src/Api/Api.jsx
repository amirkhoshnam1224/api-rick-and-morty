import axios from "axios";

const API_URL='https://rickandmortyapi.com/api';

const api = axios.create({
    baseURL:API_URL,
})
export const getCharacters = ()=>{
    return api.get('/character')
    .then(response=>response.data.results)
    .catch(error=> console.log(error));

}

export default api;
