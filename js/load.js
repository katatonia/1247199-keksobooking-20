'use strict';

// Загружает данные с сервера
(function () {
  var xhr = new XMLHttpRequest ();
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status + ' ' + xhr.statusText);
  });
  xhr.open('GET', 'https://javascript.pages.academy/keksobooking/data');
  xhr.send();

  window.load = {
    xhr: xhr
  };
})();
