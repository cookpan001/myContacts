app.controller('MapController', function($scope, $cordovaGeolocation) {
    console.log("MapController");
    var map = new BMap.Map("l-map");
    map.centerAndZoom(new BMap.Point(116.693686, 39.877192), 14);
    map.addControl(new BMap.ZoomControl());
    var scaleControl=new BMap.ScaleControl();
    map.addControl(scaleControl);
    var marker = new BMap.Marker(new BMap.Point(116.693686, 39.877192));// 创建标注      
    map.addOverlay(marker);
    map.addEventListener("click", function(e){      
        console.log(e.point.lng + ", " + e.point.lat);      
    });
});