function checkRootIsExact(number) {
  //Check if squareroot of number is exactly.
  //If true, number perfect square.

  const sqrt = Math.sqrt(number);
  const sqrtFloor = Math.floor(sqrt);

  if (sqrt == sqrtFloor) {
    return true; //is exactly.
  } else {
    return false; //not exactly.
  }
}

function findNextSquare(sq) {
  if (checkRootIsExact(sq) == false) {
    return -1;
  } else {
    sq++;

    while (checkRootIsExact(sq) == false) {
      sq++;
    }

    return sq;
  }
}

console.log(findNextSquare(4));
