const circleStar = (num) => {
  if (num < 1) return false;

  if (num % 2 === 0 && num % 3 === 0) return "CIRCLE STAR";
  else if (num % 2 === 0) return "CIRCLE";
  else if (num % 3 === 0) return "STAR";
  else return "Null";
};

console.log(circleStar(5));
console.log(circleStar(6));
console.log(circleStar(9));
