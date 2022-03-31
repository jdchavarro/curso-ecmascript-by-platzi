const helloWorld = () => {
    return new Promise((resolve, reject) => {
        true
         ? resolve('Hello World')
         : reject(new Error('Test Error'))
    });
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))
// Hello World
// Finalizo