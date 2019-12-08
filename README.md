# waddle-map

예측불허, 네비게이션 앱, 와들맵입니다.

- 최단 경로 제공 X
- 경로 예측 X
- 안전 보장 X
- 새로운 경험 O


와들맵은 NAVER Cloud Platform, Maps REST API를 이용한 웹 기반 서비스입니다.
파이썬 Flask와 Apache 2.0, 프로토콜은 REST API로 서버 개발을 하였습니다.

Usages
-----------------------------
![KakaoTalk_20191102_202633061_01](https://user-images.githubusercontent.com/56528658/68070702-ce1f6e00-fd2e-11e9-92b5-d43fa0a54de9.png)

![KakaoTalk_20191102_202633061_06](https://user-images.githubusercontent.com/56528658/68071028-02952900-fd33-11e9-933c-36cd8c6cb947.png)

최대 3개의 길을 제공하여 길 중에 하나를 선택하여 네비게이팅을 해줍니다(추후 개발 예정. 무기한)

Implement
--------
REST API를 이용해 개발하였습니다. MAP API에서 제공받은 Url은 다음과 같습니다


![Screenshot_2019-11-02 Directions 5 - API 참조서](https://user-images.githubusercontent.com/56528658/68070881-77676380-fd31-11e9-949c-8629111a5f46.png)
출발지와 목적지 ,경유지를 입력하면 모든 장소를 지나는 경로와 관련된 정보를 받게 됩니다.
![Screenshot_2019-11-02 Search Places - API 참조서](https://user-images.githubusercontent.com/56528658/68070885-91a14180-fd31-11e9-80d9-783368c8bcfe.png)
사용자가 장소를 입력하였을 때, 장소의 후보 5군데를,  도로명 주소와 좌표로 반환 해줍니다.
![Screenshot_2019-11-02 Geocoding - API 참조서](https://user-images.githubusercontent.com/56528658/68070894-a251b780-fd31-11e9-9492-6dbe29631e7c.png)
경유지의 주소를 Geocoding을 이용해 좌표로 반환해줍니다.

웹에서 출발지와 목적지를 입력하고 장소를 선택해 길찾기를 누르면 서버에서 경로를 받아 전달해주고
웹에서 좌표를 이용해 경로를 렌더링 해줍니다.
