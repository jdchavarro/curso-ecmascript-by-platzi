function oldFunction(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

// es6
function newFunction(name = 'Oscar', age = 32, country = 'MX'){
    console.log(name, age, country);
}

newFunction(); //va a tomar los elementos por defecto
newFunction('Ricardo', 23, 'CO');