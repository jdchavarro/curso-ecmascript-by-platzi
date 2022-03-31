let hello = '    hello world';
let hello2 = 'Hello World      ';

console.log(hello); // '    helo world'
console.log(hello.trimStart()); // hello world
console.log(hello2); // 'Hello World      '
console.log(hello2.trimEnd()); // Hello World