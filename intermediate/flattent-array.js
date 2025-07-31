const arr = [1, [2, [3, [4, 5]]]];

const flattened = arr.flat(Infinity);

console.log(flattened); // [1, 2, 3, 4, 5]
