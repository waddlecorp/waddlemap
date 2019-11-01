let arr = JSON.parse(localStorage.getItem('json'));

var daejeon = new naver.maps.LatLngBounds(
    new naver.maps.LatLng(arr.route.trafast[0].summary.start.location),
    new naver.maps.LatLng(arr.route.trafast[0].summary.goal.location));

var map = new naver.maps.Map("map", {
    maxBounds: daejeon,
});

var start = new naver.maps.Marker({
    map: map,
    position: arr.route.trafast[0].summary.start.location
});

var end = new naver.maps.Marker({
    map: map,
    position: arr.route.trafast[0].summary.goal.location
});

function onSuccessGeolocation(start, end) {
    var latitude = (start.getPosition().latitude + end.getPosition().latitude) / 2
    var longitude = (start.getPosition().longitude + end.getPOsition.longitude) / 2
    var location = new naver.maps.LatLng(latitude,
                                         longitude);

    map.setCenter(location); // 얻은 좌표를 지도의 중심으로 설정합니다.
    map.setZoom(10); // 지도의 줌 레벨을 변경합니다.

    infowindow.setContent('<div style="padding:20px;">' + 'geolocation.getCurrentPosition() 위치' + '</div>');

    infowindow.open(map, location);
    console.log('Coordinates: ' + location.toString());
}

// onSuccessGeolocation(start, end)

var polyline = new naver.maps.Polyline({
    map: map,
    path: arr.route.trafast[0].path,
    strokeColor: '#2196F3',
    strokeWeight: 4
});
