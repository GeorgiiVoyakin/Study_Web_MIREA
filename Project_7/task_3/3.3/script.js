document.getElementById("button").style.width = '70px';

var clicks = 0;
function inc() {
  clicks += 1;
  document.getElementById("button").innerHTML = clicks;
}
