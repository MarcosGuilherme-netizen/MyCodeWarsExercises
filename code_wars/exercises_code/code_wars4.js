/*
Escreva uma função, persistência, que receba um parâmetro positivo num,
e retorne sua persistência multiplicativa,
que é o número de vezes que você deve multiplicar os dígitos em num até chegar a um único dígito.
*/

function persistence(num) {
  let result = 0;

  for (let i = 0; num >= 10; i++) {
    result++;

    let strNum = num.toString();
    let arraytStrNum = strNum.split("");

    num = arraytStrNum.reduce((a, b) => {
      return a * b;
    });
  }

  return result;
}

console.log(persistence(39));
