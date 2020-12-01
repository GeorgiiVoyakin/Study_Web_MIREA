let except = document.getElementById('textField');

document.body.style.height = '100vh';

document.body.addEventListener('click', function () {
    document.getElementById('textField').value = 'сообщение 1';
}, false);
except.addEventListener("click", function (ev) {
    document.getElementById('textField').value = 'сообщение 2';
    ev.stopPropagation(); //this is important! If removed, you'll get both alerts
}, false);
