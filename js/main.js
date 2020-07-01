'use strict';

var objects = function () {
  var objectsList = [];
  for (var i = 1; i <= 8; i++) {
    var typeList = ['palace', 'flat', 'house', 'bungalo'];
    var checkinList = ['12:00', '13:00', '14:00'];
    var checkoutList = ['12:00', '13:00', '14:00'];
    var featuresList = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
    var photosList = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
    var obj =
    {
      'author': {
        'avatar': 'img/avatars/user0' + i + '.png',
      },
      'offer': {
        'title': 'Случайная строка ' + i,
        'address': '' + i + ', ' + i,
        'price': i * 100,
        'type': typeList[Math.random() * (3 - 0) + 0],
        'rooms': Math.random() * (6 - 1) + 1,
        'guests': Math.random() * (9 - 1) + 1,
        'checkin': checkinList[Math.random() * (2 - 0) + 0],
        'checkout': checkoutList[Math.random() * (2 - 0) + 0],
        'features': featuresList.slice(0, Math.random() * (5 - 1) + 1),
        'description': 'Случайная строка с описанием',
        'photos': photosList.slice(0, Math.random() * (3 - 1) + 1),
      },
      'location': {
        'x': Math.random() * (100 - 0) + 0,
        'y': Math.random() * (630 - 130) + 130,
      }
    };
    objectsList.push(obj);
  }
  return objectsList;
};

var mocks = objects();
var mapPins = document.querySelector('.map__pins');
var pin = document.querySelector('#pin')
.content
.querySelector('.map__pin');

var fragment = document.createDocumentFragment();
for (var j = 0; j < mocks.length; j++) {
  var mapElement = pin.cloneNode(true);
  var mock = mocks[j];
  mapElement.style.left = (mock.location.x - 25) + 'px';
  mapElement.style.top = (mock.location.y - 70) + 'px';
  var img = mapElement.querySelector('img');
  img.src = mock.author.avatar;
  img.alt = mock.offer.title;
  fragment.appendChild(mapElement);
}
mapPins.appendChild(fragment);

var adFormFieldsets = document.querySelector('.ad-form fieldset');
adFormFieldsets.setAttribute('disabled', 'disabled');

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

adFormAddress.value = (offsetLeft + (MAP_PIN_MAIN_WIDTH / 2)) + ', ' + (offsetTop + (MAP_PIN_MAIN_HEIGHT / 2));
var fieldsets = document.querySelectorAll('fieldset');
for (var i = 0; i < fieldsets.length; i++) {
  fieldsets[i].setAttribute('disabled', '');
}

var initMap = function () {
  var map = document.querySelector('.map');
  map.classList.remove('map--faded');
  var adForm = document.querySelector('.ad-form');
  adForm.classList.remove('ad-form--disabled');
  adFormFieldsets.removeAttribute('disabled');
  mapFilters.classList.remove('map__filters--disabled');
  adFormAddress.value = (offsetLeft + (MAP_PIN_MAIN_WIDTH / 2)) + ', ' + (offsetTop + (MAP_PIN_MAIN_HEIGHT / 2) + MAP_PIN_MAIN_AFTER_HEIGHT);

  for (var i = 0; i < fieldsets.length; i++) {
    fieldsets[i].removeAttribute('disabled', '');
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

var adFormTime = document.querySelector('.ad-form__element--time');
adFormTime.onchange = function (evt) {
  var timeIn = document.querySelector('#timein');
  var timeOut = document.querySelector('#timeout');
  timeIn.value = evt.target.value;
  timeOut.value = evt.target.value;
};

var type = document.querySelector('#type');
var price = document.querySelector('#price');
type.onchange = function () {
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
};

var roomNumber = document.querySelector('#room_number');
var capacity = document.querySelector('#capacity');

capacity.selectedIndex = '2';
capacity.options[0].disabled = true;
capacity.options[1].disabled = true;
capacity.options[3].disabled = true;


roomNumber.onchange = function () {
  if (roomNumber.selectedIndex === '0') {
    capacity.selectedIndex = '2';
    capacity.options[0].disabled = true;
    capacity.options[1].disabled = true;
    capacity.options[3].disabled = true;
    capacity.options[2].disabled = false;
  }
  if (roomNumber.selectedIndex === '1') {
    capacity.selectedIndex = '1';
    capacity.options[0].disabled = true;
    capacity.options[2].disabled = true;
    capacity.options[3].disabled = true;
    capacity.options[1].disabled = false;
  }
  if (roomNumber.selectedIndex === '2') {
    capacity.selectedIndex = '0';
    capacity.options[1].disabled = true;
    capacity.options[2].disabled = true;
    capacity.options[3].disabled = true;
    capacity.options[0].disabled = false;
  }
  if (roomNumber.selectedIndex === '3') {
    capacity.selectedIndex = '3';
    capacity.options[0].disabled = true;
    capacity.options[1].disabled = true;
    capacity.options[2].disabled = true;
    capacity.options[3].disabled = false;
  }
};
