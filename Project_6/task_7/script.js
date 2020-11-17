let arr = [12, 15, 20, 25, 59, 79];
let sum = 0;

for (i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum / arr.length);

function f(number) {
  if (number <= 1) {
    return 1;
  } else {
    return number * f(number - 1);
  }
}
