function change() {
  let links = document.getElementsByTagName('a');

  for (var i = 0; i < links.length; i++) {
    console.log(links[i]);
    links[i].innerHTML += ' (' + links[i].href + ')';
  }
  document.getElementById('btn').disabled = true;
}
