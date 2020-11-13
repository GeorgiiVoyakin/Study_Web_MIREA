function check(number) {
  if (number === 0 | number === 2) {
    number += 7;
  } else {
    number /= 10;
  }
  console.log(number);
}

let a = 5;
check(a);
a = 0;
check(a);
a = -3;
check(a);
a = 2;
check(a);
