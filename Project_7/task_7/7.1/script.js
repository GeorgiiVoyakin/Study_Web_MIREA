function start() {
  document.getElementsByTagName('button')[0].disabled = true;
  window.setInterval(counter, 1000);
}

function counter() {
  let elem = document.getElementById('output');
  elem.innerHTML = parseInt(elem.innerHTML) + 1;
}
