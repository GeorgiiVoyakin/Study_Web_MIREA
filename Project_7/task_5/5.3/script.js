function func() {
  if (document.getElementById('textField').value) {
      /*document.getElementById('textField').style.border = "10px solid";*/
      document.getElementById('text').innerHTML = document.getElementById('textField').value;
  } else {
    /*document.getElementById('textField').style.border = "0.8px solid";*/
    document.getElementById('text').innerHTML = "";
  }
}
