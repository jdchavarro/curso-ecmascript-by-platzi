{
    var globalVar = "Globar var";
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);
console.log(globalLet); // ReferenceError: globalLet is not defined

const a = 'b';
console.log(a);
a = 'a';
console.log(a); // TypeError: Assigment to constant variable