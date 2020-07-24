'use strict';

// Создаёт метки на карте

(function () {
  var mapPins = document.querySelector('.map__pins');

  var createPins = function (mocks) {
    var pin = document.querySelector('#pin')
  .content
  .querySelector('.map__pin');

    var pinFragment = document.createDocumentFragment();
    for (var j = 0; j < mocks.length; j++) {
      var mapElement = pin.cloneNode(true);
      var mock = mocks[j];
      mapElement.dataset.id = j;
      mapElement.style.left = (mock.location.x - 25) + 'px';
      mapElement.style.top = (mock.location.y - 70) + 'px';
      var img = mapElement.querySelector('img');
      img.src = mock.author.avatar;
      img.alt = mock.offer.title;
      pinFragment.appendChild(mapElement);
    }
    mapPins.appendChild(pinFragment);
  };

  var initPinListener = function (mocks) {
    mapPins.addEventListener('click', function (event) {
      var element = event.target;
      var isButton = event.target.matches('.map__pin');
      var isImg = event.target.matches('.map__pin img');
      var isMainPin = event.target.matches('.map__pin--main');

      if (isMainPin || (isImg && element.parentElement.matches('.map__pin--main'))) {
        return;
      } else if (document.querySelectorAll('.map__card').length > 0) {
        var mapCardPopup = document.querySelectorAll('.map__card')[0];
        mapCardPopup.style.display = 'none';
      }

      if (isButton || isImg) {
        var id = isButton ? event.target.dataset.id : event.target.parentElement.dataset.id;
        window.card.createCard(mocks[id]);
      }
    });
  };

  window.pin = {
    createPins: createPins,
    initPinListener: initPinListener
  };
})();
