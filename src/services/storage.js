// No es necesario el transformarlo a JSON para este caso, se podria trabajar solo con el array.
const addHero = (id) => {
  let myHeroesTeam =
    JSON.parse(window.localStorage.getItem("storageAlkemyChallenge")) || [];
  myHeroesTeam.push(id);
  let heroesArrayJSON = JSON.stringify(myHeroesTeam);
  window.localStorage.setItem("storageAlkemyChallenge", heroesArrayJSON);
  return `Agregaste el heroe ${id}`;
};

const getHereos = () => {
  let myHeroesTeam =
    JSON.parse(window.localStorage.getItem("storageAlkemyChallenge")) || [];
  return myHeroesTeam;
};

const deleteHero = (id) => {
  let myHeroesTeam = JSON.parse(
    window.localStorage.getItem("storageAlkemyChallenge")
  );
  let newArray = [];
  newArray = myHeroesTeam.filter((element) => element !== "" + id);
  let heroesArrayJSON = JSON.stringify(newArray);
  window.localStorage.setItem("storageAlkemyChallenge", heroesArrayJSON);
  //Emular retorno endpoint.
  return `Has borrado con exito a ${id}`;
};

export default { addHero, deleteHero, getHereos };
