window.setInterval(setTime, 1000);

function setTime() {
  let date = new Date();
  let time = ('0' + (23 - date.getHours())).slice(-2) + ':' + ('0' + (59 - date.getMinutes())).slice(-2) + ':' + ('0' + (60 - date.getSeconds())).slice(-2);

  document.getElementById('time').innerHTML = time;
}
