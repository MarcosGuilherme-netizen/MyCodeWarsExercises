/*

Conclua a solução para que ela retorne a soma de todos os múltiplos de 3 ou 5 abaixo
 do número passado. Além disso, se o número for negativo, retorne 0 (para idiomas que os possuem).

Observação: se o número for múltiplo de 3 e 5, conte apenas uma vez.


*/

function solution(number) {
  const arrayNumbers = [];

  if (number < 0 || number == 0) {
    return 0;
  }

  for (let i = 0; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      arrayNumbers.push(i);
    }
  }

  const sum = arrayNumbers.reduce((a, b) => a + b);

  if (sum < 0) {
    return 0;
  } else {
    return sum;
  }
}
