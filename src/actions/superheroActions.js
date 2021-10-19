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

export const addHeroes = (hero) => {
  return {
    type: types.addHeroes,
    payload: hero,
  };
};

export const deleteHero = (id) => {
  return {
    type: types.deleteHero,
    payload: id,
  };
};
