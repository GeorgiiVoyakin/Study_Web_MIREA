function countSeconds(time) {
  if (time === 'hour') {
    return 60 * countSeconds('minute');
  } else if (time === 'minute') {
    return 60;
  } else if (time === 'day') {
    return 24 * countSeconds('hour');
  } else if (time === 'month') {
    return 31 * countSeconds('day');
  } else {
    return Nan;
  }
}

var currentdate = new Date();

let hour = currentdate.getHours();
let minute = currentdate.getMinutes();
let second = currentdate.getSeconds();
console.log('%d:%d:%d', hour, minute, second);
