var i = 1;

function start() {
  window.timer = window.setInterval(slider, 1000);
  document.getElementsByName('start')[0].disabled = true;
  document.getElementsByName('stop')[0].disabled = false;
}

function stop() {
  window.clearInterval(window.timer);
  document.getElementsByName('start')[0].disabled = false;
  document.getElementsByName('stop')[0].disabled = true;
}

function slider() {
  let image = document.getElementsByTagName('img')[0];
  if (i === 5) {
    i = 0;
  }
  image.src = ++i + '.jpg';
}
