/*
Dado tres arrays de números, sacar en un nuevo array
la intersección de estos. 
*/

const arrNumber1 = [1, 2, 3];
const arrNumber2 = [1, 2, 3, 4, 5];
const arrNumber3 = [1, 4, 7, 2];
const intersection = [];

for (let i = 0; i < arrNumber1.length; i++) {
    for (let j = 0; j < arrNumber2.length; j++) {
        for (let x = 0; x < arrNumber3.length; x++) {
            if(arrNumber1[i] === arrNumber2[j] && arrNumber1[i] === arrNumber3[x]){
                intersection.push(arrNumber1[i]);
            }
        }
    }
}

console.log(intersection);
