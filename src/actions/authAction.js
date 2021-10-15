import { types } from "../types/types";

export const login = (email, token) => {
  return {
    type: types.login,
    payload: {
        email,
        token,
        logged:true
    },
  };
};

export const logout = () => {
    return {
        type: types.logout,
      };
};