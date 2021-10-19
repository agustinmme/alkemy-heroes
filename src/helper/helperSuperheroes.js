const balanceHeroes = (Allheroes,{ alignment }) => {
  if (alignment === "good") {
    const countGood = Allheroes.reduce(
      (total, x) => (x.alignment === "good" ? total + 1 : total),
      0
    );
    if (countGood < 3) {
      return true;
    } else {
      return false;
    }
  } else {
    const countBad = Allheroes.reduce(
      (total, x) => (x.alignment === "bad" ? total + 1 : total),
      0
    );
    if (countBad < 3) {
      return true;
    } else {
      return false;
    }
  }
};

const checkNotRepeat = (Allheroes,{ name }) => {
  //Se podria cambiar a un includes el === para denegar agregar variantes del mismo heroe Ej: Batman,Batman 2
  return !(Allheroes.filter(x=>x.name===name).length > 0)
};

const convertToPowerstats = (superheroes) => {
  const newArray = new Array(6).fill(0);
  for (let index = 0; index < superheroes.length; index++) {
    newArray[0]+=parseInt(superheroes[index].powerstats.intelligence);
    newArray[1]+=parseInt(superheroes[index].powerstats.strength);
    newArray[2]+=parseInt(superheroes[index].powerstats.speed);
    newArray[3]+=parseInt(superheroes[index].powerstats.durability);
    newArray[4]+=parseInt(superheroes[index].powerstats.power);
    newArray[5]+=parseInt(superheroes[index].powerstats.combat);
  }
  const max = Math.max(...newArray);
  const STATPOWER = { 
    0:"Intelligence",
    1:"Strength",
    2:"Speed",
    3:"Durability",
    4:"Power",
    5:"Combat"
  }
  return {name:STATPOWER[newArray.indexOf(max)],value:(max/superheroes.length) || 0};
};

const convertToHyW = (superheroes) => {
  const newArray = new Array(2).fill(0);
  for (let index = 0; index < superheroes.length; index++) {
    //Fixeo con 0 porque algunso endpoint no tiene mts ni kg.
    newArray[0]+=parseInt(superheroes[index].appearance.weight[1]) || 0;
    newArray[1]+=parseInt(superheroes[index].appearance.height[1]) || 0;
  }
  return {"height":(newArray[1]/superheroes.length/100),"weight":(newArray[0]/superheroes.length)};
};
export default { balanceHeroes,checkNotRepeat,convertToPowerstats,convertToHyW };
