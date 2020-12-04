var i = 1;
window.setInterval(slider, 1500);

function slider() {
  let image = document.getElementsByTagName('img')[0];
  if (i === 4) {
    i = 0;
  }
  image.src = ++i + '.jpeg';
}
