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

export default { balanceHeroes,checkNotRepeat };
