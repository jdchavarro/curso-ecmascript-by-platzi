function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next()); // { value: 'Hello, ', done: false }
console.log(generatorHello.next()); // { value: 'World', done: false }
console.log(generatorHello.next()); // { value: undefined, done: true }