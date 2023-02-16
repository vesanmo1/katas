// Modifica la variable counter al invocar la función para que el numero mostrado sea un 1

const counter = 0;

const sumCounter = () => {
  // 👇🏻 Modifica aquí la variable counter
  const counter = 1;
  return counter;
};

const finalNumber = sumCounter();
// 👆🏻

console.log(counter);

// 👇🏻 Invoca la función para modificarlo
console.log(finalNumber);
// 👆🏻

console.log(counter);
