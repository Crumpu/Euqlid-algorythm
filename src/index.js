'use strict';

let nod;

function euqlid(a, b) {
    if (a % b === 0) {
      return nod = b
    }
   return euqlid(b, a % b)
}

console.log(euqlid(150, 60))