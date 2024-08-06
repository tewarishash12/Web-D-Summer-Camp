const lo = require("lodash");

const numbers=[1,2,3,4,5,6,7,8,9];
console.log(lo.chunk(numbers,2));
console.log(lo.reverse(numbers,2));
console.log(lo.shuffle(numbers,2));
console.log(lo.last(numbers,2));
console.log(lo.first(numbers,2));
console.log(lo.without(numbers,2));