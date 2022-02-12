const fs = require("fs");
const { data } = JSON.parse(fs.readFileSync("./javascript/data.json", "utf-8"));

const minify = (array) => {
  const obj = { h: [], d: [] };

  for (let i = 0; i < array.length; i++) {
    obj.d.push([]);
    for (const key in array[i]) {
      if (!obj.h.includes(key)) obj.h.push(key);
      obj.d[i].push(array[i][key]);
    }
  }
  return obj;
};

console.log(minify(data));
