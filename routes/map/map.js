'use strict';

angular.module('myApp.map', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/map', {
        templateUrl: 'routes/map/map.html',
        controller: 'MapCtrl'
    });
}])

.controller('MapCtrl', ['$scope', 'dataSource', function ($scope, dataSource) {
    $scope.mapTitle = 'Loading Data...';
    dataSource.get(config.API_URL + '/getAll?callback=JSON_CALLBACK', function (data) {
        var mapOptions = {
                zoom: 10,
                center: new google.maps.LatLng(51.497093, -0.116772),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            },
            infoWindow = new google.maps.InfoWindow({
                maxWidth: 350
            }),
            marker,
            markers = [],
            map = new google.maps.Map(document.getElementById('map'), mapOptions);

        angular.forEach(data.Root.Disruptions[0].Disruption, function (value, key) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(parseFloat(value.CauseArea[0].DisplayPoint[0].Point[0].coordinatesLL[0].split(',')[1]), parseFloat(value.CauseArea[0].DisplayPoint[0].Point[0].coordinatesLL[0].split(',')[0])),
                title: value.location[0],
                infoWindowContent: '<h3>' + value.location[0] + '</h3><h5>' + value.severity[0] + ' Severity - ' + value.status[0] + '</h5><div>' + value.comments[0] + '</div>',
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 8,
                    strokeColor: '#000000',
                    strokeWeight: 1.5,
                    fillColor: '#F43D22',
                    fillOpacity: 1.0
                }
            });
            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.setContent(this.infoWindowContent);
                infoWindow.open(map, this);
            });
            markers.push(marker);
        });

        var markerCluster = new MarkerClusterer(map, markers, {
            gridSize: 100,
            maxZoom: 15,
            averageCenter: true,
            minimumClusterSize: 5
        });

        $scope.mapTitle = 'TIMS Map';

    });
}]);