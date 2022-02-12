const algorithmic = (num) => {
  if (num < 0) return false;

  const arr = [];
  for (let i = 1; i < num; i++) {
    let counter = i;
    arr.push([]);
    while (counter <= num) {
      arr[i - 1].push(i);
      counter += i;
    }
  }

  const result = arr.map((each) => {
    if (each.reduce((a, b) => a + b) !== num) {
      each.push(num - each.reduce((a, b) => a + b));
    }
    return each;
  });

  return result;
};

console.log(algorithmic(10));
