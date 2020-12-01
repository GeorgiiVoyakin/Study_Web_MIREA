function hide() {
  document.getElementById('first').disabled = true;
  document.getElementById('second').disabled = false;
  document.getElementById('textField').style.visibility='hidden';
}

function show() {
  document.getElementById('first').disabled = false;
  document.getElementById('second').disabled = true;
  document.getElementById('textField').style.visibility='visible';
  document.getElementById('textField').value = 'текст';
}
