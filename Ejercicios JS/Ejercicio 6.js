function roundTo(floatNumber, decimals){
    var zeros = 1;
    for (let i = 0; i < decimals; i++) {
        zeros *= 10;
    }
    return Math.round(floatNumber * zeros) / zeros;
}

const roundedResult = roundTo(2.123, 2);
console.log(roundedResult);// 2.12
const roundedResult2 = roundTo(1.123456789, 6);
console.log(roundedResult2);// 1.123457