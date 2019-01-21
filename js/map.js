ymaps.ready(init);
var myMap;

function init(){     
    myMap = new ymaps.Map("map", {
        center: [59.94, 30.32],
        zoom: 12
    });


    myMap.behaviors.disable(['drag', 'scrollZoom']);

    myPlacemark = new ymaps.Placemark([59.97, 30.31], {
        hintContent: '<div class="map__hint"> ул. Пушкина, д. Колотушкина </div>', 
        balloonContent: [
            '<div class="map__ballon">',
            '<img src="./img/icons/burger.png" alt="burger" class="map__burger-img"/>',
            'Самые вкусные бургеры у нас!',
            '</div>'
        ].join('')
    },
    {
        iconLayout: 'default#image',
        iconImageHref: './img/icons/map-marker.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57]
    });


    myPlacemark2 = new ymaps.Placemark([59.95, 30.33], {
        hintContent: '<div class="map__hint"> ул. Пушкина, д. Колотушкина </div>', 
        balloonContent: [
            '<div class="map__ballon">',
            '<img src="./img/icons/burger.png" alt="burger" class="map__burger-img"/>',
            'Самые вкусные бургеры у нас!',
            '</div>'
        ].join('')
    },
    {
        iconLayout: 'default#image',
        iconImageHref: './img/icons/map-marker.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57]
    });

    myPlacemark3 = new ymaps.Placemark([59.99, 30.28], {
        hintContent: '<div class="map__hint"> ул. Пушкина, д. Колотушкина </div>', 
        balloonContent: [
            '<div class="map__ballon">',
            '<img src="./img/icons/burger.png" alt="burger" class="map__burger-img"/>',
            'Самые вкусные бургеры у нас!',
            '</div>'
        ].join('')
    },
    {
        iconLayout: 'default#image',
        iconImageHref: './img/icons/map-marker.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57]
    });

    myMap.geoObjects.add(myPlacemark);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);
}
