function start() {
  window.timer = window.setInterval(counter, 1000);
  document.getElementsByName('start')[0].disabled = true;
  document.getElementsByName('stop')[0].disabled = false;
}

function stop() {
  window.clearInterval(window.timer);
  document.getElementsByName('start')[0].disabled = false;
  document.getElementsByName('stop')[0].disabled = true;
}

function counter() {
  let elem = document.getElementById('output');
  elem.innerHTML = parseInt(elem.innerHTML) + 1;
}
