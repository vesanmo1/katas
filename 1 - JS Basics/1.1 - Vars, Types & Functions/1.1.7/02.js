// Crea una función que reemplace todas las 'a' de un texto por 'i'

// 👇🏻 Define aquí tu función
const replaceA = (text) => {
  return text.replaceAll("a", "i");
};
// 👆🏻

const text1 = replaceA("hola que tal"); // holi que til
const text2 = replaceA("me llamo Carlos"); // me llimo Cirlos

console.log(text1, text2);
