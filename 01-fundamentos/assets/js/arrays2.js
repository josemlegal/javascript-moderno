let juegos = ["Zelda", "Mario", "Metroid", "Chrono"];
console.log("Longitud del array:", juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log({ primero, ultimo });

juegos.forEach((elemento, indice, arr) => {
  console.log({ elemento, indice, arr });
});

let nuevaLongitud = juegos.push("F-Zero");
console.log({ nuevaLongitud, juegos });

nuevaLongitud = juegos.unshift("Fire Emblem");

console.log({ nuevaLongitud, juegos });

let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });

console.log(juegos);

let pos = 1;
let juegoBorrados = juegos.splice(pos, 2);
console.log({ juegoBorrados, juegos });

let metriodIndex = juegos.indexOf("Metroid");
console.log({ metriodIndex });
