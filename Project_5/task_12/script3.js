function check(number, number2) {
  if (number <= 1 & number2 >= 3) {
    console.log(number + number2);
  } else {
    console.log(number - number2);
  }
}

let a = 1;
let b = 3;
check(a, b);
a = 0;
b = 6;
check(a, b);
a = 3;
b = 5;
check(a, b);
