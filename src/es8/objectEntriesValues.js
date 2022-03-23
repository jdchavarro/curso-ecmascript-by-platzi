const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
/*
[
  [ 'frontend', 'Oscar' ],
  [ 'backend', 'Isabel' ],
  [ 'design', 'Ana' ]
]
*/

const values = Object.values(data);
console.log(values); // [ 'Oscar', 'Isabel', 'Ana' ]

const keys = Object.keys(data)
console.log(keys); // [ 'frontend', 'backend', 'design' ]