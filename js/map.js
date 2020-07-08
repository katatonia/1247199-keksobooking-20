'use strict';

// Управляет карточками объявлений и метками: добавляет на страницу нужную карточку, отрисовывает метки и осуществляет взаимодействие карточки и метки на карте

(function () {
  var mapFilters = document.querySelector('.map__filters');
  mapFilters.classList.add('map__filters--disabled');

  var MAP_PIN_MAIN_WIDTH = 62;
  var MAP_PIN_MAIN_HEIGHT = 62;
  var MAP_PIN_MAIN_AFTER_HEIGHT = 22;
  var mapPinMain = document.querySelector('.map__pin--main');
  var adFormAddress = document.querySelector('#address');
  var offsetLeft = mapPinMain.offsetLeft;
  var offsetTop = mapPinMain.offsetTop;
  var LEFT_BUTTON = 1;

  var createAddress = function () {
    return (offsetLeft + MAP_PIN_MAIN_WIDTH / 2) + ', ' + (offsetTop + MAP_PIN_MAIN_HEIGHT / 2);
  };

  var initMap = function () {
    var map = document.querySelector('.map');
    map.classList.remove('map--faded');
    var adForm = document.querySelector('.ad-form');
    adForm.classList.remove('ad-form--disabled');
    var adFormFieldsets = document.querySelector('.ad-form fieldset');
    adFormFieldsets.removeAttribute('disabled');
    mapFilters.classList.remove('map__filters--disabled');
    adFormAddress.value = (offsetLeft + (MAP_PIN_MAIN_WIDTH / 2)) + ', ' + (offsetTop + (MAP_PIN_MAIN_HEIGHT / 2) + MAP_PIN_MAIN_AFTER_HEIGHT);

    var fieldsets = document.querySelectorAll('fieldset');
    for (var k = 0; k < fieldsets.length; k++) {
      fieldsets[k].removeAttribute('disabled', '');
    }
  };

  mapPinMain.addEventListener('mousedown', function (evt) {
    if (evt.which === LEFT_BUTTON) {
      initMap();
    }
  });

  mapPinMain.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      initMap();
    }
  });

  window.map = {
    adFormAddress: adFormAddress,
    offsetLeft: offsetLeft,
    offsetTop: offsetTop,
    MAP_PIN_MAIN_WIDTH: MAP_PIN_MAIN_WIDTH,
    MAP_PIN_MAIN_HEIGHT: MAP_PIN_MAIN_HEIGHT,
    createAddress: createAddress
  };
})();
