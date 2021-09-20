# Reverse Integer

**<u>Aim</u>**: Given an integer, return an integer that is the reverse order of the given number

**Input**: `-51`

**Output**: `-15`

**Solution**:
```js
let num = -51;
let reversedNum = num.toString().split('').reverse().join('');
reversedNum = parseInt(reversedNum) * Math.sign(num);
console.log(reversedNum);
```

Breakdown of the above snippet: <br>
```
1. (-51).toString().split('').reverse().join('') ==> '51-'
   - (-51).toString()          ==> '-51'
   - '-51'.split('')           ==> ['5', '1', '-']
   - ['5', '1', '-'].reverse() ==> ['-', '1', '5']
   - ['-', '1', '5'].join('')  ==> '-15'

2. parseInt(reversedNum) * Math.sign(num) ==> parseInt('-15') *  Math.sign(-51) ==> 15 * -1 ==>  -15
```
