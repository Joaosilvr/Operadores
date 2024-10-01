let a = true
let b = false
let c = true


// 1

console.log( a && b ), 'false';
console.log(b && c ), 'false';
console.log(a && c ),'true';
console.log(a && b && c), 'false';

// 2

console.log( a || b ), 'true';
console.log( b || c ), 'true';
console.log( a || c ), 'true';
console.log( a || b || c), 'true';
