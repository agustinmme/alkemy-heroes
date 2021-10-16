import axios from 'axios';

const baseUrl ="http://challenge-react.alkemy.org/"

const login = async credentials=>{
    const { data } = await axios.post(baseUrl,credentials)
    return data;
}

export default {login};