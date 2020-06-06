var objects = function() {
  var objectsList = [];
  for (var i = 1; i <= 8; i++) {
    var typeList = ['palace', 'flat', 'house', 'bungalo'];
    var checkinList = ['12:00', '13:00', '14:00'];
    var checkoutList = ['12:00', '13:00', '14:00'];
    var featuresList = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
    var photosList = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"];
    var obj =
    {
      "author": {
          "avatar": 'img/avatars/user0' + i + '.png',
      },
      "offer": {
          "title": 'Случайная строка ' + i,
          "address": '' + i + ', ' + i,
          "price": i * 100,
          "type": typeList[Math.random() * (3 - 0) + 0],
          "rooms": Math.random() * (6 - 1) + 1,
          "guests": Math.random() * (9 - 1) + 1,
          "checkin": checkinList[Math.random() * (2 - 0) + 0],
          "checkout": checkoutList[Math.random() * (2 - 0) + 0],
          "features": featuresList.slice(0, Math.random() * (5 - 1) + 1),
          "description": 'Я случайная строка с описанием',
          "photos":  photosList.slice(0, Math.random() * (3 - 1) + 1);
      },
      "location": {
          "x": Math.random() * (100 - 0) + 0,
          "y": Math.random() * (630 - 130) + 130,
      }
    }
    objectsList.append(obj);
  }

  var map = document.querySelector('.map');
  map.classList.remove('map--faded');

  var mapPins = document.querySelector('.map__pins');
  var pin = document.querySelector('#pin')
  .content
  .querySelector('.map__pin')

  for (var i = 0; i < objectsList.length; i++) {
    var mapElement = pin.cloneNode(true);
    mapPins.appendChild(mapElement);



  }
