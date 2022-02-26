const upCase = str =>
  str.split('').reduce((res, letter, i) => {
    if (letter === letter.toUpperCase()) {
      res.push(i);
    }
    return res;
  }, []);

console.log(upCase('asDfGasAA'));
