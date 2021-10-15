import axios from 'axios';

const apiUrl ="http://challenge-react.alkemy.org/"

const login = async credentials=>{
    const { data } = await axios.post(apiUrl,credentials)
    return data;
}

export default {login};