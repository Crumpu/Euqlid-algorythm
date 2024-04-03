'use strict';

function euqlid(a, b) {
  let aFloor = Math.floor(a);
  let bFloor = Math.floor(b);

  if (aFloor > 0 && bFloor > 0) {
    if (aFloor % bFloor === 0) {
      return bFloor;
    }
    return euqlid(bFloor, aFloor % bFloor);
  }
  return 'Numbers must be greater than 0';
}

console.log(euqlid(1, 60));
