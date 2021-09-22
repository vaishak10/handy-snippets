let str = "Hi, I am Vaishak";
const matches = str.match(/[aeiou]/gi);
console.log(matches?.length || 0);