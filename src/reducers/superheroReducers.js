import { types } from "../types/types";
const initialState = [];
function superheroReducers(state = initialState, action) {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case types.fetchMyHeroes:
      newState = action.payload;
      return newState;
    case types.addHeroes:
      newState.push(action.payload);
      return newState;
    case types.deleteHero:
      let newArray = [];
      newArray = newState.filter((element) => element.id !== action.payload);
      return newArray;
    case types.removeHeroes:
      return initialState;
    default:
      return state;
  }
}

export default superheroReducers;
