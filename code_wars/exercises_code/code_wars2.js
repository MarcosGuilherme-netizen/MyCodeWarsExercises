/*
A função recebe uma string, e deve informar se a mesma é um isograma.
Um isograma é uma palavra onde não se repetem letras.
*/

function isIsogram(str) {
  str = str.toLowerCase();
  const strArray = str.split("");

  let isIsog = true;

  for (let i of strArray) {
    if (strArray.indexOf(i) !== strArray.lastIndexOf(i)) {
      isIsog = false;
    }
  }

  if (isIsog) {
    return true;
  } else {
    return false;
  }
}
