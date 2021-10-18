import auth from './authReducers';
import superheroes from './superheroReducers'
import {combineReducers} from "redux";


export default combineReducers({
    auth,superheroes
})