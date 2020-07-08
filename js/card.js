'use strict';

// Создаёт карточки объявлений

(function () {
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

  // var map = document.querySelector('.map');
  // var cardTemplate = document.querySelector('#card')
  // .content
  // .querySelector('.map__card');

  // for (var i = 0; i < generateMocks.length; i++) {
  //   var cardElement = cardTemplate.cloneNode(true);
  //   var card = generateMocks[i];
  //   var title = cardElement.querySelector('.popup__title');
  //   title.textContent = card.offer.title;
  //   var address = cardElement.querySelector('.popup__text--address');
  //   address.textContent = card.offer.address;
  //   var price = cardElement.querySelector('.popup__text--price');
  //   price.textContent = card.offer.price + ' ₽/ночь';
  //   // var type = cardElement.querySelector('.popup__type');
  //   // if (type === 'Квартира') {
  //   //   card.offer.type = 'flat';
  //   // }
  //   //offer.rooms
  //   //offer.checkin
  //   //features
  //   var description = cardElement.querySelector('.popup__description');
  //   description.textContent = card.offer.description;
  //   //photos
  //   //скрытие карточки
  //   window.pin.fragment.appendChild(cardElement);
  // }
  // map.appendChild(window.pin.fragment);

  window.card = {
    generateMocks: generateMocks
  };
})();
