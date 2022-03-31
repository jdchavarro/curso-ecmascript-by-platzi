const obj = {
    name: 'Oscar',
    age: 32,
}

const obj1 = {
    ...obj,
    country: 'MX',
}

console.log(obj1); // { name: 'Oscar', age: 32, country: 'MX' }