function change() {
  let text = document.getElementById('textField');
  text.style.color = 'red';
  text.size = 100;
  text.style.borderRadius = '10px';
  text.value = 'сообщение 2'
  document.getElementById('button').disabled = true;
}
