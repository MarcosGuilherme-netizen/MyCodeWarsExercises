

function DNAStrand(dna){
    dna = dna.toUpperCase();
    const strArray = dna.split("");

    let char;
    for (char = 0; char < strArray.length; char++) {
      if(strArray[char] == 'A') {
        strArray[char] = 'T'
      } else if (strArray[char] == 'C') {
        strArray[char] = 'G'
      } else if (strArray[char] == 'T') {
        strArray[char] = 'A'
      } else if (strArray[char] == 'G') {
        strArray[char] = 'C'
      } 
    }

    const result = strArray.join("");
    return result;
  }

console.log(DNAStrand('tttt'))