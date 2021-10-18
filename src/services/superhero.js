import axios from "axios";

const tokenHero = "10226544957598740";

const baseUrl = `https://superheroapi.com/api.php/${tokenHero}`;

const fetchById = async (id) => {
  const { data } = await axios.get(`${baseUrl}/${id}`);
  return data;
};

const fetchGroupById = async (arrayIds) => {
  let newArray = [];
  for (let index = 0; index < arrayIds.length; index++) {
    const { data } = await axios.get(`${baseUrl}/${arrayIds[index]}`);
    const { id,name, powerstats, appearance, biography, image } = data;
    newArray.push({ id, powerstats, appearance, alignment:biography.alignment,name, image });
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

const fetchImage= async (id) => {
  const { data } = await axios.get(`${baseUrl}/${id}/image`);
  return data;
};
export default { fetchById, fetchByName, fetchGroupById,fetchAppearance,fetchWork,fetchBiography,fetchImage };
