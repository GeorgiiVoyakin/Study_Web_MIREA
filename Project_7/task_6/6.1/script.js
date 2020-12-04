function change() {
  let articles = document.getElementsByTagName('p');

  for (var i = 0; i < articles.length - 1; i++) {
    articles[i].style.color = 'red';
    articles[i].style.fontStyle = 'italic'
  }
}
