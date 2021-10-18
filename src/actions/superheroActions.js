import { types } from "../types/types";

export const fetchMyHeroes = (team) => {
  return {
    type: types.fetchMyHeroes,
    payload: team,
  };
};

export const removeHeroes = () => {
  return {
      type: types.removeHeroes,
    };
};

export const addHeroes = (id) => {
  return {
    type: types.addHeroes,
    payload: id,
  };
};

export const deleteHero = (id) => {
  return {
    type: types.deleteHeroes,
    payload: id,
  };
};
