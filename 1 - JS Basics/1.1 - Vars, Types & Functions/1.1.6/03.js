// Dado el siguiente array de objetos...
const users = [
  {
    name: "Juan",
    age: 36,
  },
  {
    name: "Maria",
    age: 30,
  },
  {
    name: "Paco",
    age: 21,
  },
];

// Escribe entre comillas, que crees que aparecerá en los siguiente log y descomentalo
console.log(users[0].age, "36");
console.log(users.name, "undefined");
console.log(users[0].name, users[1].name, users[2].name, "Juan María Paco");
console.log(users[2].name, "Paco");
