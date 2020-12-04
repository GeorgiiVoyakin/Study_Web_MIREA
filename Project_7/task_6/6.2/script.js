function change() {
  let articles = document.getElementsByTagName('p');

  for (var i = 0; i < articles.length; i++) {
    articles[i].innerHTML = i + '. ' + articles[i].innerHTML;
  }
}
