function sum() {
  let a = parseFloat(document.getElementById('textField1').value);
  let b = parseFloat(document.getElementById('textField2').value);

  document.getElementById('result').innerHTML = a + b;
}
