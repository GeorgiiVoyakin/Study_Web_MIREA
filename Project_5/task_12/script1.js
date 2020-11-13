function check(number) {
  if (number > 0 & number < 5) {
    console.log("Верно");
  } else {
    console.log("Неверно");
  }
}

let a = 5;
check(a);
a = 0;
check(a);
a = -3;
check(a);
a = 2;
check(a);
