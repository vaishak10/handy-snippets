const array = [1,2,3];

[array[0],array[2]] = [array[2],array[0]];

console.log(array); //Output: [ 3, 2, 1 ]