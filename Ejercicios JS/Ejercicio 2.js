const arrDirty = [NaN, 0, 5, false, -1, '', undefined, 3, null, 'test'];

const arrTruthy = arrDirty.filter(Boolean); //returns truthy when true and falsy when false, cleaning the array
console.log(arrTruthy);