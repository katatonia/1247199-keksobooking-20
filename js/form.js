'use strict';

// Работает с формой

(function () {
  var adFormFieldsets = document.querySelector('.ad-form fieldset');
  adFormFieldsets.setAttribute('disabled', 'disabled');

  window.map.adFormAddress.value = window.map.createAddress();

  var fieldsets = document.querySelectorAll('fieldset');
  for (var i = 0; i < fieldsets.length; i++) {
    fieldsets[i].setAttribute('disabled', '');
  }

  var adFormTime = document.querySelector('.ad-form__element--time');
  adFormTime.onchange = function (evt) {
    var timeIn = document.querySelector('#timein');
    var timeOut = document.querySelector('#timeout');
    timeIn.value = evt.target.value;
    timeOut.value = evt.target.value;
  };

  var type = document.querySelector('#type');
  var price = document.querySelector('#price');
  type.addEventListener('change', function () {
    if (type.value === 'bungalo') {
      price.placeholder = '0';
      price.min = 0;
    } if (type.value === 'flat') {
      price.placeholder = '1000';
      price.min = 1000;
    } if (type.value === 'house') {
      price.placeholder = '5000';
      price.min = 5000;
    } if (type.value === 'palace') {
      price.placeholder = '10000';
      price.min = 10000;
    }
  });

  var adForm = document.querySelector('.ad-form');
  var roomNumber = document.getElementById('room_number');
  var capacity = document.getElementById('capacity');

  function validateRooms() {
    var roomNumberOptions = parseInt(roomNumber.options[roomNumber.selectedIndex].value, 10);
    var capacityOptions = parseInt(capacity.options[capacity.selectedIndex].value, 10);
    if (
      (roomNumberOptions !== 100 && capacityOptions === 0) ||
      (roomNumberOptions === 100 && capacityOptions !== 0) ||
      (roomNumberOptions < capacityOptions)
    ) {
      roomNumber.setCustomValidity('Количество комнат должно соответствовать количеству гостей');
    } else {
      roomNumber.setCustomValidity('');
    }
    adForm.reportValidity();
  }

  roomNumber.addEventListener('change', function () {
    validateRooms();
  });

  capacity.addEventListener('change', function () {
    validateRooms();
  });

  adForm.addEventListener('submit', function (evt) {
    validateRooms();
    if (!adForm.checkValidity()) {
      evt.preventDefault();
    }
  });
})();
