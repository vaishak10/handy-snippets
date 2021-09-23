let array = [1,2,3,4];
let size = 2;

let chunks = [];
let index = 0;

while(index < array.length) {
    chunks.push(array.slice(index,index+size)); 
    index += size;
}

console.log(chunks);