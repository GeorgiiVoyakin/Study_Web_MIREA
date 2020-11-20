let str = 'я учу javascript!';

let amountOfSymbols = str.length;

console.log(str.substr(2, 3));
console.log(str.substring(2, 5));
console.log(str.slice(2,5));

let index = str.indexOf('учу');

let n = 5;

if (str.length > n) {
  var result = str.substr(0, n) + '...';
} else {
  var result = str;
}

console.log(result);
