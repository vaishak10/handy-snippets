# Sum of array values

**<u>Aim</u>**: Given a array of integers, find the sum of the values in the array.

**Input**: `[1,2,3,4,5,6,7,8,9]`. <br>
**Output**: `45`.

**Solution**: 
```js
const array = [1,2,3,4,5,6,7,8,9];

const sum = array.reduce((accumulator,currentValue) => accumulator + currentValue, 0);
```

- `reduce` is used to create a single value out of the array, without affecting the original values of the array.
- `accumulator` is the result of all the previous operations(Here, it's the summing up of all the previous values)
- `currentValue` changes everytime reduce iterates further.
-  0 as the second argument to reduce is the initial value. But it is optional. If we don't pass it, reduce takes the first value from the array.