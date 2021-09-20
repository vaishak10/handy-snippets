let str = "what is your name ?", capitalizedString;
let strArray = str.split(' ');
strArray = strArray.map(str => str[0].toUpperCase() + str.slice(1));
capitalizedString = strArray.join(' ');
console.log(capitalizedString);