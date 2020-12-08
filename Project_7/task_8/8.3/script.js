function move() {
  let elem = document.getElementById('elem');
  console.log(elem.scrollHeight);
  console.log(elem.scrollTop);
  elem.scrollTop = elem.scrollHeight - 400;
}
