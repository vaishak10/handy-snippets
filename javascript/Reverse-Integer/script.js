let num = -51;
let reversedNum = num.toString().split('').reverse().join('');
reversedNum = parseInt(reversedNum) * Math.sign(num);
console.log(reversedNum);