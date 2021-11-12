import axios from "axios";

// Al estar usando vite tengo que utilizar de una manera diferente las variables de entorno.
//Normalmente en react seria process.env y el nombre porque corre por debajo dotenv...
// En el caso de nodejs se instala dotenv se requiere/importa y ya se podria utilizar EJ: process.env.ALKEMY_KEY
const baseUrl = import.meta.env.VITE_SUPERHEROES;

const fetchById = async (id) => {
  const { data } = await axios.get(`${baseUrl}/${id}`);
  return data;
};

const fetchGroupById = async (arrayIds) => {
  let newArray = [];
  for (let index = 0; index < arrayIds.length; index++) {
    const { data } = await axios.get(`${baseUrl}/${arrayIds[index]}`);
    const { id, name, powerstats, appearance, biography, image } = data;
    newArray.push({
      id,
      powerstats,
      appearance,
      alignment: biography.alignment,
      name,
      image,
    });
  }
  return newArray;
};

const fetchByName = async (name) => {
  const { data } = await axios.get(`${baseUrl}/search/${name}`);
  return data;
};

const fetchAppearance = async (id) => {
  const { data } = await axios.get(`${baseUrl}/${id}/appearance`);
  return data;
};

const fetchWork = async (id) => {
  const { data } = await axios.get(`${baseUrl}/${id}/work`);
  return data;
};

const fetchBiography = async (id) => {
  const { data } = await axios.get(`${baseUrl}/${id}/biography`);
  return data;
};

const fetchImage = async (id) => {
  const { data } = await axios.get(`${baseUrl}/${id}/image`);
  return data;
};
export default {
  fetchById,
  fetchByName,
  fetchGroupById,
  fetchAppearance,
  fetchWork,
  fetchBiography,
  fetchImage,
};
