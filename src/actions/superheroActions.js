import { types } from "../types/types";

export const fetchMyHeroes = (team) => {
  return {
    type: types.fetchMyHeroes,
    payload: team,
  };
};