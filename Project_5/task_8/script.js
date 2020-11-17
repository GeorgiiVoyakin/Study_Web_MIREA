var obj = {a: 1, b: 2, c: 3};
console.log(obj['c']);
console.log(obj.c);

obj = {Коля: '1000', Вася: '500', Петя: '200'};
console.log(obj['Петя']);
console.log(obj['Коля']);

let current_date = new Date();

obj  = {0: 'воскресенье', 1: 'понедельник', 2: 'вторник', 3: 'среда', 4: 'четверг', 5: 'пятница', 6: 'суббота'};
console.log(obj[current_date.getDay()]);

let day = 3;
console.log(obj[day]);
