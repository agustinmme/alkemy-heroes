import { types } from "../types/types";
const initialState = [];
function superheroReducers(state = initialState, action) {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case types.fetchMyHeroes:
      newState = action.payload;
      return newState;
    default:
      return state;
  }
}

export default superheroReducers;