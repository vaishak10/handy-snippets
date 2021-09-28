const array = [1,2,3,4,5,6,7,8,9];

const sum = array.reduce((accumulator,currentValue) => accumulator + currentValue, 0);
console.log(sum); //Output: 45