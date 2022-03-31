let array = [1,2,3, [1,2,3, [1,2,3]]];

// Recibe como argumento el nivel de aplanado
console.log(array.flat()); // [ 1, 2, 3, 1, 2, 3, [ 1, 2, 3 ] ]
console.log(array.flat(2)); // [1, 2, 3, 1, 2, 3, 1, 2, 3 ]