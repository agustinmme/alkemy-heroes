import { types } from "../types/types";
const initialState = {
  email: "",
  token: "",
  logged: false,
};
function authReducer(state = initialState, action) {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case types.login:
      newState = action.payload;
      return newState;
    case types.logout:
      return initialState;
    default:
      return state;
  }
}

export default authReducer;
