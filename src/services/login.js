import axios from "axios";
// Al estar usando vite tengo que utilizar de una manera diferente las variables de entorno.
//Normalmente en react seria process.env y el nombre porque corre por debajo dotenv...
// En el caso de nodejs se instala dotenv se requiere/importa y ya se podria utilizar EJ: process.env.ALKEMY_KEY
const baseUrl = import.meta.env.VITE_ALKEMY_KEY;

const login = async (credentials) => {
  const { data } = await axios.post(baseUrl, credentials);
  return data;
};

export default { login };
