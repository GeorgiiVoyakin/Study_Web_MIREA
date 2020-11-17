function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 100));

console.log();

for (i = 0; i < 10; i++) {
  console.log(getRandomInt(1, 100));
}
