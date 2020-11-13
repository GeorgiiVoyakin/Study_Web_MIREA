function check(variable) {
  if (variable === "test") {
    console.log("Верно");
  } else {
    console.log("Неверно");
  }
}

let a = "test";
check(a);
a = "тест";
check(a);
a = 3;
check(a)
