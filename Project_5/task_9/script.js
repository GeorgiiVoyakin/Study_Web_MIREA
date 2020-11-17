let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
console.log(arr[1][0]);

let obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
console.log(obj['js'][0]);

arr = { ru:['понедельник', 'вторник', 'среда', 'четверг', 'пятница' , 'суббота' , 'воскресенье'], en:['monday', 'tuesday', 'wednesday', 'thurday', 'friday', 'saturday', 'sunday'] };
console.log(arr['ru'][0]);
console.log(arr['en'][2]);

let lang = 'ru';
day = 3;

console.log(arr[lang][day-1]);
