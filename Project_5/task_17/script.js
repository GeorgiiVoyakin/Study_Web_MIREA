let arr = [2, 5, 9, 15, 0, 4];

for (i = 0; i < arr.length; i++) {
  if (arr[i] > 3 & arr[i] < 10) {
      console.log(arr[i]);
  }
}

arr = [1, 1, 1, -1, -1, -1];
let sum = 0;

for (i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
      sum += arr[i];
  }
}

console.log();

arr = [1, 2, 5, 9, 4, 13, 4, 10];

for (i = 0; i < arr.length; i++) {
  if (arr[i] === 4) {
      console.log('Есть!');
      break;
  }
}

console.log();

arr = [10, 20, 30, 50, 235, 3000];

arr.forEach((item) => {
  if (item.toString().startsWith('1') | item.toString().startsWith('2') | item.toString().startsWith('5')) {
    console.log(item);
  }
});

console.log();
str = ''
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (i = 0; i < arr.length; i++) {
  str += '-' + arr[i];
}

console.log();

arr = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

for (i = 0; i < arr.length; i++) {
  if (arr[i] === 'суббота' | arr[i] === 'воскресенье') {
    console.log(('%c' + arr[i]), 'font-weight: bold;');
  } else {
    console.log(arr[i]);
  }
}

console.log();

day = arr[1];

for (i = 0; i < arr.length; i++) {
  if (arr[i] != day) {
    console.log(arr[i]);
  } else {
    console.log(('%c' + arr[i]), 'font: italic;');
  }
}

console.log();

let n = 1000;
let num = 0;
while (n > 50) {
  n /= 2;
  num++;
}
console.log(n);
console.log(num);
