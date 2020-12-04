window.setInterval(setTime, 1000);

function setTime() {
  let date = new Date();
  let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  document.getElementById('time').innerHTML = time;
}
