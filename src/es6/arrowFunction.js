const names = [
    { name: 'Oscar', age: 32 },
    { name: 'Jesica', age: 23 }
]

let oldListOfNames = names.map(function(item) {
    console.log(item.name);
});

let newListOfNames = names.map(item => console.log(item.name));

// con 1 parametro
const arrowFunction2 = name => {
}

// con varios parametros
const arrowFunction1 = (name, age, country) => {
}

// con return resumido
const square = num => num * num;

{
this.saludar = "hola";

function saludame(){
    console.log(this); // undefined
    this.saludar = "chao";
    console.log(this.saludar); // chao
}

const saludameBien = () => {console.log(this.saludar)}; // hola

saludame();
saludameBien();
}

{
function tradicional() {
    return this;
}

const arrow = () => this;

console.log(this === tradicional()); // False
console.log(this === arrow()); // True
}