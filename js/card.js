'use strict';

// Создаёт карточки объявлений

(function () {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var generateMocks = function () {
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
        'type': typeList[getRandomInt(0, typeList.length - 1)],
        'rooms': getRandomInt(0, 100),
        'guests': getRandomInt(0, 3),
        'checkin': checkinList[getRandomInt(0, checkinList.length - 1)],
        'checkout': checkoutList[getRandomInt(0, checkoutList.length - 1)],
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

  var map = document.querySelector('.map');
  var cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.map__card');

  function createCard(card) {
    var cardFragment = document.createDocumentFragment();
    var cardElement = cardTemplate.cloneNode(true);
    var title = cardElement.querySelector('.popup__title');
    title.textContent = card.offer.title;
    var address = cardElement.querySelector('.popup__text--address');
    address.textContent = card.offer.address;
    var price = cardElement.querySelector('.popup__text--price');
    if (card.offer.price !== null) {
      price.textContent = card.offer.price + ' ₽/ночь';
    }
    var type = cardElement.querySelector('.popup__type');
    switch (card.offer.type) {
      case 'flat':
        type.textContent = 'Квартира';
        break;
      case 'bungalo':
        type.textContent = 'Бунгало';
        break;
      case 'house':
        type.textContent = 'Дом';
        break;
      case 'palace':
        type.textContent = 'Дворец';
        break;
    }
    var rooms = cardElement.querySelector('.popup__text--capacity');
    if (card.offer.rooms !== null && card.offer.guests !== null) {
      rooms.textContent = card.offer.rooms + ' комнаты для ' + card.offer.guests + ' гостей';
    }
    var time = cardElement.querySelector('.popup__text--time');
    if (card.offer.checkin !== null && card.offer.checkout !== null) {
      time.textContent = 'Заезд после ' + card.offer.checkin + ', ' + 'выезд до ' + card.offer.checkout;
    }
    var features = cardElement.querySelector('.popup__features');
    while (features.firstElementChild !== null) {
      features.firstElementChild.remove();
    }
    for (var j = 0; j < card.offer.features.length; j++) {
      var feature = document.createElement('li');
      feature.className = 'popup__feature popup__feature--' + card.offer.features[j];
      features.appendChild(feature);
    }
    var description = cardElement.querySelector('.popup__description');
    description.textContent = card.offer.description;
    var photos = cardElement.querySelector('.popup__photos');
    var photoTemplate = photos.firstElementChild.cloneNode(true);
    photos.firstElementChild.remove();
    for (var i = 0; i < card.offer.photos.length; i++) {
      var photo = photoTemplate.cloneNode(true);
      photo.src = card.offer.photos[i];
      photos.appendChild(photo);
    }
    var avatar = cardElement.querySelector('.popup__avatar');
    avatar.src = card.author.avatar;
    cardFragment.appendChild(cardElement);
    map.insertAdjacentElement('afterbegin', cardFragment.firstElementChild);
  }

  window.card = {
    generateMocks: generateMocks,
    createCard: createCard
  };
})();
