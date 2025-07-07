let a = 3 // a=3
let c = 0 // c=0
let b = a // b=3
b = a // b=3
c = a // c=3
b = c // b=3
a = b // a=3

// Final values:
console.log('Final values:');
console.log('a =', a); // 3
console.log('b =', b); // 3
console.log('c =', c); // 3