import axios from "axios";

const tokenHero = "10226544957598740";

const baseUrl = `https://superheroapi.com/api.php/${tokenHero}`;

const fetchById = async (id) => {
  const { data } = await axios.get(`${baseUrl}/${id}`);
  return data;
};

const fetchByName = async (name) => {
  const { data } = await axios.get(`${baseUrl}/search/${name}`);
  return data;
};

export default { fetchById, fetchByName };
