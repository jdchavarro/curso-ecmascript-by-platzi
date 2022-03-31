const obj = {
    name: 'Oscar',
    age: 32,
    country: 'MX',
}

/* 
let { name, ...all } = obj;
console.log(name, all); // Oscar { age: 32, country: 'MX' }
*/

let { country, ...all } = obj;
console.log(all); // { name: 'Oscar', age: 32 }