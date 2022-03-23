const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) 
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'));
        });
}

const helloAsync = async () => {
    console.log('Antes de await');
    const hello = await helloWorld();
    console.log('Despues de await');
    console.log(hello);
}

console.log('Antes de async');
helloAsync();
console.log('Despues de async');
setTimeout(() => console.log('Tiempo pasado 1'), 1000);
setTimeout(() => console.log('Tiempo pasado 2'), 3000);

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction();