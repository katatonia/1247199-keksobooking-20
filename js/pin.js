'use strict';

// Создаёт метки на карте

(function () {
  var createPins = function () {
    var mocks = window.card.generateMocks();
    var mapPins = document.querySelector('.map__pins');
    var pin = document.querySelector('#pin')
  .content
  .querySelector('.map__pin');

    var pinFragment = document.createDocumentFragment();
    for (var j = 0; j < mocks.length; j++) {
      var mapElement = pin.cloneNode(true);
      var mock = mocks[j];
      mapElement.style.left = (mock.location.x - 25) + 'px';
      mapElement.style.top = (mock.location.y - 70) + 'px';
      var img = mapElement.querySelector('img');
      img.src = mock.author.avatar;
      img.alt = mock.offer.title;
      pinFragment.appendChild(mapElement);
    }
    mapPins.appendChild(pinFragment);
  };

  window.pin = {
    createPins: createPins
  };
})();
